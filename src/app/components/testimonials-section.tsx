import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useMemo } from 'react';

import { SiteButton } from './site-button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  name: string;
  text: string;
  /** Малък ред под името (small caps): роля, издание, „клиент“ */
  role?: string;
  /** Портрет за карусела (кръгъл thumbnail). */
  photo?: string;
}

function initialsFromName(name: string): string {
  const cleaned = name.replace(/\./g, ' ').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0]?.[0] ?? '';
    const b = parts[1]?.[0] ?? '';
    return `${a}${b}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? '?').toUpperCase();
}

const testimonials: Testimonial[] = [
  {
    name: 'Александра К.',
    role: 'РЕДАКТОР, ELLE БЪЛГАРИЯ',
    photo: 'https://i.pravatar.cc/128?img=12',
    text: 'Нивото на прецизност е друго измерение. Посещавам студиото от седем години и всеки път е безупречно.'
  },
  {
    name: 'Цвети Петрова',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=25',
    text: 'За мен Ивета е истински професионалист. Ходила съм и при други дами, които правят микроблейдинг на вежди, нищо общо като качество и отношение. Бих се доверила само на нея занапред.'
  },
  {
    name: 'Мария И.',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=33',
    text: 'Невероятен резултат! Веждите ми изглеждат абсолютно естествено.'
  },
  {
    name: 'Ana D.',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=41',
    text: 'Много съм доволна от резултата. Иве, супер си!'
  },
  {
    name: 'Петя Г.',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=47',
    text: 'Процедурата беше безболезнена и резултатът надмина очакванията ми.'
  },
  {
    name: 'Силвия К.',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=52',
    text: 'Перфектни вежди без да губя време всяка сутрин!'
  },
  {
    name: 'Десислава Т.',
    role: 'клиент',
    photo: 'https://i.pravatar.cc/128?img=68',
    text: 'Отлична корекция. Работи се прецизно и с голямо внимание.'
  }
];

function TestimonialSlide({
  testimonial,
  slideIndex,
  total
}: {
  testimonial: Testimonial;
  slideIndex: number;
  total: number;
}) {
  return (
    <div className="relative px-2 pb-2 pt-4 md:px-8 md:pb-4 md:pt-6">
      <blockquote
        className="font-source-sans-3 mx-auto max-w-[34rem] text-center text-[1.45rem] font-light italic leading-[1.35] text-[color:var(--palette-p700)] md:max-w-[40rem] md:text-[1.85rem] md:leading-[1.32] lg:text-[2.1rem]"
        style={{ fontWeight: 300 }}
      >
        „{testimonial.text}“
      </blockquote>

      <footer className="mt-10 flex flex-col items-center justify-center gap-3 md:mt-12 md:flex-row md:gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[color:color-mix(in_srgb,var(--palette-p700)_18%,transparent)] bg-[color:color-mix(in_srgb,var(--palette-bg-white)_65%,var(--palette-bg))] shadow-[0_1px_8px_color-mix(in_srgb,var(--palette-p700)_10%,transparent)] md:h-14 md:w-14">
          {testimonial.photo ? (
            <ImageWithFallback
              src={testimonial.photo}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span
              className="font-source-sans-3 flex h-full w-full items-center justify-center text-[13px] tabular-nums text-[color:var(--palette-p700)] md:text-sm"
              style={{ fontWeight: 500 }}
              aria-hidden
            >
              {initialsFromName(testimonial.name)}
            </span>
          )}
        </div>
        <div className="text-center md:text-left">
          <p
            className="font-source-sans-3 text-lg text-[color:var(--palette-p700)] md:text-xl"
            style={{ fontWeight: 500 }}
          >
            {testimonial.name}
          </p>
          <p className="font-source-sans-3 mt-1 text-[10px] font-normal uppercase tracking-[0.22em] text-[color:var(--palette-p700)]/65 md:mt-1.5 md:text-[11px] md:tracking-[0.26em]">
            {testimonial.role ?? 'клиент'}
          </p>
        </div>
      </footer>

      <p className="sr-only">
        Отзив {slideIndex} от {total}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      fade: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5200,
      pauseOnHover: true,
      arrows: false,
      beforeChange: (_current: number, next: number) => setCurrentSlide(next)
    }),
    []
  );

  const n = testimonials.length;

  return (
    <section className="bg-[color:var(--palette-bg)] pt-16 pb-24 md:pt-24 md:pb-36">
      <div className="luxury-page">
        <h2
          className="font-source-sans-3 mb-10 text-center text-4xl uppercase tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Отзиви
        </h2>

        <div className="relative mx-auto max-w-4xl">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name + index}>
                <TestimonialSlide testimonial={testimonial} slideIndex={index + 1} total={n} />
              </div>
            ))}
          </Slider>

          <div
            className="mt-10 flex justify-center md:mt-14"
            role="group"
            aria-label="Навигация в отзивите"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <SiteButton
                type="button"
                variant="iconOutline"
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Предишен отзив"
                className="border-[color:color-mix(in_srgb,var(--palette-p700)_22%,transparent)] text-[color:var(--palette-p700)] hover:bg-[color:color-mix(in_srgb,var(--palette-p700)_6%,transparent)]"
              >
                <ArrowLeft className="size-4 shrink-0" />
              </SiteButton>
              <span className="font-source-sans-3 min-w-[3rem] text-center text-xs tabular-nums tracking-[0.14em] text-[color:var(--palette-p700)]/55 md:text-sm">
                {currentSlide + 1} / {n}
              </span>
              <SiteButton
                type="button"
                variant="iconOutline"
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Следващ отзив"
                className="border-[color:color-mix(in_srgb,var(--palette-p700)_22%,transparent)] text-[color:var(--palette-p700)] hover:bg-[color:color-mix(in_srgb,var(--palette-p700)_6%,transparent)]"
              >
                <ArrowRight className="size-4 shrink-0" />
              </SiteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
