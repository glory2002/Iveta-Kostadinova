import { ImageWithFallback } from './figma/ImageWithFallback';
import { SiteButton } from './site-button';

interface Service {
  title: string;
  titleEn: string;
  image: string;
  buttonText: string;
}

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

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 -mt-px bg-[color:var(--palette-p700)] px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-20 lg:px-12"
    >
      <div className="relative z-10 mx-auto -mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 md:-mt-14 md:gap-6 lg:-mt-[4.5rem] lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={index}
            className="group flex min-h-[280px] flex-col overflow-hidden rounded-[18px] bg-[color:var(--palette-bg-white)] sm:min-h-[300px] sm:flex-row lg:min-h-[320px]"
          >
            <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-[280px] sm:w-1/2 md:min-h-[300px]">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex w-full flex-1 flex-col items-center justify-center px-6 py-8 text-center sm:w-1/2 sm:px-8 sm:py-10">
              <h3 className="mb-2 text-[28px] font-medium uppercase leading-[1.1] tracking-[0.04em] text-[color:var(--palette-p700)]">
                {service.title}
              </h3>
              <p className="mb-6 text-sm font-normal uppercase leading-snug tracking-[0.16em] text-[color:var(--palette-p700)]/85 sm:mb-8">
                {service.titleEn}
              </p>
              <SiteButton
                type="button"
                variant="fillChocolate"
                className="w-full max-w-[280px] transition-[text-decoration] duration-200 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.22em]"
              >
                {service.buttonText}
              </SiteButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
