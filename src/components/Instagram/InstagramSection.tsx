import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import InstagramFeed from './InstagramFeed';
import Instagram3D from './Instagram3D';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';

const InstagramSection: React.FC = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/pyrotech.event/', '_blank');
  };

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* 3D Background */}
      <Instagram3D />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Folge Uns auf Instagram"
          subtitle="Entdecke unsere neuesten Shows und Behind-the-Scenes"
        />
        
        {/* Instagram Handle */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              @pyrotech.event
            </span>
          </div>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <InstagramFeed />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleInstagramClick}
            className="text-lg px-8 py-4"
          >
            Folge uns auf Instagram 📸
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
