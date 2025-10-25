import React from 'react';
import Fireworks3D from './Fireworks3D';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-10 md:pt-12">
      {/* 3D Fireworks Background */}
      <Fireworks3D />
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
};

export default Hero;
