import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_BADGES } from '../../utils/constants';
import { 
  Shield, 
  ShieldCheck, 
  Award, 
  Trophy, 
  MapPin, 
  Headphones 
} from 'lucide-react';

const TrustBadges: React.FC = () => {
  const iconMap = {
    Shield,
    ShieldCheck,
    Award,
    Trophy,
    MapPin,
    Headphones
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, index) => {
            const IconComponent = iconMap[badge.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={badge.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-black" />
                </motion.div>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-primary-yellow transition-colors duration-300">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

