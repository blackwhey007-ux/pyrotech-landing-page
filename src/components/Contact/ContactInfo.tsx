import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Mail, MapPin, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import GoogleMap from './GoogleMap';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false);

  // Click handlers
  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('contact.whatsappMessagePrefix'));
    window.open(`https://wa.me/491601203077?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Anfrage%20Feuerwerk-Event`;
  };

  const contactItems = [
    {
      icon: Phone,
      title: t('contact.labels.telefon'),
      main: CONTACT_INFO.phone,
      sub: CONTACT_INFO.phoneHours,
      color: 'text-primary-red',
      actionType: 'phone',
      onClick: handlePhoneClick
    },
    {
      icon: MessageCircle,
      title: t('contact.labels.whatsapp'),
      main: CONTACT_INFO.whatsapp,
      sub: CONTACT_INFO.whatsappHours,
      color: 'text-green-400',
      actionType: 'whatsapp',
      onClick: handleWhatsAppClick
    },
    {
      icon: Mail,
      title: t('contact.labels.email'),
      main: CONTACT_INFO.email,
      sub: CONTACT_INFO.emailHours,
      color: 'text-primary-yellow',
      actionType: 'email',
      onClick: handleEmailClick
    },
    {
      icon: MapPin,
      title: t('contact.labels.adresse'),
      main: CONTACT_INFO.address.company,
      sub: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}`,
      color: 'text-blue-400',
      actionType: 'address',
      onClick: () => setShowMap(!showMap)
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
          {t('contact.titleSection')}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {t('contact.description')}
        </p>
      </motion.div>

      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          const isAddress = item.actionType === 'address';
          
          return (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              onClick={item.onClick}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className={`w-6 h-6 ${item.color} group-hover:text-black transition-colors duration-300`} />
              </motion.div>
              
              <div className="flex-1 flex items-center justify-between">
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
                {isAddress && (
                  <motion.div
                    animate={{ rotate: showMap ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-primary-yellow" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Google Map */}
      <GoogleMap isVisible={showMap} />

      {/* Additional Info */}
      <motion.div
        className="mt-12 p-6 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-white font-semibold mb-3">
          {t('contact.whyTitle')}
        </h4>
        <ul className="space-y-2 text-text-secondary text-sm">
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            {t('contact.why1')}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            {t('contact.why2')}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            {t('contact.why3')}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary-yellow">✓</span>
            {t('contact.why4')}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactInfo;

