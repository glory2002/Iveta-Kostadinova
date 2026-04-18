import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

import { SiteButton } from './site-button';

const CONSULT_URL = 'https://wa.me/359876003900';

export type HeaderVariant = 'a' | 'b';

/** Header — вариант A: навигация надясно. Вариант B: навигация центрирана (макет клиент). */
export function Header({ variant = 'a' }: { variant?: HeaderVariant }) {
  /** Най-горе: прозрачен бар. След скрол надолу (>50px): off-white лента. */
  const [solidHeader, setSolidHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    prevScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const prev = prevScrollYRef.current;

      setSolidHeader(y > 50);

      if (y < 50) {
        setIsVisible(true);
      } else if (y > prev) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      prevScrollYRef.current = y;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** Мобилно меню — по-голям текст; tracking като бутоните. */
  const mobileNavLinkStyle = { fontWeight: 500, letterSpacing: '0.08em' } as const;

  /** Desktop nav: същата големина/дебелина/tracking като `sb-fill-chocolate` (лейбъл на CTA). */
  const desktopNavLinkClass = solidHeader
    ? 'text-foreground/95 hover:text-primary transition-colors duration-200 text-[length:var(--btn-type-size)] font-normal uppercase leading-none tracking-[length:var(--btn-type-tracking)]'
    : 'text-[color:var(--palette-bg-white)]/95 hover:text-secondary transition-colors duration-200 text-[length:var(--btn-type-size)] font-normal uppercase leading-none tracking-[length:var(--btn-type-tracking)]';

  const logoClass = solidHeader
    ? 'truncate text-base tracking-[0.22em] text-foreground md:text-lg lg:text-xl'
    : 'truncate text-base tracking-[0.22em] text-[color:var(--palette-bg-white)] md:text-lg lg:text-xl';

  const headerSurface = solidHeader
    ? 'border-b border-primary/15 bg-[color:var(--palette-bg-white)] shadow-[0_4px_24px_color-mix(in_srgb,var(--palette-p700)_8%,transparent)]'
    : 'border-b-0 !bg-transparent shadow-none backdrop-blur-none [background-image:none]';

  return (
    <header
      role="banner"
      className={`fixed top-0 right-0 left-0 z-50 transition-[transform,background,border-color,box-shadow,backdrop-filter] duration-300 ${headerSurface} ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative z-10 luxury-page !bg-transparent">
        <div
          className={`relative flex min-h-[4.5rem] w-full items-center gap-3 md:min-h-[5rem] md:gap-6 ${variant === 'b' ? 'justify-between' : ''}`}
        >
          {/* Left: logo → начална страница за избор на вариант */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center md:h-11 md:w-11">
              <img
                src="https://static.wixstatic.com/media/4de890_96ec563965c84123a035a64c11346816~mv2.png/v1/fill/w_118,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phi_logo_gold_cropped.png"
                alt="Phi Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className={`hidden md:inline-block ${logoClass}`} style={{ fontWeight: 500 }}>
              PHI.BG
            </span>
          </Link>

          {variant === 'b' ? (
            <nav
              className="absolute left-1/2 hidden min-w-0 -translate-x-1/2 items-center gap-6 md:flex lg:gap-10"
              aria-label="Основна навигация"
            >
              <a href="#services" className={desktopNavLinkClass}>
                Услуги
              </a>
              <a href="#courses" className={desktopNavLinkClass}>
                Обучения
              </a>
              <a href="#footer" className={desktopNavLinkClass}>
                За мен
              </a>
            </nav>
          ) : null}

          {/* Дясно: навигация (само A) + CTA + мобилно меню */}
          <div
            className={
              variant === 'b'
                ? 'flex shrink-0 items-center gap-3 md:gap-4'
                : 'ml-auto flex min-w-0 flex-1 items-center justify-end gap-4 md:gap-6 lg:gap-8'
            }
          >
            {variant === 'a' ? (
              <nav
                className="hidden min-w-0 items-center justify-end gap-6 md:flex lg:gap-10 xl:gap-12"
                aria-label="Основна навигация"
              >
                <a href="#services" className={desktopNavLinkClass}>
                  Услуги
                </a>
                <a href="#courses" className={desktopNavLinkClass}>
                  Обучения
                </a>
                <a href="#footer" className={desktopNavLinkClass}>
                  За мен
                </a>
              </nav>
            ) : null}

            <SiteButton asChild variant="fillChocolate" className="hidden shrink-0 md:inline-flex">
              <a href={CONSULT_URL} target="_blank" rel="noopener noreferrer">
                Безплатна консултация
              </a>
            </SiteButton>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={
                solidHeader
                  ? 'rounded-lg p-2 text-foreground hover:bg-primary/10 md:hidden'
                  : 'rounded-lg p-2 text-[color:var(--palette-bg-white)] hover:bg-[color:color-mix(in_srgb,var(--palette-bg-white)_12%,transparent)] md:hidden'
              }
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Затвори меню' : 'Отвори меню'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full right-0 left-0 overflow-hidden border-b border-primary/15 bg-[color:var(--palette-bg-white)] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-0 px-5 py-6" aria-label="Мобилна навигация">
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-primary/10 py-4 text-lg text-foreground/95"
            style={mobileNavLinkStyle}
          >
            Услуги
          </a>
          <a
            href="#courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-primary/10 py-4 text-lg text-foreground/95"
            style={mobileNavLinkStyle}
          >
            Обучения
          </a>
          <a
            href="#footer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-primary/10 py-4 text-lg text-foreground/95"
            style={mobileNavLinkStyle}
          >
            За мен
          </a>
          <SiteButton asChild variant="fillChocolate" className="mt-4 w-full">
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Безплатна консултация
            </a>
          </SiteButton>
        </nav>
      </div>
    </header>
  );
}
