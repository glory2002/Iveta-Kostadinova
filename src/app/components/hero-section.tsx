import heroImage from '../../assets/54ac056b03aa6fdd21921dc6ebcc985130e489ef.png';

export function HeroSection() {
  return (
    <section className="relative h-[100vh] md:h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ивета Костадинова"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mt-32 md:mt-0">
          <h1
            className="text-[#E8D5C4] tracking-tight mb-4 md:mb-6 leading-[0.95] text-[56px] md:text-[80px] lg:text-[96px] drop-shadow-[0_2px_28px_rgba(0,0,0,0.55)]"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Ивета
            <br />
            Костадинова
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-10 tracking-[0.2em]" style={{ fontWeight: 300 }}>
            PMU EXPERT · 2015
          </p>
          <button className="bg-[#E8D5C4] hover:bg-[#C9A882] active:bg-[#3A2F2A] text-[#3D3026] hover:text-[#3A2F2A] active:text-white px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg transition-all duration-300 rounded-full w-full md:w-auto" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
            Безплатна Консултация
          </button>
        </div>
      </div>
    </section>
  );
}