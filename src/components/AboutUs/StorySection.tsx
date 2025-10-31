import React from 'react';
import { motion } from 'framer-motion';
import { STORY_CONTENT } from '../../utils/constants';
import Story3D from './Story3D';

const StorySection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 bg-black overflow-hidden">
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
            Über Pyrotech Event
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {STORY_CONTENT.company.tagline}
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-3xl">
              🎆
            </div>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              {STORY_CONTENT.company.description}
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {STORY_CONTENT.principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
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
            Unsere Werte
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {STORY_CONTENT.values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
