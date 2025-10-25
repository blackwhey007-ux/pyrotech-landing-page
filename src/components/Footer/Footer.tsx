import React from 'react';
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
      title: 'Veranstaltungen',
      links: [
        { name: 'Hochzeiten', href: '#' },
        { name: 'Firmenfeiern', href: '#' },
        { name: 'Festivals', href: '#' },
        { name: 'Geburtstage', href: '#' },
        { name: 'Silvester', href: '#' },
        { name: 'Alle Events →', href: '#', highlight: true }
      ]
    },
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über Uns', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Karriere', href: '#' },
        { name: 'Presse', href: '#' },
        { name: 'Partner', href: '#' }
      ]
    },
    {
      title: 'Service',
      links: [
        { name: 'FAQ', href: '#' },
        { name: 'Genehmigungen', href: '#' },
        { name: 'Sicherheit', href: '#' },
        { name: 'AGB', href: '#' },
        { name: 'Versicherung', href: '#' }
      ]
    },
    {
      title: 'Kontakt',
      links: [
        { name: 'Telefon', href: 'tel:+492119998877', icon: Phone },
        { name: 'E-Mail', href: 'mailto:info@pyrotech.de', icon: Mail },
        { name: 'WhatsApp', href: 'https://wa.me/4917612345678', icon: MessageCircle },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'YouTube', href: '#', icon: Youtube }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = 'icon' in link ? link.icon : null;
                  
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
                      <a
                        href={link.href}
                        className={`
                          flex items-center gap-2 text-text-secondary hover:text-primary-yellow 
                          transition-colors duration-300 group
                          ${'highlight' in link && link.highlight ? 'font-semibold text-primary-yellow' : ''}
                        `}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        <span>{link.name}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          className="border-t border-white/10 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">P</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  PYROTECH
                </h2>
                <p className="text-text-secondary text-sm">
                  Die Feuerwerk-Experten
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <MapPin className="w-4 h-4" />
              <span>Feuerwerk-Straße 15, 40213 Düsseldorf</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 Pyrotech GmbH</span>
            <span>•</span>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Impressum
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Datenschutz
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Cookie-Einstellungen
            </a>
          </div>
          
          <div className="text-xs">
            Made with ❤️ in Deutschland
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
