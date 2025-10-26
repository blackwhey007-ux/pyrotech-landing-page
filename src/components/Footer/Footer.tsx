import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Über Uns', href: '/about-us', isInternal: true },
        { name: 'Kontakt', href: '/contact-us', isInternal: true },
        { name: 'Bewertungen', href: '/reviews', isInternal: true },
        { name: 'Social Media', href: '/social-feeds', isInternal: true }
      ]
    },
    {
      title: 'Service',
      links: [
        { name: 'Telefon', href: 'tel:+492119998877', icon: Phone },
        { name: 'E-Mail', href: 'mailto:pyrotechevent@gmx.de', icon: Mail },
        { name: 'WhatsApp', href: 'https://wa.me/491601203077', icon: MessageCircle }
      ]
    },
    {
      title: 'Social Media',
      links: [
        { name: 'Instagram', href: 'https://www.instagram.com/pyrotech.event/', icon: Instagram },
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'YouTube', href: '#', icon: Youtube }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-sm md:text-lg mb-3 md:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-1.5 md:space-y-3">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = 'icon' in link ? link.icon : null;
                  const isInternal = 'isInternal' in link ? link.isInternal : false;
                  
                  const linkClassName = `
                    flex items-center gap-2 text-text-secondary hover:text-primary-yellow 
                    transition-colors duration-300 group
                    ${'highlight' in link && link.highlight ? 'font-semibold text-primary-yellow' : ''}
                  `;
                  
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeOut", 
                        delay: sectionIndex * 0.1 + linkIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      {isInternal ? (
                        <Link
                          to={link.href}
                          className={linkClassName}
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="text-xs md:text-sm">{link.name}</span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={linkClassName}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="text-xs md:text-sm">{link.name}</span>
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          className="border-t border-white/10 pt-6 md:pt-8 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/Pyrotech-logo.jpg"
                alt="Pyrotech Event Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  PYROTECH Event
                </h2>
                <p className="text-text-secondary text-xs md:text-sm">
                  Die Feuerwerk-Experten
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-text-secondary text-xs md:text-sm text-center md:text-left">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="break-words">Arcadiastraße, 40472 Düsseldorf Rath</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-center justify-center gap-3 text-text-secondary text-xs md:text-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span>© 2025 Pyrotech Event</span>
            <span className="hidden md:inline">•</span>
            <Link to="/impressum" className="hover:text-primary-yellow transition-colors duration-300">
              Impressum
            </Link>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Datenschutz
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Cookie-Einstellungen
            </a>
          </div>
          
          <div className="text-xs md:text-sm">
            Made with ❤️ in Deutschland
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
