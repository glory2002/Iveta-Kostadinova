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
 * Вариант B — макет: центриран хедър, hero с един outline CTA, бяла секция с 4 карти в ред.
 * Долу: същите секции като при вариант A.
 */
export function SiteVariantB() {
  return (
    <div
      data-site-variant="b"
      className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[color:var(--palette-bg-white)]"
    >
      <Header variant="b" />
      <HeroSection variant="b" />
      <Reveal>
        <ServicesSection variant="b" />
      </Reveal>
      <Reveal delay={0.06}>
        <UpcomingCoursesSection variant="b" />
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
