import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { liftHoverY, liftSpring } from './motion-primitives';
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

/** Цялата карта + долен панел — един и същ off-white (#FAF9F7), за да няма „рез“ срещу `bg-white`. */
const CARD_BG_OFF_WHITE = 'bg-[color:var(--palette-bg-white)]';

/** Много лек контур — едва по-тъмен от off-white картата, за разграничаване от чисто бял фон на секцията. */
const CARD_BORDER =
  'border border-solid border-[color:color-mix(in_srgb,var(--palette-p700)_7%,var(--palette-bg-white))]';

/** Хоризонтален inset в картата (панел + overlay заглавие): 32px → 40px; по-тесно на малки ширини. */
const CARD_INNER_X = 'px-6 sm:px-8 xl:px-10';

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

/** Снимки: Unsplash (лиценз за ползване според Unsplash). Квадрат 600×600 за карти. */
const courses: Course[] = [
  {
    title: 'PhiBrows',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '23–24 Януари 2026',
    location: 'София',
    /** Същата визуална като картата „ОБУЧЕНИЯ“ в `services-section.tsx` */
    image:
      'https://static.wixstatic.com/media/4de890_f7dc057ea81a41e68683dd9e36c0ab2f~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/obuchenia-new.jpeg',
    imageAlt: 'PhiBrows обучение',
  },
  {
    title: 'PhiBrows Delphi',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '6–7 Февруари 2026',
    location: 'София',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&h=600&q=80',
    imageAlt: 'Козметична процедура в студио',
  },
  {
    title: 'Холивудски пилинг',
    titleLine2: 'КАРБОН',
    date: '14–15 Март 2026',
    location: 'София',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&h=600&q=80',
    imageAlt: 'Почистване и грижа за кожата в козметично студио',
  },
  {
    title: 'PhiLips',
    titleLine2: 'ОБУЧЕНИЕ',
    meta: { level: 'НАЧИНАЕЩИ', spots: '4 МЕСТА' },
    date: '2–3 Април 2026',
    location: 'София',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=600&q=80',
    imageAlt: 'Грим и акцент върху устни',
  },
  {
    title: 'PhiAcademy',
    titleLine2: 'УСЪВЪРШЕНСТВАНЕ',
    meta: { level: 'НАПРЕДНАЛИ', spots: '6 МЕСТА' },
    date: '20–21 Юни 2026',
    location: 'София',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&h=600&q=80',
    imageAlt: 'Обучение и работа в екип',
  },
];

const courseTitleClass =
  'font-manrope-web mb-0.5 text-2xl font-medium uppercase leading-[1.12] tracking-[0.02em] md:mb-1 md:text-[26px] md:leading-[1.08] lg:text-[28px] lg:leading-[1.1]';

const courseCardMetaLineClass =
  'min-w-0 text-sm font-normal leading-snug tracking-[0.02em] text-[color:var(--palette-p700)] md:text-[15px]';

function CourseCard({ course, variant = 'a' }: { course: Course; variant?: 'a' | 'b' }) {
  const isOverlayTitle = variant === 'b';
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: liftHoverY }}
      transition={liftSpring}
      className={`group box-border flex min-h-0 flex-col overflow-hidden rounded-[18px] ${CARD_BORDER} ${CARD_BG_OFF_WHITE}`}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-t-[18px] rounded-b-2xl">
        <ImageWithFallback
          src={course.image}
          alt={course.imageAlt}
          className="absolute inset-0 h-full w-full rounded-t-[18px] rounded-b-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {course.meta ? (
          <div className="pointer-events-none absolute left-2.5 top-2.5 z-[2] md:left-3 md:top-3">
            <p className="max-w-[min(100%,13rem)] rounded-sm border border-[color:color-mix(in_srgb,var(--palette-p700)_12%,transparent)] bg-[color:var(--palette-bg-white)] px-2 py-1 text-left text-[9px] font-normal uppercase leading-tight tracking-[0.16em] text-[color:var(--palette-p700)] shadow-sm sm:text-[10px] sm:tracking-[0.17em] md:px-2 md:py-1.5 md:text-[11px] md:tracking-[0.19em]">
              {course.meta.level}
            </p>
          </div>
        ) : null}
        {isOverlayTitle ? (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[62%] bg-gradient-to-t from-black/[0.82] via-black/38 via-[44%] to-transparent"
              aria-hidden
            />
            <h3
              className={`absolute inset-x-0 bottom-0 z-[3] ${CARD_INNER_X} pb-4 pt-12 text-left md:pb-6 md:pt-14 ${courseTitleClass} text-[color:var(--palette-bg-white)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]`}
            >
              <span className="block">{course.title}</span>
              {course.titleLine2 ? (
                <span className="mt-0.5 block not-italic md:mt-0.5">{course.titleLine2}</span>
              ) : null}
            </h3>
          </>
        ) : null}
      </div>

      <div
        className={`flex w-full flex-col items-stretch justify-start ${CARD_INNER_X} pb-5 pt-5 text-left md:pb-6 md:pt-4 ${CARD_BG_OFF_WHITE}`}
      >
        {/* 1. Заглавна група (при вариант B заглавието е върху снимката — тук няма дубликат) */}
        {!isOverlayTitle ? (
          <div className="flex w-full flex-col items-start text-left">
            <h3 className={`${courseTitleClass} text-[color:var(--palette-p700)]`}>
              <span className="block">{course.title}</span>
              {course.titleLine2 ? (
                <span className="mt-0.5 block not-italic md:mt-0.5">{course.titleLine2}</span>
              ) : null}
            </h3>
          </div>
        ) : null}

        {/* 3. Детайли: на един ред — дата · локация */}
        <div
          className={`flex w-full flex-col items-start ${!isOverlayTitle ? 'mt-4 md:mt-5' : ''}`}
        >
          <div className="flex w-full min-w-0 flex-wrap items-baseline gap-x-2 md:gap-x-2.5">
            <p className={courseCardMetaLineClass}>{course.date}</p>
            <span
              className="inline-block shrink-0 translate-y-[-0.06em] text-[1.15em] font-semibold leading-none text-[color:var(--palette-p700)]/45 md:text-[1.1em]"
              aria-hidden
            >
              ·
            </span>
            <p className={courseCardMetaLineClass}>{course.location}</p>
          </div>
        </div>

        <hr
          className="mt-6 mb-5 w-full border-0 border-t border-solid border-[color:color-mix(in_srgb,var(--palette-p700)_10%,transparent)] md:mt-7 md:mb-6"
          aria-hidden
        />

        {/* 4. CTA */}
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
    </motion.article>
  );
}

/**
 * Предстоящи курсове — Figma Iveta-Kostadinova (напр. node 3-225 секция + 3-169 карта).
 * Веднага под секцията с услугите.
 * Под md: хоризонтална карусел с „peek“ на следващата карта + индикатор.
 */
export function UpcomingCoursesSection({ variant = 'a' }: { variant?: 'a' | 'b' }) {
  const [api, setApi] = useState<CarouselApi>();
  const [desktopApi, setDesktopApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);
  const hideBarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showProgressBar = useCallback(() => {
    if (hideBarTimerRef.current) {
      clearTimeout(hideBarTimerRef.current);
      hideBarTimerRef.current = null;
    }
    setProgressVisible((was) => (was ? was : true));
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
          className="font-manrope-web mb-10 text-left text-3xl uppercase leading-tight tracking-tight text-foreground sm:text-4xl md:mb-14 md:text-[52px]"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Предстоящи курсове
        </h2>

        {/* Мобилно: левият inset е на wrapper извън Embla трека — иначе transform на трека „залепва“ първата карта */}
        <div className="md:hidden">
          <div className="luxury-bleed-x">
            <div className="box-border min-w-0 w-full pl-[max(var(--luxury-gutter),env(safe-area-inset-left,0px))] pr-0">
              <Carousel
                setApi={setApi}
                opts={{
                  align: 'start',
                  loop: false,
                  containScroll: 'trimSnaps',
                }}
                className="w-full"
                aria-label="Предстоящи курсове — карусел"
              >
                <CarouselContent className="ml-0 gap-3 pl-0">
                  {courses.map((course, index) => (
                    <CarouselItem
                      key={`${course.title}-${course.date}-${index}`}
                      className="min-w-0 shrink-0 grow-0 basis-[88%] pl-0"
                    >
                      <CourseCard course={course} variant={variant} />
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
        </div>

        {/* Таблет и нагоре: Embla карусел — плъзгане, стрелки */}
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
                  <CourseCard course={course} variant={variant} />
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
