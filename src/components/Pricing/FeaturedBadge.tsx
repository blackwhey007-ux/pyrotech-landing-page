import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturedBadge: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <motion.div
          className="bg-gradient-primary text-black px-4 py-1.5 rounded-full font-bold text-xs whitespace-nowrap"
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
          ⭐ {t('pricing.featuredBadge')}
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
