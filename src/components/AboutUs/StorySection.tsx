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
            Unsere Geschichte
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Von einem kleinen Jungen mit großen Träumen zu Deutschlands vertrauenswürdigstem Pyrotechnik-Team
          </p>
        </motion.div>

        {/* Founder Quote */}
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
            <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
              "{STORY_CONTENT.founder.quote}"
            </blockquote>
            <div className="text-yellow-400 font-semibold">
              — {STORY_CONTENT.founder.name}, {STORY_CONTENT.founder.title}
            </div>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="space-y-16">
          {/* Beginning */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Der Anfang einer Leidenschaft
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {STORY_CONTENT.story.beginning}
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
              <div className="text-6xl mb-4">👶</div>
              <p className="text-yellow-400 font-semibold">8 Jahre alt</p>
              <p className="text-gray-300">Das erste Feuerwerk</p>
            </div>
          </motion.div>

          {/* Turning Point */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30 order-2 md:order-1">
              <div className="text-6xl mb-4">💡</div>
              <p className="text-orange-400 font-semibold">Später</p>
              <p className="text-gray-300">Die Erkenntnis</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Die Erkenntnis
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {STORY_CONTENT.story.turningPoint}
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Unsere Philosophie
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {STORY_CONTENT.story.philosophy}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="text-6xl mb-4">💝</div>
              <p className="text-purple-400 font-semibold">Heute</p>
              <p className="text-gray-300">Menschen im Fokus</p>
            </div>
          </motion.div>

          {/* Memorable Moment */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 border border-yellow-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Ein unvergesslicher Moment
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {STORY_CONTENT.story.memorableMoment}
            </p>
          </motion.div>

          {/* Challenge & Growth */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/30 order-2 md:order-1">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-green-400 font-semibold">Der Wendepunkt</p>
              <p className="text-gray-300">Qualität vor Quantität</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Der Wendepunkt
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {STORY_CONTENT.story.challenge}
              </p>
            </div>
          </motion.div>

          {/* Favorite Work */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Was uns antreibt
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              {STORY_CONTENT.story.favorite}
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
