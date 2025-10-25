import React from 'react';
import { PROCESS_STEPS } from '../../utils/constants';
import ProcessStep from './ProcessStep';
import SectionTitle from '../shared/SectionTitle';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="So Einfach Geht's"
          subtitle="Von der ersten Idee bis zur spektakulären Show"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
