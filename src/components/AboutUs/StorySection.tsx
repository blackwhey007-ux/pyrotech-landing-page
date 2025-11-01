import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Story3D from './Story3D';

const StorySection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile Image - only visible on phones */}
        <img
          src="/images/uber uns/uber uns phone.jpg"
          alt="About Us Background Mobile"
          className="w-full h-auto object-contain md:hidden"
          style={{
            objectPosition: 'top center',
            width: '100%',
            height: 'auto'
          }}
          loading="lazy"
        />
        {/* Desktop Image - only visible on desktop/web */}
        <img
          src="/images/uber uns/uber uns.jpg"
          alt="About Us Background"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
          loading="lazy"
        />
        {/* Dark overlay for better text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 md:from-black/60 md:via-black/50 md:to-black/70" />
      </div>
      
      {/* 3D Background */}
      <Story3D />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.tagline')}
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 mb-16 border border-yellow-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t('about.principles.title1')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.principles.description1')}
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t('about.principles.title2')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.principles.description2')}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {t('about.values.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">{t('about.values.sicherheit.title')}</h4>
              <p className="text-gray-300">{t('about.values.sicherheit.description')}</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">{t('about.values.kreativitaet.title')}</h4>
              <p className="text-gray-300">{t('about.values.kreativitaet.description')}</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">{t('about.values.professionalitaet.title')}</h4>
              <p className="text-gray-300">{t('about.values.professionalitaet.description')}</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">{t('about.values.zuverlaessigkeit.title')}</h4>
              <p className="text-gray-300">{t('about.values.zuverlaessigkeit.description')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
