import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button';

const UrgencyCTA: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-primary-yellow/5"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(220, 20, 60, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)',
              'linear-gradient(45deg, rgba(255, 215, 0, 0.05) 0%, rgba(220, 20, 60, 0.05) 100%)',
              'linear-gradient(45deg, rgba(220, 20, 60, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Fire Effects */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-t from-primary-red to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-t from-primary-yellow to-transparent rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Clock Icon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">⏰</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t('cta.subtitle')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            size="lg"
            className="text-xl px-12 py-4"
            onClick={() => navigate('/contact-us')}
          >
            {t('cta.button')}
          </Button>
        </motion.div>

        {/* Urgency Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span className="text-primary-red text-xl">✓</span>
            <span className="text-text-secondary">Nur noch 3 Termine im Dezember</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-yellow text-xl">✓</span>
            <span className="text-text-secondary">Über 50 Anfragen diese Woche</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
