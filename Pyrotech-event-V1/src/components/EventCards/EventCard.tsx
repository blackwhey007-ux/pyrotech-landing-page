import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard as EventCardType } from '../../types';
import ParticleEffect from '../shared/ParticleEffect';

interface EventCardProps {
  event: EventCardType;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [triggerParticles, setTriggerParticles] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTriggerParticles(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleParticleComplete = () => {
    setTriggerParticles(false);
  };

  const accentColor = event.accentColor === 'red' ? 'border-primary-red' : 'border-primary-yellow';
  const glowColor = event.accentColor === 'red' ? 'shadow-red-500/40' : 'shadow-yellow-500/40';

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`
          relative w-full max-w-sm h-80 rounded-2xl overflow-hidden
          border-2 border-transparent transition-all duration-400
          ${isHovered ? `${accentColor} ${glowColor}` : 'border-white/10'}
          ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        `}
        animate={{
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${event.image})`,
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            }}
            onError={(e) => {
              console.warn('Failed to load image:', event.image);
              // Fallback to gradient background
              (e.target as HTMLDivElement).style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
          <div className="text-4xl mb-3">{event.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {event.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary-red/20 to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Particle Effect */}
        <ParticleEffect
          config={{
            count: 25,
            speed: 100,
            lifespan: 800,
            colors: event.accentColor === 'red' 
              ? ['#DC143C', '#FF0000', '#FF6B6B'] 
              : ['#FFD700', '#FFA500', '#FFEB3B'],
            size: 3
          }}
          trigger={triggerParticles}
          onComplete={handleParticleComplete}
        />
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
