import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import EventGrid from '../components/EventCards/EventGrid';
import PricingSection from '../components/Pricing/PricingSection';
import ProcessSection from '../components/Process/ProcessSection';
import UrgencyCTA from '../components/CTASection/UrgencyCTA';
import TrustBadges from '../components/TrustBadges/TrustBadges';

const HomePage: React.FC = () => {
  // Handle hash-based navigation for section scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <Hero />
      <EventGrid />
      <PricingSection />
      <ProcessSection />
      <UrgencyCTA />
      <TrustBadges />
    </div>
  );
};

export default HomePage;

