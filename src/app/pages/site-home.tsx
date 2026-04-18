import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { Reveal } from '../components/motion-primitives';
import { ServicesSection } from '../components/services-section';
import { UpcomingCoursesSection } from '../components/upcoming-courses-section';
import { PriceListSection } from '../components/price-list-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { Footer } from '../components/footer';
import { FloatingCtaButtons } from '../components/floating-cta-buttons';

/**
 * Текущият пълен лейаут на сайта (вариант A).
 * Стилове само за A: `src/styles/variants/variant-a.css` (`[data-site-variant='a']`).
 */
export function SiteHomePage() {
  return (
    <div
      data-site-variant="a"
      className="min-h-screen w-full min-w-0 overflow-x-hidden"
    >
      <Header />
      <HeroSection />
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal delay={0.06}>
        <UpcomingCoursesSection />
      </Reveal>
      <Reveal delay={0.1}>
        <PriceListSection />
      </Reveal>
      <Reveal delay={0.14}>
        <TestimonialsSection />
      </Reveal>
      <Reveal delay={0.04}>
        <Footer />
      </Reveal>
      <FloatingCtaButtons />
    </div>
  );
}
