import { SiteButton } from './site-button';

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
    <section id="prices" className="bg-background py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-source-sans-3 mb-10 text-center text-4xl tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Ценоразпис
        </h2>

        <div className="rounded-[18px] bg-[color:var(--palette-bg-white)] p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            {priceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-6 flex flex-row flex-nowrap items-center justify-between gap-3 md:mb-8">
                  <h3 className="min-w-0 flex-1 text-[28px] font-medium uppercase leading-snug tracking-[0.02em] text-[color:var(--palette-p700)]">
                    {category.title}
                  </h3>
                  <SiteButton asChild variant="fillChocolateCompact">
                    <a href="https://wa.me/359876003900" target="_blank" rel="noopener noreferrer">
                      Запази час
                    </a>
                  </SiteButton>
                </div>
                <ul className="flex flex-col gap-4 md:gap-5">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`flex items-baseline justify-between gap-6 ${
                        item.subservice ? 'pl-3 text-[color:var(--palette-p700)]/65' : 'text-[color:var(--palette-p700)]'
                      } ${item.price ? 'border-b border-[color:color-mix(in_srgb,var(--palette-p700)_14%,transparent)] pb-4 md:pb-[1.125rem]' : ''}`}
                    >
                      <span
                        className={`min-w-0 flex-1 leading-relaxed ${
                          item.subservice ? 'text-[15px] font-light' : 'text-[16px] font-light tracking-[0.02em]'
                        }`}
                      >
                        {item.service}
                      </span>
                      {item.price ? (
                        <span className="shrink-0 tabular-nums text-[15px] font-normal tracking-wide text-[color:var(--palette-p700)]">
                          {item.price}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}