// import React from 'react'; // Not needed in React 17+
import { PRICING_TIERS, PRICING_EXTRAS } from '../../utils/constants';
import PricingCard from './PricingCard';
import SectionTitle from '../shared/SectionTitle';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Unsere Feuerwerk-Pakete"
          subtitle="Transparent, fair und spektakulär"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
            />
          ))}
        </div>

        {/* Extras Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Zusätzliche Extras
            </h3>
            <p className="text-text-secondary text-lg">
              Verstärken Sie Ihr Feuerwerk mit unseren Spezialeffekten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {PRICING_EXTRAS.map((extra) => (
              <div
                key={extra.id}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-primary-yellow/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {extra.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {extra.name}
                  </h4>
                  <p className="text-2xl font-bold text-primary-yellow mb-3">
                    {extra.price}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {extra.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
