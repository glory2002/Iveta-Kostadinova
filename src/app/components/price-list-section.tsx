import { SiteButton } from './site-button';

const VIP_WA_URL = 'https://wa.me/359876003900';

interface PriceItem {
  service: string;
  /** Втори ред под заглавието на услугата (по-малък текст). */
  serviceDetail?: string;
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
      {
        service: 'Вежди / Устни',
        serviceDetail: 'извънреден час в следващите 30 дни',
        price: '€500'
      }
    ]
  }
];

function CategoryColumn({ category }: { category: PriceCategory }) {
  return (
    <div>
      <div className="mb-6 flex flex-row flex-nowrap items-center justify-between gap-3 md:mb-8">
        <h3 className="min-w-0 flex-1 text-[28px] font-medium uppercase leading-snug tracking-[0.02em] text-[color:var(--palette-p700)]">
          {category.title}
        </h3>
      </div>
      <ul className="flex flex-col gap-4 md:gap-5">
        {category.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`flex justify-between gap-6 ${
              item.serviceDetail ? 'items-start' : 'items-baseline'
            } ${
              item.subservice ? 'pl-3 text-[color:var(--palette-p700)]/65' : 'text-[color:var(--palette-p700)]'
            } ${item.price ? 'border-b border-[color:color-mix(in_srgb,var(--palette-p700)_7%,transparent)] pb-4 md:pb-[1.125rem]' : ''}`}
          >
            <span
              className={`min-w-0 flex-1 leading-relaxed ${
                item.subservice ? 'text-[15px] font-light' : 'text-[16px] font-light tracking-[0.02em]'
              }`}
            >
              <span className="block">{item.service}</span>
              {item.serviceDetail ? (
                <span className="mt-1.5 block text-[15px] font-light leading-snug tracking-[0.02em] text-[color:var(--palette-p700)]/85">
                  {item.serviceDetail}
                </span>
              ) : null}
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
  );
}

const mainCategories = priceCategories.slice(0, 3);
const vipCategory = priceCategories[3];

function VipPassBanner() {
  const price = vipCategory?.items[0]?.price ?? '€500';

  return (
    <div className="rounded-[14px] border border-[color:color-mix(in_srgb,var(--palette-p700)_20%,transparent)] bg-[color:var(--palette-bg-white)] px-5 py-7 shadow-[0_1px_0_color-mix(in_srgb,var(--palette-p700)_6%,transparent)] md:px-9 md:py-9 lg:px-11 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0 flex-1">
          <p className="font-source-sans-3 mb-3 max-w-[20rem] text-xs font-normal uppercase leading-snug tracking-[0.14em] text-[color:var(--palette-p700)]/90 sm:mb-4 sm:text-sm sm:tracking-[0.18em] md:mb-4 md:max-w-none md:text-xs md:tracking-[0.14em] lg:text-sm lg:tracking-[0.16em]">
            Ексклузивно · приоритетен достъп
          </p>
          <h3 className="min-w-0 text-[28px] font-medium uppercase leading-snug tracking-[0.02em] text-[color:var(--palette-p700)]">
            ✦ VIP PASS
          </h3>
          <p
            className="font-source-sans-3 mt-3 max-w-xl text-[15px] font-light leading-relaxed text-[color:var(--palette-p700)]/88 md:text-base"
            style={{ fontWeight: 300 }}
          >
            Вежди или устни — извънреден час в следващите 30 дни, винаги когато ви е нужно.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end">
          <p
            className="font-source-sans-3 text-center text-2xl tabular-nums tracking-wide text-[color:var(--palette-p700)] sm:text-left lg:text-right"
            style={{ fontWeight: 500 }}
          >
            {price}
          </p>
          <SiteButton asChild variant="outlineChocolate" className="w-full shrink-0 justify-center uppercase sm:w-auto">
            <a href={VIP_WA_URL} target="_blank" rel="noopener noreferrer">
              Запиши час
            </a>
          </SiteButton>
        </div>
      </div>
    </div>
  );
}

export function PriceListSection() {
  return (
    <section id="prices" className="bg-background pt-16 pb-24 md:pt-24 md:pb-36">
      <div className="luxury-page">
        <h2
          className="font-source-sans-3 mb-10 text-center text-4xl uppercase tracking-tight text-foreground md:mb-14 md:text-5xl lg:text-6xl"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Ценоразпис
        </h2>

        <div className="rounded-[18px] bg-[color:var(--palette-bg-white)] py-6 px-0 md:p-10 lg:p-14">
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:gap-x-10 xl:gap-x-12">
              {mainCategories.map((category, categoryIndex) => (
                <CategoryColumn key={category.title + categoryIndex} category={category} />
              ))}
            </div>

            {vipCategory ? <VipPassBanner /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
