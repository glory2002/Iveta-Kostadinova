import { ImageWithFallback } from './figma/ImageWithFallback';
import { SiteButton } from './site-button';

interface Service {
  title: string;
  titleEn: string;
  image: string;
  buttonText: string;
}

const CONSULT_URL = 'https://wa.me/359876003900';

const services: Service[] = [
  {
    title: 'ВЕЖДИ',
    titleEn: 'PhiBrows',
    image:
      'https://static.wixstatic.com/media/4de890_e4cee4f07ae54c1dafa407b1467b73ef~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brows.jpeg',
    buttonText: 'Запиши Час'
  },
  {
    title: 'УСТНИ',
    titleEn: 'PhiLips',
    image:
      'https://static.wixstatic.com/media/4de890_b5e4409b55234cb7a5936f6f57ec06f9~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lips.jpeg',
    buttonText: 'Запиши Час'
  },
  {
    title: 'ХОЛИВУДСКИ ПИЛИНГ',
    titleEn: 'КАРБОН',
    image:
      'https://static.wixstatic.com/media/4de890_acf04261513b468dba747015c5cb4137~mv2.jpeg/v1/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1970.jpeg',
    buttonText: 'Виж Повече'
  },
  {
    title: 'ОБУЧЕНИЯ',
    titleEn: 'PhiAcademy',
    image:
      'https://static.wixstatic.com/media/4de890_f7dc057ea81a41e68683dd9e36c0ab2f~mv2.jpeg/v1/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/obuchenia-new.jpeg',
    buttonText: 'Виж Всички'
  }
];

export type ServicesVariant = 'a' | 'b';

export function ServicesSection({ variant = 'a' }: { variant?: ServicesVariant }) {
  if (variant === 'b') {
    return (
      <section
        id="services"
        className="relative z-10 bg-[#ffffff] pt-6 pb-14 md:pb-20"
      >
        <div className="luxury-page box-border w-full min-w-0">
          <div className="grid w-full grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-transparent"
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-1 pt-3 text-left sm:pb-2 sm:pt-4 md:pb-5 md:pt-5">
                  <h3 className="mb-0.5 text-[clamp(1rem,3.8vw,1.5rem)] font-medium uppercase leading-[1.15] tracking-[0.02em] text-[color:var(--palette-p700)] md:mb-1 md:text-[26px] md:leading-[1.08] lg:text-[28px] lg:leading-[1.1]">
                    <span className="block">{service.title}</span>
                  </h3>
                  <p className="mb-0 mt-0.5 text-[12px] font-normal uppercase leading-snug tracking-[0.12em] text-[color:var(--palette-p700)]/80 sm:text-[14px]">
                    {service.titleEn}
                  </p>
                  <div className="mt-auto w-full pt-3 sm:pt-[18px] md:pt-5">
                    <SiteButton asChild variant="fillChocolate" className="w-full min-w-0 sm:w-fit">
                      <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer">
                        {service.buttonText}
                      </a>
                    </SiteButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      className="relative z-10 -mt-px bg-[color:var(--palette-p700)] py-4 md:py-6 lg:py-8"
    >
      <div className="relative z-10 luxury-page -mt-10 grid grid-cols-12 gap-x-4 gap-y-5 sm:gap-x-5 sm:gap-y-6 md:gap-6 md:-mt-14 lg:-mt-[4.5rem] lg:gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="group col-span-6 flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl bg-[color:var(--palette-bg-white)] shadow-[0_8px_28px_-14px_rgba(43,32,24,0.2)] md:col-span-12 md:min-h-[300px] md:flex-row md:rounded-[18px] md:shadow-none lg:col-span-6 lg:min-h-[320px]"
          >
            <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden rounded-l-[18px] rounded-r-2xl md:aspect-auto md:h-full md:min-h-full md:w-1/2 md:self-stretch">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full rounded-l-[18px] rounded-r-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex w-full min-w-0 flex-1 flex-col items-start justify-start px-3 pb-5 pt-4 text-left sm:px-4 sm:pb-5 sm:pt-4 md:w-1/2 md:px-8 md:pb-10 md:pt-10 lg:px-10 lg:py-12">
              <h3 className="mb-1 text-[18px] font-semibold uppercase leading-[1.12] tracking-[0.02em] text-[color:var(--palette-p700)] sm:mb-1.5 sm:leading-[1.1] md:mb-1.5 md:text-2xl md:font-medium md:leading-[1.08] md:tracking-[0.04em] lg:text-[28px] lg:leading-[1.1]">
                {service.title}
              </h3>
              <p className="mb-3 max-w-[20rem] text-xs font-normal uppercase leading-snug tracking-[0.14em] text-[color:var(--palette-p700)]/90 sm:mb-4 sm:text-sm sm:tracking-[0.18em] md:mb-4 md:max-w-none md:text-xs md:tracking-[0.14em] lg:text-sm lg:tracking-[0.16em]">
                {service.titleEn}
              </p>
              <div className="mt-auto w-full pt-3 md:pt-6">
                <SiteButton
                  type="button"
                  variant="fillChocolate"
                  className="w-full whitespace-nowrap max-md:text-[10px] max-md:leading-none max-md:tracking-[0.06em] transition-[text-decoration] duration-200 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.22em] md:w-fit md:max-w-[min(100%,280px)] md:self-start"
                >
                  {service.buttonText}
                </SiteButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
