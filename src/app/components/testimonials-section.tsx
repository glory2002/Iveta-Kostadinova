import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

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
    <div className="rounded-2xl md:rounded-3xl bg-[#F5EFE7]/30 p-6 md:p-10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col min-h-[280px] md:min-h-[420px]">
      <div
        className="text-5xl md:text-7xl text-[#C9A882]/30 mb-2 leading-none -mt-2"
        style={{ fontWeight: 300 }}
      >
        {'\u201C'}
      </div>
      <p
        className="text-[#3D3026] mb-6 md:mb-8 leading-relaxed text-lg md:text-xl flex-grow"
        style={{ fontWeight: 300 }}
      >
        {testimonial.text}
      </p>
      <div className="mt-auto flex items-center gap-3 md:gap-4 text-left">
        <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-full bg-[#C9A882]/25 ring-2 ring-[#C9A882]/30">
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
            <span className="flex h-full w-full items-center justify-center text-sm md:text-base text-[#3A2F2A]" style={{ fontWeight: 600 }}>
              {initials}
            </span>
          )}
        </div>
        <p className="min-w-0 text-[#8B7355] text-sm md:text-base tracking-wide" style={{ fontWeight: 500 }}>
          <span className="block" style={{ fontWeight: 600 }}>
            {testimonial.name}
          </span>
          <span className="text-[15px] text-[#8B7355]/90">клиент</span>
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
    <section className="py-12 md:py-24 px-4 md:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#3A2F2A] tracking-tight mb-4"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Отзиви
            </h2>
          </div>
        </div>

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
              <button
                type="button"
                onClick={() =>
                  isDesktop ? sliderRef.current?.slickPrev() : scrollMobile('prev')
                }
                className="bg-transparent hover:bg-[#C9A882]/10 text-[#C9A882] border border-[#C9A882] p-1.5 md:p-2 transition-all duration-300 rounded-full"
                aria-label="Предишен отзив"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
              </button>
              <p
                className="text-[#8B7355] min-w-[50px] md:min-w-[60px] text-center text-base md:text-lg"
                style={{ fontWeight: 500 }}
              >
                {countLabel}
              </p>
              <button
                type="button"
                onClick={() =>
                  isDesktop ? sliderRef.current?.slickNext() : scrollMobile('next')
                }
                className="bg-transparent hover:bg-[#C9A882]/10 text-[#C9A882] border border-[#C9A882] p-1.5 md:p-2 transition-all duration-300 rounded-full"
                aria-label="Следващ отзив"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <div className="backdrop-blur-2xl bg-white/70 border border-white/60 p-8 md:p-16 max-w-4xl mx-auto">
            <h3
              className="text-4xl md:text-5xl lg:text-6xl text-[#3D3026] mb-4 md:mb-6 tracking-tight"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Готови за промяната?
            </h3>
            <p className="text-[#6B5D52] mb-6 md:mb-10 text-lg md:text-xl" style={{ fontWeight: 500 }}>
              Резервирайте консултация
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button
                className="bg-[#E8D5C4] hover:bg-[#D4C2B1] text-[#3D3026] px-8 py-3.5 md:px-10 md:py-4 transition-all duration-300 rounded-full text-base md:text-lg"
                style={{ fontWeight: 500, letterSpacing: '0.05em' }}
              >
                Свържи Се С Мен
              </button>
              <button
                className="bg-transparent hover:bg-[#C9A882]/10 text-[#C9A882] border border-[#C9A882] px-8 py-3.5 md:px-10 md:py-4 transition-all duration-300 rounded-full text-base md:text-lg"
                style={{ fontWeight: 500, letterSpacing: '0.05em' }}
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
