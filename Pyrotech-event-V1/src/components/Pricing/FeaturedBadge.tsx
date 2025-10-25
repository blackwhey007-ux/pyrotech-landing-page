import React from 'react';
import { motion } from 'framer-motion';

const FeaturedBadge: React.FC = () => {
  return (
    <motion.div
      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <motion.div
          className="bg-gradient-primary text-black px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap"
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 215, 0, 0.3)',
              '0 0 40px rgba(255, 215, 0, 0.6)',
              '0 0 20px rgba(255, 215, 0, 0.3)'
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⭐ BELIEBTESTES PAKET
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default FeaturedBadge;
