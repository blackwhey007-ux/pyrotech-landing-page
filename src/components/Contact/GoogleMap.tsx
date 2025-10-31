import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GoogleMapProps {
  isVisible?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ isVisible = false }) => {
  const address = 'Arcadiastr.24, 40472 Düsseldorf, Germany';
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="mt-8 w-full"
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pyrotech Event Location - Arcadiastr.24, 40472 Düsseldorf"
              className="w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoogleMap;

