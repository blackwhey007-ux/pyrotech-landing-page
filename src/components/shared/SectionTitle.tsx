import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.h2
        className={`text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent ${titleClassName}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl text-text-secondary max-w-2xl mx-auto ${subtitleClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;

