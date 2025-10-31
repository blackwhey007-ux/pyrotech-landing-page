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
        { name: 'Preise', href: '/preise', isInternal: true },
        { name: 'Kontakt', href: '/contact-us', isInternal: true }
      ]
    },
    {
      title: 'Kontakt',
      links: [
        { name: 'Telefon', href: 'tel:+492119998877', icon: Phone },
        { name: 'E-Mail', href: 'mailto:pyrotechevent@gmx.de', icon: Mail },
        { name: 'WhatsApp', href: 'https://wa.me/491601203077', icon: MessageCircle }
      ]
    },
    {
      title: 'Folgen Sie Uns',
      links: [
        { name: 'Instagram', href: 'https://www.instagram.com/pyrotech.event/', icon: Instagram },
        { name: 'YouTube', href: 'https://www.youtube.com/@feuerwerk_event', icon: Youtube },
        { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576278232614', icon: Facebook }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12 max-w-2xl mx-auto md:max-w-4xl lg:grid-cols-3">
          {/* Mobile Sections + Desktop Columns */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className={`${sectionIndex === 2 ? 'col-span-2 md:col-span-1 flex flex-col items-center md:items-start' : 'flex flex-col items-center md:items-start'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">
                {section.title}
              </h3>
              <ul className={`${sectionIndex === 2 ? 'flex md:flex-col gap-4 md:gap-0 md:space-y-2' : 'space-y-2'}`}>
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
                            <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
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

        {/* Company Info - Mobile Only */}
        <motion.div
          className="md:hidden border-t border-white/10 pt-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/logo/Pyrotech-logo.jpg"
                alt="Pyrotech Event Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-text-secondary text-xs text-center">
                Die Feuerwerk-Experten
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-text-secondary text-xs text-center">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="break-words">Arcadiastr.24, 40472 Düsseldorf</span>
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
          {/* Desktop Bottom Bar - Logo + Links in one row */}
          <div className="hidden md:flex items-center justify-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo/Pyrotech-logo.jpg"
                alt="Pyrotech Event Logo"
                className="w-6 h-6 rounded-full object-cover group-hover:ring-2 group-hover:ring-yellow-400/50 transition-all duration-300"
              />
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Pyrotech Event
              </span>
            </Link>
            <span>•</span>
            <span>© 2025 Pyrotech Event</span>
            <span>•</span>
            <Link to="/impressum" className="hover:text-primary-yellow transition-colors duration-300">
              Impressum
            </Link>
            <span>•</span>
            <span>Arcadiastr.24, 40472 Düsseldorf</span>
          </div>

          {/* Mobile Bottom Bar - Same as before */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-2">
            <span>© 2025 Pyrotech Event</span>
            <span>•</span>
            <Link to="/impressum" className="hover:text-primary-yellow transition-colors duration-300">
              Impressum
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
