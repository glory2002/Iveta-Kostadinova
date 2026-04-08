import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface Course {
  id: number;
  image: string;
}

const COURSE_IMG =
  'https://static.wixstatic.com/media/6b9e1f_0f4ed3387bc9488285c2a082b5567fdb~mv2.png/v1/fill/w_815,h_1024,al_c,q_90,enc_avif,quality_auto/IMG_1377_PNG.png';

const courses: Course[] = [
  { id: 1, image: COURSE_IMG },
  { id: 2, image: COURSE_IMG },
  { id: 3, image: COURSE_IMG },
  { id: 4, image: COURSE_IMG },
  { id: 5, image: COURSE_IMG }
];

export function UpcomingCoursesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
    const slides = el.querySelectorAll<HTMLElement>('[data-course-slide]');
    if (!slides.length) return;
    const gap = 12;
    const step = slides[0].offsetWidth + gap;
    if (step <= 0) return;
    const idx = Math.round(el.scrollLeft / step);
    setMobileIndex(Math.min(Math.max(0, idx), courses.length - 1));
  }, []);

  const scrollMobile = (dir: 'prev' | 'next') => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const slides = el.querySelectorAll<HTMLElement>('[data-course-slide]');
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
  const countLabel = `${displayIndex + 1} / ${courses.length}`;

  return (
    <section className="py-12 md:py-24 md:px-6 lg:px-12 bg-[#DCCBBB]">
      <div className="container mx-auto px-0 md:px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-20 px-4 md:px-0">
          <div className="inline-block">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#3A2F2A] tracking-tight mb-4"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Предстоящи курсове
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="md:-mx-10 lg:-mx-16">
            {isDesktop ? (
              <Slider {...settings} ref={sliderRef}>
                {courses.map((course) => (
                  <div key={course.id} className="px-2 md:px-4">
                    <div
                      className="group transition-all duration-700 hover:-translate-y-4 cursor-pointer"
                      onClick={() => setSelectedImage(course.image)}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={course.image}
                          alt={`Курс ${course.id}`}
                          className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div
                ref={mobileScrollRef}
                onScroll={updateMobileIndex}
                className="flex gap-3 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-1 [scrollbar-width:thin] touch-pan-x"
              >
                {courses.map((course) => (
                  <div
                    key={course.id}
                    data-course-slide
                    className="snap-start shrink-0 w-[min(88vw,26rem)]"
                  >
                    <div
                      className="group transition-all duration-700 hover:-translate-y-4 cursor-pointer"
                      onClick={() => setSelectedImage(course.image)}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={course.image}
                          alt={`Курс ${course.id}`}
                          className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center mt-4 md:mt-8 px-4 md:px-0">
            <div className="flex items-center gap-3 md:gap-4">
              <button
                type="button"
                onClick={() =>
                  isDesktop ? sliderRef.current?.slickPrev() : scrollMobile('prev')
                }
                className="bg-transparent hover:bg-[#C9A882]/10 text-[#C9A882] border border-[#C9A882] p-1.5 md:p-2 transition-all duration-300 rounded-full"
                aria-label="Предишен слайд"
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
                aria-label="Следващ слайд"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-10 px-4 md:px-0">
            <button
              type="button"
              className="bg-[#3D3026] hover:bg-[#2D231C] text-[#E8D5C4] px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg transition-all duration-300 rounded-full w-full md:w-auto"
              style={{ fontWeight: 500, letterSpacing: '0.05em' }}
            >
              Заяви Интерес За Курс
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-[#C9A882] transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Затвори"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Увеличено изображение на курс"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
