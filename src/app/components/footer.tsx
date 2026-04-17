import { Instagram, Phone, Facebook, MapPin } from 'lucide-react';

import { useLanguage } from '../contexts/language-context';

const STUDIO_ADDRESS = 'кв. Манастирски ливади, София, Блок 89А';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`;

function FooterLanguageSwitch() {
  const { lang, setLang } = useLanguage();

  const btn =
    'rounded-sm px-2 py-1 text-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--palette-bg-white)_45%,transparent)] md:text-base';

  return (
    <div
      className="font-source-sans-3 flex flex-wrap items-center gap-2 text-[color:var(--palette-bg-white)] md:gap-3"
      role="group"
      aria-label="Език / Language"
    >
      <button
        type="button"
        className={`${btn} ${lang === 'bg' ? 'font-medium opacity-100' : 'opacity-65 hover:opacity-100'}`}
        onClick={() => setLang('bg')}
        aria-pressed={lang === 'bg'}
      >
        Български
      </button>
      <span className="select-none opacity-35" aria-hidden>
        |
      </span>
      <button
        type="button"
        className={`${btn} ${lang === 'en' ? 'font-medium opacity-100' : 'opacity-65 hover:opacity-100'}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        English
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-primary/25 bg-[color:var(--palette-p700)] px-4 py-12 text-left md:px-6 md:py-20 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-stretch md:justify-between md:gap-12 lg:gap-16">
          {/* Ляво: лого горе, социални долу — колоната запълва височината на реда (като контактите) */}
          <div className="flex min-h-0 flex-col items-start gap-4 md:shrink-0 md:justify-between md:gap-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center md:h-14 md:w-14">
              <img
                src="https://static.wixstatic.com/media/4de890_96ec563965c84123a035a64c11346816~mv2.png/v1/fill/w_118,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phi_logo_gold_cropped.png"
                alt="Phi Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-secondary transition-all hover:bg-primary/40 hover:text-[color:var(--palette-bg-white)] md:h-12 md:w-12"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-secondary transition-all hover:bg-primary/40 hover:text-[color:var(--palette-bg-white)] md:h-12 md:w-12"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://wa.me/359876003900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-secondary transition-all hover:bg-primary/40 hover:text-[color:var(--palette-bg-white)] md:h-12 md:w-12"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Дясно: контакти */}
          <div className="font-source-sans-3 min-w-0 space-y-3 md:max-w-lg md:text-right md:space-y-4">
            <p className="text-lg font-normal tracking-wide text-[color:var(--palette-bg-white)] md:text-xl">
              PMU Студио Ивета Костадинова
            </p>
            <div className="flex flex-col gap-2 md:items-end">
              <p className="text-base tracking-wide text-[color:var(--palette-bg-white)] md:text-lg" style={{ fontWeight: 300 }}>
                {STUDIO_ADDRESS}
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-sm text-[color:var(--palette-bg-white)] underline decoration-[color:color-mix(in_srgb,var(--palette-bg-white)_55%,transparent)] underline-offset-[5px] transition-colors hover:decoration-[color:var(--palette-bg-white)] md:self-end md:text-base"
                style={{ fontWeight: 300 }}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 opacity-80 md:h-4 md:w-4" aria-hidden />
                Карта в Google Maps
              </a>
            </div>
            <p className="text-base text-[color:var(--palette-bg-white)] md:text-lg" style={{ fontWeight: 300 }}>
              <a href="tel:+359876003900" className="text-[color:var(--palette-bg-white)] underline-offset-2 transition-opacity hover:opacity-90">
                +359 876 003900
              </a>
            </p>
            <p className="text-base text-[color:var(--palette-bg-white)] md:text-lg" style={{ fontWeight: 300 }}>
              <a href="mailto:INFO@PHI.BG" className="text-[color:var(--palette-bg-white)] underline-offset-2 transition-opacity hover:opacity-90">
                info@phi.bg
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-10">
          <p className="text-sm tracking-wide text-primary/70" style={{ fontWeight: 500 }}>
            © 2026 IVETA KOSTADINOVA
          </p>
          <div className="flex w-full justify-end md:w-auto">
            <FooterLanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
