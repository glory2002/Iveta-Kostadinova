import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { liftSpring } from './motion-primitives';
import { SiteButton } from './site-button';

const WA_PHONE = '359876003900';

function whatsappInquiryUrl(body: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(body)}`;
}

function buildPriceInquiryMessage(categoryTitle: string, item: PriceItem): string {
  if (item.serviceDetail) {
    return `Здравейте! Интересувам се от ${item.service} (${item.serviceDetail}) — ${item.price}. Пиша от ценоразписа на сайта.`;
  }
  if (!item.price) {
    return `Здравейте! Интересувам се от ${item.service} (${categoryTitle}). Пиша от ценоразписа на сайта.`;
  }
  return `Здравейте! Интересувам се от ${item.service} — ${item.price} (${categoryTitle}). Пиша от ценоразписа на сайта.`;
}

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
    <div className="w-full min-w-0">
      <div className="mb-6 w-full border-b border-solid border-[color:color-mix(in_srgb,var(--palette-p700)_11%,var(--palette-bg-white))] pb-3 md:mb-8 md:pb-4">
        <div className="flex justify-center md:justify-between">
          <h3 className="min-w-0 w-full text-center text-[1.25rem] font-semibold uppercase leading-snug tracking-[0.02em] text-[color:var(--palette-p700)] md:w-auto md:flex-1 md:text-left md:text-[28px] md:font-medium">
            {category.title}
          </h3>
        </div>
      </div>
      <ul className="flex flex-col gap-4 md:gap-3">
        {category.items.map((item, itemIndex) => {
          const href = whatsappInquiryUrl(buildPriceInquiryMessage(category.title, item));
          const label = `Запитване в WhatsApp за ${item.service}${item.price ? ` — ${item.price}` : ''}`;

          return (
            <li
              key={itemIndex}
              className={
                item.subservice ? 'pl-3 text-[color:var(--palette-p700)]/65' : 'text-[color:var(--palette-p700)]'
              }
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group flex w-full min-h-[56px] cursor-pointer touch-manipulation justify-between gap-4 rounded-xl px-3 py-3 text-left transition-[background-color,transform,box-shadow] duration-150 ease-out [-webkit-tap-highlight-color:transparent] md:min-h-[50px] md:gap-4 md:px-3 md:py-2.5 ${
                  item.serviceDetail ? 'items-start' : 'items-center'
                } -mx-1 active:bg-[color:color-mix(in_srgb,var(--palette-p700)_11%,transparent)] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--palette-p500)_45%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--palette-bg-white)]`}
              >
                <span
                  className={`min-w-0 flex-1 leading-relaxed ${
                    item.subservice ? 'text-[15px] font-light' : 'text-[16px] font-normal tracking-[0.02em]'
                  }`}
                >
                  <span className="block underline-offset-2 transition-[text-decoration-color] group-hover:underline group-hover:decoration-[color:color-mix(in_srgb,var(--palette-p700)_35%,transparent)]">
                    {item.service}
                  </span>
                  {item.serviceDetail ? (
                    <span className="mt-1.5 block text-[15px] font-light leading-snug tracking-[0.02em] text-[color:var(--palette-p700)]/85">
                      {item.serviceDetail}
                    </span>
                  ) : null}
                </span>
                <span className="flex shrink-0 items-center gap-3 tabular-nums text-[15px] font-normal tracking-wide text-[color:var(--palette-p700)] md:gap-2.5">
                  {item.price ? <span className="shrink-0">{item.price}</span> : null}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-[color:var(--palette-p700)]/35 transition-[color,transform] group-hover:text-[color:var(--palette-p700)]/70 group-hover:translate-x-0.5 group-active:translate-x-1"
                    aria-hidden
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mainCategories = priceCategories.slice(0, 3);
const vipCategory = priceCategories[3];

function VipPassBanner() {
  const reducedMotion = useReducedMotion();
  const price = vipCategory?.items[0]?.price ?? '€500';
  const vipHref = whatsappInquiryUrl(
    `Здравейте! Интересувам се от VIP PASS — ${price}. Пиша от ценоразписа на сайта.`,
  );

  return (
    <motion.a
      href={vipHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Запитване в WhatsApp за VIP PASS"
      whileHover={reducedMotion ? undefined : { y: -3 }}
      transition={liftSpring}
      className="group block cursor-pointer touch-manipulation rounded-[14px] border border-solid border-[color:color-mix(in_srgb,var(--palette-p700)_11%,var(--palette-bg-white))] bg-[color:var(--palette-bg-white)] px-5 py-7 text-inherit no-underline transition-[background-color,transform,box-shadow] duration-150 ease-out [-webkit-tap-highlight-color:transparent] active:scale-[0.995] active:bg-[color:color-mix(in_srgb,var(--palette-p700)_4%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--palette-p500)_45%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--palette-bg-white)] md:px-9 md:py-9 lg:px-11 lg:py-10"
    >
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
            <span>Запиши час</span>
          </SiteButton>
        </div>
      </div>
    </motion.a>
  );
}

export function PriceListSection() {
  return (
    <section id="prices" className="bg-background pt-16 pb-24 md:pt-24 md:pb-36">
      <div className="luxury-page">
        <h2
          className="font-source-sans-3 mb-10 text-center text-3xl uppercase leading-tight tracking-tight text-foreground sm:text-4xl md:mb-14 md:text-[52px]"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Ценоразпис
        </h2>

        <div className="rounded-[18px] bg-[color:var(--palette-bg-white)] py-6 px-0 md:p-10 lg:p-14">
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:gap-x-8 xl:gap-x-10">
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
