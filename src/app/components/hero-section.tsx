import heroImage from '../../assets/54ac056b03aa6fdd21921dc6ebcc985130e489ef.png';

import { SiteButton } from './site-button';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden md:min-h-[85vh]">
      {/* Пълна височина отгоре — под прозрачния header се вижда снимката, не body фона */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ивета Костадинова"
          className="h-full w-full object-cover object-center"
        />
        {/* Само тъмен „винет“ отляво за бял текст — без светъл/бежов wash; снимката си личи */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--palette-p700)_52%,transparent)] from-0% via-[color:color-mix(in_srgb,var(--palette-p700)_18%,transparent)] via-[32%] to-transparent to-[58%] sm:via-[35%] sm:to-[62%] md:via-[38%] md:to-[58%] lg:to-[56%]"
          aria-hidden
        />
        {/* Долу — плавно към секция „Услуги“ */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] min-h-[42%] bg-gradient-to-t from-[color:var(--palette-p700)] from-[8%] via-[color:color-mix(in_srgb,var(--palette-p700)_42%,transparent)] to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] min-h-[calc(100dvh-4.5rem)] flex-col justify-end px-6 pb-14 pt-8 md:min-h-[calc(85vh-5rem)] md:justify-center md:pb-12 md:pl-8 lg:pl-12 xl:pl-16">
        <div className="w-full max-w-xl md:max-w-[min(36rem,42vw)]">
          <h1
            className="mb-4 text-[2.5rem] uppercase leading-[0.95] tracking-tight text-[color:var(--palette-bg-white)] drop-shadow-[0_1px_12px_color-mix(in_srgb,var(--palette-p700)_35%,transparent)] md:mb-6 md:text-[3.25rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            <span className="block">Ивета</span>
            <span className="block">Костадинова</span>
          </h1>
          <p
            className="mb-8 text-[20px] leading-snug tracking-[0.2em] text-[color:color-mix(in_srgb,var(--palette-bg-white)_82%,transparent)] drop-shadow-[0_1px_8px_color-mix(in_srgb,var(--palette-p700)_30%,transparent)] md:mb-10"
            style={{ fontWeight: 300 }}
          >
            PMU EXPERT · 2015
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <SiteButton asChild variant="fillChocolate" className="w-full sm:w-auto">
              <a href="#services">Моите услуги</a>
            </SiteButton>
            <SiteButton asChild variant="outlineOffWhite" className="w-full sm:w-auto">
              <a href="#courses">Моите обучения</a>
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
