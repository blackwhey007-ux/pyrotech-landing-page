import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
// Direct scroll implementation - no import needed

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Logo/Brand */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-bold font-heading bg-gradient-primary bg-clip-text text-transparent mb-4">
          PYROTECH EVENT
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
      </motion.div>

      {/* Main Headline */}
      <motion.div
        className="mb-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Willkommen bei Pyrotech Event
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold font-heading bg-gradient-primary bg-clip-text text-transparent mb-6">
          DIE FEUERWERK-EXPERTEN FÜR<br />
          UNVERGESSLICHE MOMENTE
        </h3>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Professionelle Pyrotechnik für Festivals, Hochzeiten & Firmenevents in ganz Deutschland
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Button
          variant="primary"
          size="lg"
          className="min-w-[200px]"
          onClick={() => {
            console.log('🔥 Hero button clicked: Contact');
            const contactElement = document.getElementById('contact');
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              console.log('✅ Scrolled to contact');
            } else {
              console.error('❌ Contact element not found!');
            }
          }}
        >
          Jetzt Beratung buchen
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="min-w-[200px]"
          onClick={() => {
            console.log('🔥 Hero button clicked: Pricing');
            const pricingElement = document.getElementById('pricing');
            if (pricingElement) {
              pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              console.log('✅ Scrolled to pricing');
            } else {
              console.error('❌ Pricing element not found!');
            }
          }}
        >
          Pakete ansehen
        </Button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="text-text-secondary">500+ Events</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="text-text-secondary">15 Jahre Erfahrung</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <span className="text-text-secondary">TÜV-zertifiziert</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
