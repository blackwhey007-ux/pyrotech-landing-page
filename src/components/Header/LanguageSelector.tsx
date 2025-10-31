import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
        aria-label="Select Language"
      >
        <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="hidden md:inline text-sm font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        <span className="md:hidden text-lg">{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-full mt-2 bg-black/95 backdrop-blur-lg border border-yellow-500/20 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[150px]"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-yellow-500/10 transition-colors duration-200 ${
                    i18n.language === language.code
                      ? 'bg-yellow-500/20 text-yellow-400 font-semibold'
                      : 'text-gray-300'
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span className="text-sm">{language.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;

