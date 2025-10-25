import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../../utils/constants';
import TestimonialCard from './TestimonialCard';
import SectionTitle from '../shared/SectionTitle';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % TESTIMONIALS.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Das Sagen Unsere Kunden"
          subtitle="Echte Erfahrungen von zufriedenen Kunden"
        />
        
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[currentIndex]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? 'bg-gradient-primary scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                  }
                `}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
            onClick={() => goToSlide((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
            onClick={() => goToSlide((currentIndex + 1) % TESTIMONIALS.length)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
