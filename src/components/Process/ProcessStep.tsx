import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ProcessStep as ProcessStepType } from '../../types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isLast }) => {
  const { t } = useTranslation();
  const translatedTitle = t(`process.steps.${step.id}.title`);
  const translatedDescription = t(`process.steps.${step.id}.description`);
  
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Step Number */}
      <motion.div
        className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 md:mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg md:text-2xl font-bold text-black">
          {step.number}
        </span>
      </motion.div>

      {/* Icon */}
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>

      {/* Content */}
      <div className="max-w-xs">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
          {translatedTitle}
        </h3>
        <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
          {translatedDescription}
        </p>
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <motion.div
          className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-red to-primary-yellow"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 + 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </motion.div>
  );
};

export default ProcessStep;
