import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PRICING_TIERS, PRICING_EXTRAS } from '../../utils/constants';
import PricingCard from './PricingCard';
import SectionTitle from '../shared/SectionTitle';
import PricingFireworks3D from './PricingFireworks3D';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section id="pricing" className="relative py-12 md:py-16 lg:py-20 px-4 bg-black overflow-hidden">
      {/* 3D Fireworks Background */}
      <PricingFireworks3D />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto pt-8">
          {PRICING_TIERS.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
            />
          ))}
        </div>

        {/* Extras Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              {t('pricing.extras.title')}
            </h3>
            <p className="text-text-secondary text-base md:text-lg">
              {t('pricing.extras.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {PRICING_EXTRAS.map((extra) => (
              <div
                key={extra.id}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-3 md:p-6 border border-white/10 hover:border-primary-yellow/50 transition-all duration-300 group cursor-pointer"
                onClick={() => navigate('/contact-us')}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {extra.icon}
                  </div>
                  <h4 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">
                    {extra.name}
                  </h4>
                  <p className="text-lg md:text-2xl font-bold text-primary-yellow mb-2 md:mb-3">
                    {extra.price}
                  </p>
                  <p className="text-text-secondary text-xs md:text-sm">
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
