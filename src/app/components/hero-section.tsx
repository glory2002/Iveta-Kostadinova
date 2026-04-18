import heroImage from '../../assets/54ac056b03aa6fdd21921dc6ebcc985130e489ef.png';

import { SiteButton } from './site-button';

export type HeroVariant = 'a' | 'b';

export function HeroSection({ variant = 'a' }: { variant?: HeroVariant }) {
  const isB = variant === 'b';

  return (
    <section id="hero" className="relative h-[100dvh] min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ивета Костадинова"
          className="h-full w-full object-cover object-center"
        />
        <div
          className={
            isB
              ? 'pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--palette-p700)_22%,transparent)] from-0% via-[color:color-mix(in_srgb,var(--palette-p700)_10%,transparent)] via-[45%] to-transparent to-[82%]'
              : 'pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--palette-p700)_38%,transparent)] from-0% via-[color:color-mix(in_srgb,var(--palette-p700)_14%,transparent)] via-[34%] to-transparent to-[60%] sm:via-[36%] sm:to-[64%] md:via-[32%] md:to-[64%] lg:to-[62%]'
          }
          aria-hidden
        />
        {!isB ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] min-h-[52%]"
            style={{
              background:
                'linear-gradient(to top, var(--palette-p700) 0%, color-mix(in srgb, var(--palette-p700) 88%, transparent) 18%, color-mix(in srgb, var(--palette-p700) 52%, transparent) 38%, color-mix(in srgb, var(--palette-p700) 22%, transparent) 58%, transparent 100%)',
            }}
            aria-hidden
          />
        ) : null}
        {/* Cinematic: вариант A — по-светъл, за да не „реже“; B — по-силен контраст */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background: isB
              ? 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 85%)'
              : 'linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0.06) 58%, rgba(0,0,0,0.02) 78%, rgba(0,0,0,0) 88%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 box-border flex h-full min-h-0 flex-col justify-center pb-14 pt-[calc(4.75rem+env(safe-area-inset-top,0px))] luxury-page md:justify-center md:pb-12 md:pt-8">
        <div
          className={`w-full max-w-xl md:max-w-[min(36rem,42vw)] ${
            isB
              ? 'ml-4 translate-x-[12%] sm:ml-6 sm:translate-x-[16%] md:ml-8 md:translate-x-[20%]'
              : ''
          }`}
        >
          <h1
            lang="bg"
            className={`mb-4 leading-[0.95] text-[color:var(--palette-bg-white)] drop-shadow-[0_1px_12px_color-mix(in_srgb,var(--palette-p700)_35%,transparent)] md:mb-6 ${
              isB
                ? 'text-[2.35rem] tracking-[0.04em] md:text-[3.5rem] md:tracking-[0.045em] lg:text-[4rem] lg:tracking-[0.05em]'
                : 'uppercase tracking-normal text-[2.5rem] md:text-[3.25rem] lg:text-[4.25rem] xl:text-[4.75rem]'
            }`}
            style={{
              fontWeight: 400,
              ...(isB
                ? {
                    fontFamily: "'Manrope Web', sans-serif",
                    fontFeatureSettings: '"locl" 1',
                  }
                : {
                    fontFamily: "'Raleway Web', sans-serif",
                    fontFeatureSettings: '"locl" 1',
                    /* Regular 400 — като ред „Regular“ в Google Fonts; 300 изглежда по-тънко от preview-а */
                    fontVariationSettings: "'wght' 400",
                    textRendering: 'geometricPrecision',
                  }),
            }}
          >
            {isB ? (
              <>
                <span className="block">ИВЕТА</span>
                <span className="block">КОСТАДИНОВА</span>
              </>
            ) : (
              <>
                <span className="block">Ивета</span>
                <span className="block">Костадинова</span>
              </>
            )}
          </h1>
          <p
            lang="en"
            className="mb-8 text-sm uppercase leading-relaxed tracking-[0.16em] text-[color:color-mix(in_srgb,var(--palette-bg-white)_82%,transparent)] drop-shadow-[0_1px_8px_color-mix(in_srgb,var(--palette-p700)_30%,transparent)] md:mb-10 md:text-[15px] md:tracking-[0.18em]"
            style={
              isB
                ? {
                    fontFamily: "'Manrope Web', sans-serif",
                    fontWeight: 300,
                    fontVariationSettings: "'wght' 300",
                  }
                : {
                    fontFamily: "'Raleway Web', sans-serif",
                    fontWeight: 300,
                    fontVariationSettings: "'wght' 300",
                  }
            }
          >
            PMU Expert · Master Trainer · Phibrows Ambassador
          </p>
          {isB ? (
            <SiteButton
              asChild
              variant="outlineChocolate"
              className="w-auto max-w-none justify-center"
            >
              <a href="#services">Виж моите услуги</a>
            </SiteButton>
          ) : (
            <div className="flex flex-row flex-wrap items-stretch gap-2 sm:items-center sm:gap-4">
              <SiteButton
                asChild
                variant="outlineChocolate"
                className="min-w-0 max-w-none w-auto flex-1 justify-center sm:w-auto sm:flex-none"
              >
                <a href="#services">Моите услуги</a>
              </SiteButton>
              <SiteButton
                asChild
                variant="outlineOffWhite"
                className="min-w-0 max-w-none w-auto flex-1 justify-center sm:w-auto sm:flex-none"
              >
                <a href="#courses">Обучения</a>
              </SiteButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
