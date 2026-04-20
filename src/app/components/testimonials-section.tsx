import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useState, useRef, useMemo, useEffect } from 'react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { cn } from './ui/utils';

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
    photo: 'https://randomuser.me/api/portraits/women/31.jpg',
    text: 'Нивото на прецизност е друго измерение. Посещавам студиото от седем години — всеки път е безупречно и усещам, че детайлът е на първо място.',
  },
  {
    name: 'Цвети Петрова',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'За мен Ивета е истински професионалист. Ходила съм и при други — качеството и отношението тук са на друго ниво. Доверила бих се само на нея занапред.',
  },
  {
    name: 'Мария И.',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    text: 'Невероятен резултат: веждите ми изглеждат абсолютно естествено. Процедурата мина спокойно, а грижата не спира и след това.',
  },
  {
    name: 'Ана Д.',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Много съм доволна от резултата и от атмосферата в студиото. Ивета обяснява всяка стъпка с търпение — чувствам се в сигурни ръце.',
  },
  {
    name: 'Петя Г.',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    text: 'Процедурата беше безболезнена, а финалът надмина очакванията ми. Работи се чисто, прецизно и с уважение към времето ми.',
  },
  {
    name: 'Силвия К.',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/79.jpg',
    text: 'Перфектни вежди без да губя време всяка сутрин — точно това търсех. Формата е балансирана и изглежда така, сякаш е моята форма от природата.',
  },
  {
    name: 'Десислава Т.',
    role: 'клиент',
    photo: 'https://randomuser.me/api/portraits/women/17.jpg',
    text: 'Отлична корекция и последователно внимание. Всяко посещение е спокойно — виждам резултата и го препоръчвам сърдечно.',
  },
];

function TestimonialSlide({
  testimonial,
  slideIndex,
  total,
}: {
  testimonial: Testimonial;
  slideIndex: number;
  total: number;
}) {
  return (
    <div className="testimonial-inner flex min-h-0 flex-col px-3 pb-3 pt-2 md:px-10 md:pb-5 md:pt-3">
      <div className="relative mx-auto w-full max-w-[min(44rem,94vw)]">
        {/* Декоративни кавички — фонов слой, не част от текста */}
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none overflow-visible"
          aria-hidden
        >
          <span className="absolute left-[-4%] top-[2%] font-serif text-[clamp(8.5rem,30vw,15.5rem)] font-normal leading-none text-[color:var(--palette-p700)] opacity-[0.14] md:left-0 md:top-[4%] md:text-[clamp(10rem,26vw,16rem)]">
            „
          </span>
          <span className="absolute bottom-[6%] right-[-3%] font-serif text-[clamp(6rem,22vw,12rem)] font-normal leading-none text-[color:var(--palette-p700)] opacity-[0.1] md:bottom-[10%] md:right-0">
            “
          </span>
        </div>
        <blockquote
          lang="bg"
          className="font-source-sans-3 relative z-[1] mx-auto max-w-[min(40rem,90vw)] text-center text-[clamp(1.7rem,4.5vw,2.9rem)] font-light not-italic leading-[1.5] tracking-[-0.015em] text-[color:color-mix(in_srgb,var(--palette-p900)_18%,var(--palette-p700))] md:max-w-[42rem] md:text-[clamp(1.95rem,2.8vw,2.85rem)] md:leading-[1.52]"
          style={{ fontWeight: 300 }}
        >
          {testimonial.text}
        </blockquote>
      </div>

      <footer className="mt-11 flex flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:gap-6">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[color:color-mix(in_srgb,var(--palette-p700)_14%,transparent)] bg-[color:color-mix(in_srgb,var(--palette-bg-white)_72%,var(--palette-bg))] shadow-[0_2px_14px_color-mix(in_srgb,var(--palette-p700)_8%,transparent)] md:h-[4.25rem] md:w-[4.25rem]">
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
              className="font-source-sans-3 flex h-full w-full items-center justify-center text-sm tabular-nums text-[color:var(--palette-p700)] md:text-[15px]"
              style={{ fontWeight: 500 }}
              aria-hidden
            >
              {initialsFromName(testimonial.name)}
            </span>
          )}
        </div>
        <div className="text-center md:text-left">
          <p
            className="font-source-sans-3 text-xl tracking-[0.02em] text-[color:var(--palette-p700)] md:text-2xl"
            style={{ fontWeight: 500 }}
          >
            {testimonial.name}
          </p>
          <p className="font-source-sans-3 mt-1.5 text-[10px] font-light uppercase leading-relaxed tracking-[0.26em] text-[color:var(--palette-p700)]/78 md:mt-2 md:text-[11px] md:tracking-[0.3em]">
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

const slickEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

const WHEEL_THRESHOLD = 52;

/** Slick задава `aria-hidden` на неактивните слайдове; ако фокусът остане там, Chrome логва предупреждение. `inert` + blur синхронизират фокуса с видимия слайд. */
function syncSlickSlidesInert(root: HTMLElement) {
  const ae = document.activeElement;
  if (ae instanceof HTMLElement && root.contains(ae)) {
    const host = ae.closest<HTMLElement>('.slick-slide');
    if (host?.getAttribute('aria-hidden') === 'true') {
      ae.blur();
    }
  }
  for (const slide of root.querySelectorAll<HTMLElement>('.slick-slide')) {
    slide.inert = slide.getAttribute('aria-hidden') === 'true';
  }
}

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const wheelAreaRef = useRef<HTMLDivElement>(null);
  const wheelAccumRef = useRef(0);

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      fade: false,
      speed: 620,
      cssEase: slickEase,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      touchMove: true,
      draggable: true,
      swipeToSlide: true,
      edgeFriction: 0.22,
      autoplay: true,
      autoplaySpeed: 6400,
      pauseOnHover: true,
      arrows: false,
      beforeChange: (_current: number, next: number) => setCurrentSlide(next),
      afterChange: () => {
        const root = wheelAreaRef.current;
        if (root) queueMicrotask(() => syncSlickSlidesInert(root));
      },
    }),
    [],
  );

  const n = testimonials.length;

  useEffect(() => {
    const root = wheelAreaRef.current;
    if (!root) return;
    const run = () => syncSlickSlidesInert(root);
    run();
    const raf = requestAnimationFrame(run);
    const t = window.setTimeout(run, 200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const el = wheelAreaRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Преобладава вертикално — оставяме скрола на страницата
      if (absY >= absX * 1.08) {
        wheelAccumRef.current = 0;
        return;
      }

      if (absX < 0.5) return;

      e.preventDefault();
      wheelAccumRef.current += e.deltaX;

      if (wheelAccumRef.current > WHEEL_THRESHOLD) {
        sliderRef.current?.slickNext();
        wheelAccumRef.current = 0;
      } else if (wheelAccumRef.current < -WHEEL_THRESHOLD) {
        sliderRef.current?.slickPrev();
        wheelAccumRef.current = 0;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="bg-[color:var(--palette-bg)] pt-20 pb-28 md:pt-24 md:pb-36">
      <div className="luxury-page">
        <h2
          className="font-source-sans-3 mb-10 text-center text-3xl uppercase leading-tight tracking-tight text-foreground sm:text-4xl md:mb-14 md:text-[52px]"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Отзиви
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div
            ref={wheelAreaRef}
            className="testimonials-slick"
            aria-describedby="testimonials-swipe-hint"
            aria-label="Отзиви — плъзнете хоризонтално"
          >
            <Slider {...settings} ref={sliderRef}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name + index}>
                  <TestimonialSlide testimonial={testimonial} slideIndex={index + 1} total={n} />
                </div>
              ))}
            </Slider>
          </div>

          <p className="sr-only" id="testimonials-swipe-hint">
            Плъзнете хоризонтално с пръст или мишка, или с два пръста хоризонтално на тъчпада, за да смените отзива.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center md:mt-5" role="group" aria-label="Навигация в отзивите">
            <div className="flex max-w-[min(100%,18rem)] flex-wrap items-center justify-center gap-2 md:max-w-none md:gap-2.5" role="tablist" aria-label="Избор на отзив">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === currentSlide}
                  aria-label={`Отзив ${i + 1} от ${n}`}
                  onClick={() => sliderRef.current?.slickGoTo(i)}
                  className={cn(
                    'rounded-full transition-[width,height,background-color,opacity] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--palette-p500)_40%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--palette-bg)]',
                    i === currentSlide
                      ? 'h-2 w-2 bg-[color:color-mix(in_srgb,var(--palette-p700)_52%,transparent)]'
                      : 'h-[5px] w-[5px] bg-[color:color-mix(in_srgb,var(--palette-p700)_9%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--palette-p700)_16%,transparent)]',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
