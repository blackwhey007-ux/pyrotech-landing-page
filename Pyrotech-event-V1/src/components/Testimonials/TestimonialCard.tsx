import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`
        relative bg-black/80 backdrop-blur-lg rounded-2xl p-8 mx-4
        border border-white/10 transition-all duration-500
        ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}
      `}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isActive ? 1 : 0.6, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Profile Image */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mr-4">
          <span className="text-2xl font-bold text-black">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">
            {testimonial.name}
          </h4>
          <p className="text-text-secondary text-sm">
            {testimonial.event} • {testimonial.location}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span
            key={i}
            className="text-yellow-400 text-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-text-secondary leading-relaxed italic">
        "{testimonial.text}"
      </blockquote>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-primary-yellow/5 rounded-2xl opacity-0"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TestimonialCard;
