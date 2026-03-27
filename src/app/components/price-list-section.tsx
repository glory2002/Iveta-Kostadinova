interface PriceItem {
  service: string;
  price: string;
  subservice?: boolean;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    title: 'Вежди',
    items: [
      { service: 'PhiBrows', price: '€400' },
      { service: 'PowderBrows', price: '€400' },
      { service: 'Поддръжка на вежди', price: '€250' }
    ]
  },
  {
    title: 'Устни',
    items: [
      { service: 'PhiLips', price: '€400' },
      { service: 'Поддръжка на устни', price: '€250' }
    ]
  },
  {
    title: 'PhiLaser',
    items: [
      { service: 'Карбонов / Холивудски пилинг', price: '' },
      { service: 'Първа процедура', price: '€100', subservice: true },
      { service: 'всяка следваща', price: '€80', subservice: true }
    ]
  },
  {
    title: '✦ VIP PASS',
    items: [
      { service: 'Вежди / Устни извънреден час в следващите 30 дни', price: '€500' }
    ]
  }
];

export function PriceListSection() {
  return (
    <section id="prices" className="py-12 md:py-24 px-4 md:px-6 lg:px-12 bg-[#F5EFE7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3A2F2A] tracking-tight mb-4" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300, letterSpacing: '-0.02em' }}>
              Ценоразпис
            </h2>
          </div>
        </div>

        {/* Price Categories */}
        <div className="bg-[#F5EFE7] p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12">
            {priceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#3A2F2A] mb-4 md:mb-6" style={{ fontFamily: 'Cormorant, serif', fontWeight: 300, letterSpacing: '0.05em' }}>
                  {category.title}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-start justify-between py-2 md:py-3 px-3 md:px-4 border-b border-[#C9A882]/20 ${
                        item.subservice ? 'pl-6 md:pl-8 text-[#8B7355]' : 'text-[#3D3026]'
                      }`}
                    >
                      <span className={`${item.subservice ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`} style={{ fontWeight: 300 }}>
                        {item.service}
                      </span>
                      {item.price && (
                        <span className={`${item.subservice ? 'text-base md:text-lg' : 'text-lg md:text-xl'} flex-shrink-0 ml-4`} style={{ fontWeight: 300 }}>
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}