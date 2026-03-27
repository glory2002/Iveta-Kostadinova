import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled down enough to apply backdrop
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < 50) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 
      isScrolled 
        ? 'backdrop-blur-md bg-[#8B7355]/70 border-b border-white/20' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-5 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img 
                src="https://static.wixstatic.com/media/4de890_96ec563965c84123a035a64c11346816~mv2.png/v1/fill/w_118,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phi_logo_gold_cropped.png"
                alt="Phi Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="hidden md:block text-xl md:text-2xl tracking-[0.2em] text-white transition-colors duration-300" style={{ fontWeight: 500 }}>
              PHI.BG
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <a href="#" className="text-white hover:text-[#E8D5C4] transition-colors duration-300 text-base lg:text-lg" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
              Начало
            </a>
            <a href="#services" className="text-white hover:text-[#E8D5C4] transition-colors duration-300 text-base lg:text-lg" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
              Услуги
            </a>
            <a href="#prices" className="text-white hover:text-[#E8D5C4] transition-colors duration-300 text-base lg:text-lg" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
              Ценоразпис
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-[#8B7355]/95 border-b border-white/20 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-6 space-y-4">
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white hover:text-white/80 transition-colors duration-300 py-2 text-lg"
            style={{ fontWeight: 500, letterSpacing: '0.05em' }}
          >
            Начало
          </a>
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white hover:text-white/80 transition-colors duration-300 py-2 text-lg"
            style={{ fontWeight: 500, letterSpacing: '0.05em' }}
          >
            Услуги
          </a>
          <a
            href="#prices"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white hover:text-white/80 transition-colors duration-300 py-2 text-lg"
            style={{ fontWeight: 500, letterSpacing: '0.05em' }}
          >
            Ценоразпис
          </a>
        </nav>
      </div>
    </header>
  );
}