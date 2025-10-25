import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Hero from './components/Hero/Hero';
import EventGrid from './components/EventCards/EventGrid';
import PricingSection from './components/Pricing/PricingSection';
import ProcessSection from './components/Process/ProcessSection';
import TestimonialCarousel from './components/Testimonials/TestimonialCarousel';
import VideoSection from './components/VideoShowcase/VideoSection';
import InstagramSection from './components/Instagram/InstagramSection';
import StorySection from './components/AboutUs/StorySection';
import SectionSeparator from './components/shared/SectionSeparator';
import UrgencyCTA from './components/CTASection/UrgencyCTA';
import TrustBadges from './components/TrustBadges/TrustBadges';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  // Global click handler as fallback
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-scroll-target]');
      
      if (button) {
        console.log('🌍 Global click handler triggered');
        const targetId = button.getAttribute('data-scroll-target');
        if (targetId) {
          console.log('🎯 Scrolling to:', targetId);
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('✅ Global scroll executed');
          } else {
            console.error('❌ Target element not found:', targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);
  return (
    <div className="App">
      <AnnouncementBar />
      <Hero />
      <EventGrid />
      <PricingSection />
      <ProcessSection />
      <TestimonialCarousel />
      <VideoSection />
      <InstagramSection />
      <SectionSeparator />
      <StorySection />
      <UrgencyCTA />
      <TrustBadges />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
