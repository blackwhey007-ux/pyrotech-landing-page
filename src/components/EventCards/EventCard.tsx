import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EventCard as EventCardType } from '../../types';
import ParticleEffect from '../shared/ParticleEffect';

interface EventCardProps {
  event: EventCardType;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [triggerParticles, setTriggerParticles] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const translatedTitle = t(`events.${event.id}.title`);
  const translatedDescription = t(`events.${event.id}.description`);

  // Encode image URL to handle special characters and spaces
  const encodedImageUrl = React.useMemo(() => {
    if (!event.image || imageError) return '';
    
    // Split the path to handle URL encoding properly
    const parts = event.image.split('/');
    const encodedParts = parts.map(part => {
      if (part.includes('.')) {
        // This is the filename part - encode special characters
        return encodeURIComponent(part);
      }
      return part;
    });
    return encodedParts.join('/');
  }, [event.image, imageError]);

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

  const handleClick = () => {
    navigate('/contact-us');
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
      onClick={handleClick}
    >
      <motion.div
        className={`
          relative w-full aspect-square rounded-xl overflow-hidden
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
          <img
            src={encodedImageUrl}
            alt={translatedTitle}
            className="w-full h-full object-cover"
            style={{
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            }}
            onError={() => {
              console.warn('Failed to load image:', event.image);
              setImageError(true);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-end">
          <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
            {translatedTitle}
          </h3>
          <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
            {translatedDescription}
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
