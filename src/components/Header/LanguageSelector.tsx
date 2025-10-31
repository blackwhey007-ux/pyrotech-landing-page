import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg bg-black/50 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
        <span className="text-lg md:text-2xl">{currentLanguage.flag}</span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="dropdown-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 left-0 w-32 md:w-36 bg-black/95 backdrop-blur-lg border border-yellow-500/20 rounded-lg overflow-hidden shadow-2xl z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  w-full flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 transition-all duration-200
                  ${
                    i18n.language === lang.code
                      ? 'bg-yellow-500/10 text-yellow-400'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400'
                  }
                `}
              >
                <span className="text-xl md:text-2xl">{lang.flag}</span>
                <span className="font-bold text-base md:text-lg">{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;

