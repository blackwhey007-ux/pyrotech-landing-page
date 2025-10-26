import React from 'react';
import Hero from '../components/Hero/Hero';
import EventGrid from '../components/EventCards/EventGrid';
import PricingSection from '../components/Pricing/PricingSection';
import ProcessSection from '../components/Process/ProcessSection';
import UrgencyCTA from '../components/CTASection/UrgencyCTA';
import TrustBadges from '../components/TrustBadges/TrustBadges';

const HomePage: React.FC = () => {
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

