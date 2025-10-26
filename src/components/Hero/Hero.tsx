import React from 'react';
import Fireworks3D from './Fireworks3D';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-10 md:pt-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/background/pyrotech-background.png"
          alt="Pyrotech Event Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* 3D Fireworks Background (additional effect layer) */}
      <Fireworks3D />
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Additional Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
};

export default Hero;
