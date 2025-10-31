import React from 'react';
import { motion } from 'framer-motion';

const GoogleMap: React.FC = () => {
  const address = 'Arcadiastr.24, 40472 Düsseldorf, Germany';
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <motion.div
      className="mt-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
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
  );
};

export default GoogleMap;

