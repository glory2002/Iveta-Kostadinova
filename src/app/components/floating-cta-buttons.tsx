import { useState, useEffect, useRef } from 'react';

import { SiteButton } from './site-button';

export function FloatingCtaButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    footerRef.current = document.querySelector('footer');

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const y = window.scrollY;
        const showFab = y > 300;
        setIsVisible((prev) => (prev === showFab ? prev : showFab));

        const footer = footerRef.current;
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const near = footerRect.top < window.innerHeight - 100;
          setIsNearFooter((prev) => (prev === near ? prev : near));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-2 bottom-5 z-40 flex scale-[0.8] flex-col gap-2.5 transition-all duration-500 md:gap-3 ${
        isVisible && !isNearFooter ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
      }`}
    >
      <SiteButton type="button" variant="floatingBrown">
        <div className="sb-floating-icon">
          <span className="text-base md:text-lg">✦</span>
        </div>
        <span>Vip Pass</span>
      </SiteButton>
    </div>
  );
}
