import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const HeroContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Logo/Brand */}
      <motion.div
        className="mb-6 md:mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading bg-gradient-primary bg-clip-text text-transparent mb-3 md:mb-4 drop-shadow-lg">
          PYROTECH EVENT
        </h1>
        <div className="w-20 md:w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
      </motion.div>

      {/* Main Headline */}
      <motion.div
        className="mb-6 md:mb-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-xl md:text-3xl font-semibold text-white mb-3 drop-shadow-md">
          Willkommen bei Pyrotech Event
        </h2>
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold font-heading bg-gradient-primary bg-clip-text text-transparent mb-4 leading-tight drop-shadow-lg">
          DIE FEUERWERK-EXPERTEN FÜR<br />
          UNVERGESSLICHE MOMENTE
        </h3>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Professionelle Pyrotechnik für Festivals, Hochzeiten & Firmenevents in ganz Deutschland
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Button
          variant="primary"
          size="lg"
          className="min-w-[200px] shadow-lg"
          onClick={() => navigate('/contact-us')}
        >
          Jetzt Beratung buchen
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="min-w-[200px] shadow-lg"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const pricingElement = document.getElementById('pricing');
            if (pricingElement) {
              setTimeout(() => {
                pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }
          }}
        >
          Pakete ansehen
        </Button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="text-xl md:text-2xl">🔥</span>
          <span className="text-white font-medium drop-shadow-md">500+ Events</span>
        </div>
        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="text-xl md:text-2xl">⭐</span>
          <span className="text-white font-medium drop-shadow-md">15 Jahre Erfahrung</span>
        </div>
        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="text-xl md:text-2xl">🛡️</span>
          <span className="text-white font-medium drop-shadow-md">TÜV-zertifiziert</span>
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
