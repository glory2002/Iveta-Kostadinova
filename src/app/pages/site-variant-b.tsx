import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { ServicesSection } from '../components/services-section';
import { UpcomingCoursesSection } from '../components/upcoming-courses-section';
import { PriceListSection } from '../components/price-list-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { Footer } from '../components/footer';

/**
 * Вариант B — макет: центриран хедър, hero с един outline CTA, бяла секция с 4 карти в ред.
 * Долу: същите секции като при вариант A.
 * Стилове само за този вариант: `src/styles/variants/variant-b.css` (селектор `[data-site-variant='b']`).
 */
export function SiteVariantB() {
  return (
    <div
      data-site-variant="b"
      className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[color:var(--palette-bg-white)]"
    >
      <Header variant="b" />
      <HeroSection variant="b" />
      <ServicesSection variant="b" />
      <UpcomingCoursesSection variant="b" />
      <PriceListSection variant="b" />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
