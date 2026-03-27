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
              className="group relative overflow-hidden bg-white transition-all duration-700 flex flex-col-reverse lg:flex-row"
            >
              {/* Content Left Side */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center bg-[#F5EFE7]">
                <h3 className="text-3xl md:text-4xl text-[#3A2F2A] mb-2 md:mb-3 tracking-tight text-center" style={{ fontFamily: 'Cormorant, serif', fontWeight: 500 }}>
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-[#3D3026] tracking-[0.15em] mb-6 md:mb-8 text-center capitalize" style={{ fontWeight: 500 }}>
                  {service.titleEn}
                </p>
                <button className="bg-transparent group-hover:bg-[#3A2F2A] text-[#3A2F2A] group-hover:text-[#E8D5C4] border border-[#3A2F2A] group-hover:border-[#3A2F2A] px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg transition-all duration-300 rounded-full cursor-pointer w-full md:w-auto" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
                  {service.buttonText}
                </button>
              </div>
              
              {/* Image Right Side */}
              <div className="relative w-full lg:w-1/2 overflow-hidden h-64 md:h-80 lg:h-auto">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}