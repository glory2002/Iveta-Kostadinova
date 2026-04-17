import { ImageWithFallback } from './figma/ImageWithFallback';
import { SiteButton } from './site-button';

const CONSULT_URL = 'https://wa.me/359876003900';

/** Долна част на картата — off-white от DS (`--palette-bg-white` / #FAF9F7) */
const CARD_PANEL_OFF_WHITE = 'bg-[color:var(--palette-bg-white)]';

interface Course {
  title: string;
  titleLine2?: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
}

const courses: Course[] = [
  {
    title: 'PhiBrows',
    titleLine2: 'ОБУЧЕНИЕ',
    date: '23–24 Януари 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_e4cee4f07ae54c1dafa407b1467b73ef~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brows.jpeg',
    imageAlt: 'PhiBrows обучение'
  },
  {
    title: 'PhiBrows Delphi',
    titleLine2: 'ОБУЧЕНИЕ',
    date: '6–7 Февруари 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_b5e4409b55234cb7a5936f6f57ec06f9~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lips.jpeg',
    imageAlt: 'PhiBrows Delphi обучение'
  },
  {
    title: 'Холивудски пилинг',
    titleLine2: 'КАРБОН',
    date: '14–15 Март 2026',
    location: 'София',
    image:
      'https://static.wixstatic.com/media/4de890_acf04261513b468dba747015c5cb4137~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1970.jpeg',
    imageAlt: 'Обучение холивудски пилинг'
  }
];

/**
 * Предстоящи курсове — Figma Iveta-Kostadinova (напр. node 3-225 секция + 3-169 карта).
 * Веднага под секцията с услугите.
 */
export function UpcomingCoursesSection() {
  return (
    <section id="courses" className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <h2
          className="font-source-sans-3 mb-10 text-center text-4xl tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Предстоящи курсове
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article
              key={`${course.title}-${course.date}-${index}`}
              className="group flex flex-col overflow-hidden rounded-[18px] bg-white"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div
                className={`flex flex-1 flex-col items-start justify-start px-6 py-8 text-left ${CARD_PANEL_OFF_WHITE}`}
              >
                <h3 className="mb-1 text-[28px] font-medium uppercase leading-[1.1] tracking-[0.02em] text-[color:var(--palette-p700)]">
                  <span className="block">{course.title}</span>
                  {course.titleLine2 ? <span className="block">{course.titleLine2}</span> : null}
                </h3>
                <p className="mb-1 mt-3 text-sm font-normal uppercase leading-snug tracking-[0.16em] text-[color:var(--palette-p700)]/85">
                  {course.date}
                </p>
                <p className="mb-8 text-sm font-normal uppercase leading-snug tracking-[0.16em] text-[color:var(--palette-p700)]/85">
                  {course.location}
                </p>
                <SiteButton
                  asChild
                  variant="outlineChocolate"
                  className="w-full max-w-[280px] self-start !px-5 bg-[color:var(--palette-bg-white)] uppercase transition-[text-decoration] duration-200 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.22em]"
                >
                  <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer">
                    Заяви интерес
                  </a>
                </SiteButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
