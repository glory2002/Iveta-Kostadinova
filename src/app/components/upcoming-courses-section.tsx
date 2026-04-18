import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { SiteButton } from './site-button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';

const CONSULT_URL = 'https://wa.me/359876003900';

/** Долна част на картата — off-white от DS (`--palette-bg-white` / #FAF9F7) */
const CARD_PANEL_OFF_WHITE = 'bg-[color:var(--palette-bg-white)]';

interface Course {
  title: string;
  titleLine2?: string;
  /** Кратък ред под датата: ниво · места. */
  meta?: { level: string; spots: string };
  date: string;
  location: string;
  image: string;
  imageAlt: string;
}

const courses: Course[] = [
  {
    title: 'PhiBrows',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '23–24 Януари 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_e4cee4f07ae54c1dafa407b1467b73ef~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brows.jpeg',
    imageAlt: 'PhiBrows обучение',
  },
  {
    title: 'PhiBrows Delphi',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '6–7 Февруари 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_b5e4409b55234cb7a5936f6f57ec06f9~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lips.jpeg',
    imageAlt: 'PhiBrows Delphi обучение',
  },
  {
    title: 'Холивудски пилинг',
    titleLine2: 'КАРБОН',
    date: '14–15 Март 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_acf04261513b468dba747015c5cb4137~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1970.jpeg',
    imageAlt: 'Обучение холивудски пилинг',
  },
  {
    title: 'PhiLips',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '2–3 Април 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_b5e4409b55234cb7a5936f6f57ec06f9~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lips.jpeg',
    imageAlt: 'PhiLips обучение',
  },
  {
    title: 'PhiAcademy',
    titleLine2: 'УСЪВЪРШЕНСТВАНЕ',
    meta: { level: 'НАПРЕДНАЛИ', spots: '6 МЕСТА' },
    date: '20–21 Юни 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_f7dc057ea81a41e68683dd9e36c0ab2f~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/obuchenia-new.jpeg',
    imageAlt: 'PhiAcademy обучение',
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex min-h-0 flex-col overflow-hidden rounded-[18px] bg-white">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-t-[18px] rounded-b-2xl">
        <ImageWithFallback
          src={course.image}
          alt={course.imageAlt}
          className="absolute inset-0 h-full w-full rounded-t-[18px] rounded-b-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {course.meta ? (
          <div className="pointer-events-none absolute left-2.5 top-2.5 z-[1] md:left-3 md:top-3">
            <p className="max-w-[min(100%,13rem)] rounded-sm bg-[color:color-mix(in_srgb,var(--palette-p900)_78%,transparent)] px-2 py-1 text-left text-[9px] font-normal uppercase leading-tight tracking-[0.16em] text-[color:var(--palette-bg-white)] shadow-sm backdrop-blur-[2px] sm:text-[10px] sm:tracking-[0.17em] md:px-2 md:py-1.5 md:text-[11px] md:tracking-[0.19em]">
              {course.meta.level}
            </p>
          </div>
        ) : null}
      </div>

      <div
        className={`flex w-full flex-col items-start justify-start px-4 pb-5 pt-5 text-left sm:px-6 md:px-7 md:pb-6 md:pt-4 lg:px-8 ${CARD_PANEL_OFF_WHITE}`}
      >
        <h3 className="mb-0.5 text-2xl font-medium uppercase leading-[1.12] tracking-[0.02em] text-[color:var(--palette-p700)] md:mb-1 md:text-[26px] md:leading-[1.08] lg:text-[28px] lg:leading-[1.1]">
          <span className="block">{course.title}</span>
          {course.titleLine2 ? (
            <span className="mt-0.5 block md:mt-0.5">{course.titleLine2}</span>
          ) : null}
        </h3>
        <p className="mt-2 mb-4 text-xs font-normal uppercase leading-snug tracking-[0.14em] text-[color:var(--palette-p700)]/85 md:mt-2.5 md:mb-5 md:text-sm md:tracking-[0.15em] lg:mt-3 lg:mb-6 lg:tracking-[0.16em]">
          {course.date}
          <span className="mx-2 inline-block translate-y-[-0.06em] text-[1.35em] font-semibold leading-none text-[color:var(--palette-p700)] md:mx-2.5 md:text-[1.25em]">
            ·
          </span>
          {course.location}
        </p>
        <div className="flex w-full justify-start">
          <SiteButton
            asChild
            variant="outlineChocolate"
            className="group/btn inline-flex items-center gap-2 bg-[color:var(--palette-bg-white)] px-0 uppercase ring-0 ring-offset-0 transition-[text-decoration,transform] duration-200 hover:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.22em]"
          >
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Запази място
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                aria-hidden
              />
            </a>
          </SiteButton>
        </div>
      </div>
    </article>
  );
}

/**
 * Предстоящи курсове — Figma Iveta-Kostadinova (напр. node 3-225 секция + 3-169 карта).
 * Веднага под секцията с услугите.
 * Под md: хоризонтална карусел с „peek“ на следващата карта + индикатор.
 */
export function UpcomingCoursesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [desktopApi, setDesktopApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);
  const hideBarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showProgressBar = useCallback(() => {
    setProgressVisible(true);
    if (hideBarTimerRef.current) {
      clearTimeout(hideBarTimerRef.current);
      hideBarTimerRef.current = null;
    }
  }, []);

  const scheduleHideProgressBar = useCallback(() => {
    if (hideBarTimerRef.current) clearTimeout(hideBarTimerRef.current);
    hideBarTimerRef.current = setTimeout(() => {
      setProgressVisible(false);
      hideBarTimerRef.current = null;
    }, 400);
  }, []);

  useEffect(() => {
    if (!api) return;
    const sync = () => setCurrent(api.selectedScrollSnap());
    sync();
    api.on('select', sync);
    api.on('reInit', sync);
    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api]);

  useEffect(() => {
    if (!desktopApi) return;
    const sync = () => setDesktopSlide(desktopApi.selectedScrollSnap());
    sync();
    desktopApi.on('select', sync);
    desktopApi.on('reInit', sync);
    return () => {
      desktopApi.off('select', sync);
      desktopApi.off('reInit', sync);
    };
  }, [desktopApi]);

  useEffect(() => {
    if (!api) return;
    const onScroll = () => showProgressBar();
    const onPointerDown = () => showProgressBar();
    const onSettle = () => scheduleHideProgressBar();
    api.on('scroll', onScroll);
    api.on('pointerDown', onPointerDown);
    api.on('settle', onSettle);
    return () => {
      api.off('scroll', onScroll);
      api.off('pointerDown', onPointerDown);
      api.off('settle', onSettle);
      if (hideBarTimerRef.current) {
        clearTimeout(hideBarTimerRef.current);
        hideBarTimerRef.current = null;
      }
    };
  }, [api, showProgressBar, scheduleHideProgressBar]);

  const count = courses.length;

  return (
    <section id="courses" className="bg-white pt-16 pb-24 md:pt-24 md:pb-36">
      <div className="luxury-page">
        <h2
          className="font-source-sans-3 mb-10 text-left text-4xl uppercase tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Предстоящи курсове
        </h2>

        {/* Мобилно: отстъп отляво = luxury gutter; каруселът е luxury-bleed за пълна ширина */}
        <div className="md:hidden">
          <div className="luxury-bleed-x">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: false,
                containScroll: false,
              }}
              className="w-full"
              aria-label="Предстоящи курсове — карусел"
            >
              <CarouselContent className="ml-0 gap-3 pl-[var(--luxury-gutter)]">
                {courses.map((course, index) => (
                  <CarouselItem
                    key={`${course.title}-${course.date}-${index}`}
                    className="min-w-0 shrink-0 grow-0 basis-[88%] pl-0"
                  >
                    <CourseCard course={course} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div
              className={`w-full overflow-hidden rounded-full bg-primary/15 transition-[opacity,margin-block-start,height] duration-300 ease-out ${
                progressVisible
                  ? 'mt-4 h-1 opacity-100'
                  : 'mt-0 h-0 opacity-0'
              }`}
              role="presentation"
              aria-hidden={!progressVisible}
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                style={{ width: `${((current + 1) / count) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Таблет и нагоре: Embla карусел — плъзгане, стрелки, точки */}
        <div className="hidden min-w-0 md:block">
          <Carousel
            setApi={setDesktopApi}
            opts={{
              align: 'start',
              loop: false,
              dragFree: false,
            }}
            className="w-full"
            aria-label="Предстоящи курсове — карусел"
          >
            <CarouselContent className="-ml-0 ml-0 gap-6">
              {courses.map((course, index) => (
                <CarouselItem
                  key={`desktop-${course.title}-${course.date}-${index}`}
                  className="min-w-0 shrink-0 grow-0 basis-[calc((100%-3rem)/3)] pl-0"
                >
                  <CourseCard course={course} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex justify-center">
              <div
                className="flex items-center gap-4 md:gap-5"
                role="group"
                aria-label="Навигация в курсовете"
              >
                <CarouselPrevious
                  variant="outline"
                  className="static top-auto left-auto size-10 translate-x-0 translate-y-0 rounded-full border-[color:color-mix(in_srgb,var(--palette-p700)_22%,transparent)] bg-[color:var(--palette-bg-white)] text-[color:var(--palette-p700)] shadow-none hover:bg-[color:color-mix(in_srgb,var(--palette-p700)_6%,transparent)] disabled:opacity-40"
                />
                <span className="font-source-sans-3 min-w-[3rem] text-center text-xs tabular-nums tracking-[0.14em] text-[color:var(--palette-p700)]/55 md:text-sm">
                  {desktopSlide + 1} / {count}
                </span>
                <CarouselNext
                  variant="outline"
                  className="static top-auto right-auto size-10 translate-x-0 translate-y-0 rounded-full border-[color:color-mix(in_srgb,var(--palette-p700)_22%,transparent)] bg-[color:var(--palette-bg-white)] text-[color:var(--palette-p700)] shadow-none hover:bg-[color:color-mix(in_srgb,var(--palette-p700)_6%,transparent)] disabled:opacity-40"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
