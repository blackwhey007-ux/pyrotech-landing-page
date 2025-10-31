import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import GoogleMap from './GoogleMap';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: Phone,
      title: 'Telefon',
      main: CONTACT_INFO.phone,
      sub: CONTACT_INFO.phoneHours,
      color: 'text-primary-red'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      main: CONTACT_INFO.whatsapp,
      sub: CONTACT_INFO.whatsappHours,
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      main: CONTACT_INFO.email,
      sub: CONTACT_INFO.emailHours,
      color: 'text-primary-yellow'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      main: CONTACT_INFO.address.company,
      sub: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}`,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          Fragen? Wir Sind Für Dich Da!
        </h3>
        <p className="text-text-secondary leading-relaxed">
          Unser erfahrenes Team steht Dir gerne zur Verfügung. 
          Kontaktiere uns für eine kostenlose Beratung oder 
          beantworte Deine Fragen rund um unsere Feuerwerk-Services.
        </p>
      </motion.div>

      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <IconComponent className={`w-6 h-6 ${item.color} group-hover:text-black transition-colors duration-300`} />
              </motion.div>
              
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1 group-hover:text-primary-yellow transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-primary-yellow font-medium text-lg mb-1">
                  {item.main}
                </p>
                <p className="text-text-secondary text-sm">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Google Map */}
      <GoogleMap />

      {/* Additional Info */}
      <motion.div
        className="mt-12 p-6 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-white font-semibold mb-3">
          Warum Pyrotech?
        </h4>
        <ul className="space-y-2 text-text-secondary text-sm">
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            Kostenlose Erstberatung
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            Individuelle Konzepte
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            Vollständige Genehmigungen
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            Professionelle Durchführung
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactInfo;

