import { useState, useEffect } from 'react';

import { SiteButton } from './site-button';

export function FloatingCtaButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerRect.top < windowHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
