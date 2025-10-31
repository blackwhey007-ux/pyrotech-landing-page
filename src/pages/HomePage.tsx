import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero/Hero';
import EventGrid from '../components/EventCards/EventGrid';
import PricingSection from '../components/Pricing/PricingSection';
import ProcessSection from '../components/Process/ProcessSection';
import UrgencyCTA from '../components/CTASection/UrgencyCTA';
import TrustBadges from '../components/TrustBadges/TrustBadges';

const HomePage: React.FC = () => {
  const isScrollingToSection = useRef(false);

  // Handle hash-based navigation for section scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        isScrollingToSection.current = true;
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Reset flag after scroll completes
            setTimeout(() => {
              isScrollingToSection.current = false;
            }, 1000);
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

  // Automatically update hash based on scroll position
  useEffect(() => {
    const sections = ['events', 'pricing', 'process'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is roughly centered
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update hash if we're programmatically scrolling to a section
      if (isScrollingToSection.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const newHash = id ? `#${id}` : '';
          
          // Only update if hash is different
          if (window.location.hash !== newHash) {
            // Use pushState to add to history
            if (newHash) {
              window.history.pushState(null, '', newHash);
            } else if (window.pageYOffset < 100) {
              // At top of page, remove hash
              window.history.pushState(null, '', window.location.pathname);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all main sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe top of page (hero)
    const handleScroll = () => {
      if (isScrollingToSection.current) return;
      
      if (window.pageYOffset < 100 && window.location.hash !== '') {
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
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

