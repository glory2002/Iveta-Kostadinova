import { ImageWithFallback } from './figma/ImageWithFallback';

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
    image: 'https://static.wixstatic.com/media/4de890_e4cee4f07ae54c1dafa407b1467b73ef~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/brows.jpeg',
    buttonText: 'Запиши Час'
  },
  {
    title: 'УСТНИ',
    titleEn: 'PhiLips',
    image: 'https://static.wixstatic.com/media/4de890_b5e4409b55234cb7a5936f6f57ec06f9~mv2.jpeg/v1/crop/x_237,y_0,w_847,h_843/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lips.jpeg',
    buttonText: 'Запиши Час'
  },
  {
    title: 'ХОЛИВУДСКИ ПИЛИНГ',
    titleEn: 'КАРБОН',
    image: 'https://static.wixstatic.com/media/4de890_acf04261513b468dba747015c5cb4137~mv2.jpeg/v1/fill/w_470,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1970.jpeg',
    buttonText: 'Виж Повече'
  },
  {
    title: 'ОБУЧЕНИЯ',
    titleEn: 'PhiAcademy',
    image: 'https://images.unsplash.com/photo-1559185590-765cdc663325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0cmFpbmluZyUyMGFjYWRlbXklMjBpbnN0cnVjdG9yfGVufDF8fHx8MTc3NDIwMDk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    buttonText: 'Виж Всички'
  }
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 lg:px-12 bg-[#3A2F2A]">
      <div className="w-full">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4 -mt-[170px] md:-mt-[146px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md shadow-black/10 transition-all duration-700 min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[420px]"
            >
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Мобилно: по-висок беж за четимост на заглавията; горе снимката още се вижда */}
              <div
                className="pointer-events-none absolute inset-0 z-[1] lg:hidden [background:linear-gradient(to_top,rgb(245,239,231)_0%,rgba(245,239,231,0.98)_8%,rgba(245,239,231,0.93)_18%,rgba(245,239,231,0.82)_32%,rgba(245,239,231,0.62)_46%,rgba(245,239,231,0.35)_60%,rgba(245,239,231,0.12)_72%,rgba(245,239,231,0.03)_82%,transparent_92%)]"
                aria-hidden
              />
              {/* Desktop: по-широк панел вляво за контраст на текста */}
              <div
                className="pointer-events-none absolute inset-0 z-[1] hidden lg:block [background:linear-gradient(to_right,rgb(245,239,231)_0%,rgba(245,239,231,0.97)_10%,rgba(245,239,231,0.9)_22%,rgba(245,239,231,0.75)_38%,rgba(245,239,231,0.48)_54%,rgba(245,239,231,0.22)_68%,rgba(245,239,231,0.05)_80%,transparent_88%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-[52%] [background:linear-gradient(to_top,rgb(245,239,231)_0%,rgba(245,239,231,0.92)_12%,rgba(245,239,231,0.68)_28%,rgba(245,239,231,0.38)_48%,rgba(245,239,231,0.12)_66%,transparent_82%)] lg:block"
                aria-hidden
              />
              <div className="relative z-10 flex min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[420px] w-full flex-col justify-end px-6 pb-8 pt-20 md:px-8 md:pb-10 md:pt-24 lg:w-1/2 lg:justify-center lg:pb-8 lg:pt-8 lg:pl-8 lg:pr-4 items-center text-center">
                <h3 className="text-3xl md:text-4xl text-[#3A2F2A] mb-2 md:mb-3 tracking-tight drop-shadow-sm" style={{ fontWeight: 500 }}>
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-[#3D3026] tracking-[0.15em] mb-6 md:mb-8 capitalize drop-shadow-sm" style={{ fontWeight: 500 }}>
                  {service.titleEn}
                </p>
                <button className="border max-lg:bg-[#3A2F2A] max-lg:text-[#E8D5C4] max-lg:border-[#3A2F2A] max-lg:hover:bg-[#2A1F1A] max-lg:hover:border-[#2A1F1A] max-lg:hover:text-[#FDFBF8] lg:bg-transparent lg:text-[#3A2F2A] lg:border-[#3A2F2A] lg:group-hover:bg-[#3A2F2A] lg:group-hover:text-[#E8D5C4] lg:group-hover:border-[#3A2F2A] px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg transition-all duration-300 rounded-full cursor-pointer w-full max-w-xs md:w-auto" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}