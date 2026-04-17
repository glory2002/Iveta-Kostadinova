import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import { SiteButton } from './site-button';

interface Testimonial {
  name: string;
  text: string;
  /** Портрет за кръглата снимка; смени с реални снимки на клиенти при нужда */
  avatar: string;
}

function testimonialInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0] ?? '';
    const b = parts[parts.length - 1][0] ?? '';
    return (a + b).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? '?').toUpperCase();
}

const testimonials: Testimonial[] = [
  {
    name: 'Цвети Петрова',
    text: 'За мен Ивета е истински професионалист. Ходила съм и при други дами, които правят микроблейдинг на вежди, нищо общо като качество и отношение. Бих се доверила само на нея занапред.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Мария И.',
    text: 'Невероятен резултат! Веждите ми изглеждат абсолютно естествено.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Ana D.',
    text: 'Много съм доволна от резултата. Иве, супер си!',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Петя Г.',
    text: 'Процедурата беше безболезнена и резултатът надмина очакванията ми.',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Силвия К.',
    text: 'Перфектни вежди без да губя време всяка сутрин!',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Десислава Т.',
    text: 'Отлична корекция. Елена работи прецизно и с голямо внимание.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const initials = testimonialInitials(testimonial.name);

  return (
    <div className="flex h-full min-h-[280px] flex-col rounded-[18px] border border-border/40 bg-[color:var(--palette-bg-white)] p-6 md:min-h-[420px] md:p-10">
      <div className="mb-4 flex select-none items-center gap-0.5 md:mb-5 md:gap-1" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className="size-[1.05rem] shrink-0 fill-[color:var(--palette-bg)] text-[color:var(--palette-bg)] md:size-5"
            strokeWidth={1.2}
            aria-hidden
          />
        ))}
      </div>
      <p className="font-source-sans-3 mb-6 flex-grow text-lg font-light leading-[1.2] text-foreground md:mb-8 md:text-xl">
        {testimonial.text}
      </p>
      <div className="mt-auto flex items-center gap-3 text-left md:gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-primary/15 ring-2 ring-primary/25 md:h-14 md:w-14">
          {!avatarFailed ? (
            <img
              src={testimonial.avatar}
              alt=""
              width={112}
              height={112}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => setAvatarFailed(true)}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm text-foreground md:text-base" style={{ fontWeight: 600 }}>
              {initials}
            </span>
          )}
        </div>
        <p className="min-w-0 text-sm tracking-wide text-muted-foreground md:text-base" style={{ fontWeight: 500 }}>
          <span className="block text-foreground" style={{ fontWeight: 600 }}>
            {testimonial.name}
          </span>
          <span className="text-[15px] text-muted-foreground/90">клиент</span>
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  const sliderRef = useRef<Slider>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const updateMobileIndex = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const slides = el.querySelectorAll<HTMLElement>('[data-testimonial-slide]');
    if (!slides.length) return;
    const gap = 12;
    const step = slides[0].offsetWidth + gap;
    if (step <= 0) return;
    const idx = Math.round(el.scrollLeft / step);
    setMobileIndex(Math.min(Math.max(0, idx), testimonials.length - 1));
  }, []);

  const scrollMobile = (dir: 'prev' | 'next') => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const slides = el.querySelectorAll<HTMLElement>('[data-testimonial-slide]');
    const slide = slides[0];
    if (!slide) return;
    const gap = 12;
    const delta = slide.offsetWidth + gap;
    el.scrollBy({ left: dir === 'next' ? delta : -delta, behavior: 'smooth' });
  };

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      beforeChange: (_current: number, next: number) => setCurrentSlide(next),
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    }),
    []
  );

  const displayIndex = isDesktop ? currentSlide : mobileIndex;
  const countLabel = `${displayIndex + 1} / ${testimonials.length}`;

  return (
    <section className="bg-[color:var(--palette-bg)] py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-source-sans-3 mb-10 text-center text-4xl tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Отзиви
        </h2>

        <div className="relative">
          <div className="-mx-4 md:-mx-6 lg:-mx-12">
            {isDesktop ? (
              <Slider {...settings} ref={sliderRef}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-2 md:px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div
                ref={mobileScrollRef}
                onScroll={updateMobileIndex}
                className="flex gap-3 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-1 [scrollbar-width:thin] touch-pan-x"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    data-testimonial-slide
                    className="snap-start shrink-0 w-[min(88vw,26rem)]"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center mt-6 md:mt-8">
            <div className="flex items-center gap-3 md:gap-4">
              <SiteButton
                type="button"
                variant="iconOutline"
                onClick={() =>
                  isDesktop ? sliderRef.current?.slickPrev() : scrollMobile('prev')
                }
                aria-label="Предишен отзив"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
              </SiteButton>
              <p
                className="min-w-[50px] text-center text-base text-muted-foreground md:min-w-[60px] md:text-lg"
                style={{ fontWeight: 500 }}
              >
                {countLabel}
              </p>
              <SiteButton
                type="button"
                variant="iconOutline"
                onClick={() =>
                  isDesktop ? sliderRef.current?.slickNext() : scrollMobile('next')
                }
                aria-label="Следващ отзив"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </SiteButton>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center md:mt-24">
          <div className="mx-auto max-w-4xl p-8 md:p-16">
            <h3
              className="font-source-sans-3 mb-4 text-4xl tracking-tight text-foreground md:mb-6 md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Готови за промяната?
            </h3>
            <p className="font-source-sans-3 mb-6 text-lg font-normal text-muted-foreground md:mb-10 md:text-xl">
              Резервирайте консултация
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:gap-6">
              <SiteButton asChild variant="fillChocolate">
                <a href="https://wa.me/359876003900" target="_blank" rel="noopener noreferrer">
                  Свържи Се С Мен
                </a>
              </SiteButton>
              <SiteButton type="button" variant="outlinePrimary">
                Instagram
              </SiteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
