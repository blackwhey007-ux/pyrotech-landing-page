// import React from 'react'; // Not needed in React 17+
import Hero from './components/Hero/Hero';
import EventGrid from './components/EventCards/EventGrid';
import PricingSection from './components/Pricing/PricingSection';
import ProcessSection from './components/Process/ProcessSection';
import TestimonialCarousel from './components/Testimonials/TestimonialCarousel';
import VideoSection from './components/VideoShowcase/VideoSection';
import UrgencyCTA from './components/CTASection/UrgencyCTA';
import TrustBadges from './components/TrustBadges/TrustBadges';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <EventGrid />
      <PricingSection />
      <ProcessSection />
      <TestimonialCarousel />
      <VideoSection />
      <UrgencyCTA />
      <TrustBadges />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
