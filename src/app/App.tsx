import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { ServicesSection } from './components/services-section';
import { UpcomingCoursesSection } from './components/upcoming-courses-section';
import { PriceListSection } from './components/price-list-section';
import { TestimonialsSection } from './components/testimonials-section';
import { Footer } from './components/footer';
import { FloatingCtaButtons } from './components/floating-cta-buttons';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <UpcomingCoursesSection />
      <PriceListSection />
      <TestimonialsSection />
      <Footer />
      <FloatingCtaButtons />
    </div>
  );
}