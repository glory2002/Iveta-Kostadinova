import { Instagram, Phone, Facebook, MapPin } from 'lucide-react';

const STUDIO_ADDRESS = 'кв. Манастирски ливади, София, Блок 89А';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`;

export function Footer() {
  return (
    <footer className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-[#2A1F1A] text-center">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <img 
            src="https://static.wixstatic.com/media/4de890_96ec563965c84123a035a64c11346816~mv2.png/v1/fill/w_118,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phi_logo_gold_cropped.png"
            alt="Phi Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl md:text-2xl tracking-[0.2em] text-[#E8D5C4]" style={{ fontWeight: 500 }}>
          PHI.BG
        </span>
      </div>
      
      {/* Contact Info */}
      <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
        <p className="text-[#E8D5C4] text-base md:text-lg tracking-wide" style={{ fontWeight: 500 }}>
          PMU Студио Ивета Костадинова
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#C9A882] text-base md:text-lg tracking-wide" style={{ fontWeight: 300 }}>
            {STUDIO_ADDRESS}
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm md:text-base text-[#C9A882] underline underline-offset-[5px] decoration-[#C9A882]/45 hover:text-[#E8D5C4] hover:decoration-[#E8D5C4]/70 transition-colors duration-300"
            style={{ fontWeight: 300 }}
          >
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 opacity-80" aria-hidden />
            Карта в Google Maps
          </a>
        </div>
        <p className="text-[#C9A882] text-base md:text-lg" style={{ fontWeight: 300 }}>
          <a href="tel:+359876003900" className="hover:text-[#E8D5C4] transition-colors duration-300">+359 876 003900</a>
        </p>
        <p className="text-[#C9A882] text-base md:text-lg" style={{ fontWeight: 300 }}>
          <a href="mailto:INFO@PHI.BG" className="hover:text-[#E8D5C4] transition-colors duration-300">info@phi.bg</a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-10">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A882]/20 hover:bg-[#C9A882]/40 flex items-center justify-center text-[#E8D5C4] hover:text-white transition-all duration-300"
        >
          <Facebook className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A882]/20 hover:bg-[#C9A882]/40 flex items-center justify-center text-[#E8D5C4] hover:text-white transition-all duration-300"
        >
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a 
          href="https://wa.me/359876003900" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A882]/20 hover:bg-[#C9A882]/40 flex items-center justify-center text-[#E8D5C4] hover:text-white transition-all duration-300"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[#C9A882]/80 text-sm tracking-wide px-4" style={{ fontWeight: 500 }}>
        © 2025 IVETA KOSTADINOVA
      </p>
    </footer>
  );
}