import type { ReactNode } from 'react';
import { Instagram, Phone, Facebook } from 'lucide-react';

import { useLanguage } from '../contexts/language-context';

const STUDIO_LINES = ['ул. Неофит Рилски 47', 'София 1000, България'];

const STUDIO_GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'ул. Неофит Рилски 47, София 1000, България'
)}`;

const HOURS_LINES = ['понеделник — събота', '10:00 — 19:00', 'по запазен час'];

const EMAIL = 'studio@ivetakostadinova.bg';
const PHONE_DISPLAY = '+359 876 003900';
const PHONE_HREF = 'tel:+359876003900';
const INSTAGRAM_HANDLE = '@iveta.pmu';
const INSTAGRAM_URL = 'https://www.instagram.com/iveta.pmu/';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Обучения', href: '#courses' },
  { label: 'Ценоразпис', href: '#prices' },
  { label: 'За мен', href: '#hero' },
] as const;

function FooterLanguageSwitch() {
  const { lang, setLang } = useLanguage();

  const btn =
    'rounded-sm px-2 py-1 text-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--palette-bg-white)_45%,transparent)] md:text-base';

  return (
    <div
      className="font-source-sans-3 flex flex-wrap items-center justify-center gap-2 text-[color:var(--palette-bg-white)] md:justify-start md:gap-3"
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

function FooterColHeading({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-source-sans-3 text-[11px] font-normal uppercase tracking-[0.22em] text-[color:var(--palette-bg-white)]/55 md:text-xs md:tracking-[0.26em]"
      style={{ fontWeight: 500 }}
    >
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-primary/25 bg-[color:var(--palette-p900)] py-12 text-left md:py-20"
    >
      <div className="luxury-page">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-10 lg:gap-14">
          {/* Ляво: марка + социални */}
          <div className="flex shrink-0 flex-col items-start gap-6 md:max-w-[20rem] md:gap-8">
            <div className="flex flex-col items-start gap-3 md:gap-4">
              {/* Като хедъра: един ред — лого + PHI.BG */}
              <div className="flex items-center gap-2.5 md:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center md:h-11 md:w-11">
                  <img
                    src="https://static.wixstatic.com/media/4de890_96ec563965c84123a035a64c11346816~mv2.png/v1/fill/w_118,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phi_logo_gold_cropped.png"
                    alt="Phi Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <a
                  href="https://phi.bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-source-sans-3 truncate text-base tracking-[0.22em] text-[color:var(--palette-bg-white)] transition-opacity hover:opacity-90 md:text-lg lg:text-xl"
                  style={{ fontWeight: 500 }}
                >
                  PHI.BG
                </a>
              </div>
              <p className="font-source-sans-3 text-2xl font-light uppercase leading-[1.15] tracking-[0.055em] text-[color:var(--palette-bg-white)] md:text-3xl md:tracking-[0.065em] lg:text-4xl lg:tracking-[0.075em]">
                Ивета Костадинова
              </p>
              <p
                className="font-source-sans-3 text-sm font-normal uppercase leading-snug tracking-[0.16em] text-[color:var(--palette-bg-white)]/85 md:text-base md:tracking-[0.18em] lg:text-lg lg:tracking-[0.2em]"
                style={{ fontWeight: 300 }}
              >
                PMU Expert · est. 2015
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--palette-bg-white)_14%,transparent)] bg-[color:color-mix(in_srgb,var(--palette-bg-white)_6%,transparent)] text-[color:var(--palette-bg-white)]/78 transition-[background-color,border-color,color,transform] duration-300 hover:border-[color:color-mix(in_srgb,var(--palette-bg-white)_28%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] hover:text-[color:var(--palette-bg-white)] active:scale-[0.96]"
                aria-label="Facebook"
              >
                <Facebook className="h-[15px] w-[15px]" strokeWidth={1.65} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--palette-bg-white)_14%,transparent)] bg-[color:color-mix(in_srgb,var(--palette-bg-white)_6%,transparent)] text-[color:var(--palette-bg-white)]/78 transition-[background-color,border-color,color,transform] duration-300 hover:border-[color:color-mix(in_srgb,var(--palette-bg-white)_28%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] hover:text-[color:var(--palette-bg-white)] active:scale-[0.96]"
                aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <Instagram className="h-[15px] w-[15px]" strokeWidth={1.65} />
              </a>
              <a
                href="https://wa.me/359876003900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--palette-bg-white)_14%,transparent)] bg-[color:color-mix(in_srgb,var(--palette-bg-white)_6%,transparent)] text-[color:var(--palette-bg-white)]/78 transition-[background-color,border-color,color,transform] duration-300 hover:border-[color:color-mix(in_srgb,var(--palette-bg-white)_28%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] hover:text-[color:var(--palette-bg-white)] active:scale-[0.96]"
                aria-label="WhatsApp"
              >
                <Phone className="h-[15px] w-[15px]" strokeWidth={1.65} />
              </a>
            </div>
          </div>

          {/* Четири колони: навигация · студио · часове · контакт — подравнени вдясно */}
          <div className="flex min-w-0 w-full flex-1 justify-end md:items-start">
            <div className="grid w-full grid-cols-1 gap-10 sm:w-auto sm:max-w-5xl sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-8 lg:gap-10">
            <nav className="font-source-sans-3" aria-label="Футър навигация">
              <FooterColHeading>НАВИГАЦИЯ</FooterColHeading>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-block text-sm text-[color:var(--palette-bg-white)]/88 transition-opacity hover:opacity-90 md:text-[15px]"
                      style={{ fontWeight: 300 }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="font-source-sans-3">
              <FooterColHeading>СТУДИО</FooterColHeading>
              <address className="mt-4 space-y-2 not-italic">
                {STUDIO_LINES.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-relaxed text-[color:var(--palette-bg-white)]/88 md:text-[15px]"
                    style={{ fontWeight: 300 }}
                  >
                    {line}
                  </p>
                ))}
                <p className="pt-1">
                  <a
                    href={STUDIO_GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[color:var(--palette-bg-white)]/88 underline decoration-[color:color-mix(in_srgb,var(--palette-bg-white)_40%,transparent)] underline-offset-[3px] transition-opacity hover:opacity-90 md:text-[15px]"
                    style={{ fontWeight: 300 }}
                  >
                    Виж в Google Maps
                  </a>
                </p>
              </address>
            </div>

            <div className="font-source-sans-3">
              <FooterColHeading>ЧАСОВЕ</FooterColHeading>
              <div className="mt-4 space-y-2">
                {HOURS_LINES.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-relaxed text-[color:var(--palette-bg-white)]/88 md:text-[15px]"
                    style={{ fontWeight: 300 }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="font-source-sans-3">
              <FooterColHeading>КОНТАКТ</FooterColHeading>
              <div className="mt-4 space-y-2">
                <p style={{ fontWeight: 300 }}>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-[color:var(--palette-bg-white)]/88 underline-offset-2 transition-opacity hover:opacity-90 md:text-[15px]"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p style={{ fontWeight: 300 }}>
                  <a
                    href={PHONE_HREF}
                    className="text-sm text-[color:var(--palette-bg-white)]/88 underline-offset-2 transition-opacity hover:opacity-90 md:text-[15px]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p style={{ fontWeight: 300 }}>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[color:var(--palette-bg-white)]/88 underline decoration-[color:color-mix(in_srgb,var(--palette-bg-white)_45%,transparent)] underline-offset-[3px] transition-opacity hover:opacity-90 md:text-[15px]"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-10">
          <p
            className="order-2 text-center text-sm tracking-wide text-primary/70 md:order-1 md:text-left"
            style={{ fontWeight: 500 }}
          >
            © 2026 IVETA KOSTADINOVA
          </p>
          <div className="order-1 flex w-full justify-center md:order-2 md:w-auto md:justify-end">
            <FooterLanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
