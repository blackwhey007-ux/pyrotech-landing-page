import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingTier } from '../../types';
import Button from '../shared/Button';
import FeaturedBadge from './FeaturedBadge';
import ParticleEffect from '../shared/ParticleEffect';
// Direct scroll implementation - no import needed

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, index }) => {
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

  return (
    <motion.div
      className="relative z-20"
      style={{ pointerEvents: 'auto' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        console.log('1️⃣ Motion div wrapper clicked');
      }}
    >
      {/* Featured Badge */}
      {tier.isFeatured && <FeaturedBadge />}
      
      <motion.div
        className={`
          relative bg-black/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-10
          border transition-all duration-400 h-full
          ${tier.isFeatured 
            ? 'border-primary-yellow scale-105' 
            : 'border-white/10'
          }
          ${isHovered ? 'shadow-2xl shadow-primary-red/50' : 'shadow-lg'}
        `}
        animate={{
          y: isHovered ? -8 : 0,
          scale: tier.isFeatured ? (isHovered ? 1.08 : 1.05) : (isHovered ? 1.02 : 1),
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {tier.name}
          </h3>
          <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            {tier.price}
          </div>
          <p className="text-text-secondary text-sm md:text-base">
            {tier.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {tier.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut", 
                delay: featureIndex * 0.1 
              }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-text-secondary text-xs md:text-sm">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className="mt-auto"
          onClick={() => {
            console.log('2️⃣ Button container clicked');
          }}
        >
          <Button
            id={`pricing-btn-${tier.id}`}
            data-scroll-target="contact"
            data-pricing-button="true"
            variant={tier.ctaVariant}
            size="md"
            className="w-full relative z-50"
            style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
            onClick={() => {
              console.log('🔥 BUTTON CLICKED!', tier.name);
              console.log('🎯 Attempting to scroll to contact...');
              
              // Direct scroll implementation
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                console.log('📍 Contact element found:', contactElement);
                contactElement.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
                console.log('✅ Scroll executed successfully');
              } else {
                console.error('❌ Contact element not found!');
              }
            }}
          >
            {tier.ctaText}
          </Button>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-primary-yellow/5 rounded-3xl opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Sparkle Effect */}
        <ParticleEffect
          config={{
            count: 15,
            speed: 80,
            lifespan: 1000,
            colors: ['#FFD700', '#FFA500', '#FFEB3B'],
            size: 2
          }}
          trigger={triggerParticles}
          onComplete={handleParticleComplete}
        />
      </motion.div>
    </motion.div>
  );
};

export default PricingCard;
