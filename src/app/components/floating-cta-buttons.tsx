import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function FloatingCtaButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling 300px down
      setIsVisible(window.scrollY > 300);
      
      // Check if we're near the footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide buttons when footer is in view (with some buffer)
        setIsNearFooter(footerRect.top < windowHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 bottom-5 z-40 flex flex-col gap-2.5 md:gap-3 transition-all duration-500 scale-[0.8] ${
        isVisible && !isNearFooter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
      }`}
    >
      {/* Безплатна Консултация Button */}
      <button
        className="group relative backdrop-blur-md bg-[#C9A882]/90 hover:bg-[#C9A882] text-white rounded-full pl-4 pr-5 md:pl-5 md:pr-6 py-3 md:py-4 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 md:gap-3 whitespace-nowrap"
        style={{ fontWeight: 500, letterSpacing: '0.05em' }}
      >
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
        <span className="text-sm md:text-base">Безплатна Консултация</span>
      </button>

      {/* Вип Час Button */}
      <button
        className="group relative backdrop-blur-md bg-[#8B7355]/90 hover:bg-[#8B7355] text-white rounded-full pl-4 pr-5 md:pl-5 md:pr-6 py-3 md:py-4 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 md:gap-3 whitespace-nowrap"
        style={{ fontWeight: 500, letterSpacing: '0.05em' }}
      >
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-base md:text-lg">✦</span>
        </div>
        <span className="text-sm md:text-base">Vip Pass</span>
      </button>
    </div>
  );
}