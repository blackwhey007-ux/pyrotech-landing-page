import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANNOUNCEMENTS } from '../../utils/constants';

const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % ANNOUNCEMENTS.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleAnnouncementClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getAccentColor = (accentColor: string) => {
    switch (accentColor) {
      case 'gold':
        return 'text-yellow-400';
      case 'orange':
        return 'text-orange-400';
      default:
        return 'text-yellow-400';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black border-b border-yellow-500/20">
      <div className="relative h-10 md:h-12 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent animate-pulse" />
        
        {/* Announcement content */}
        <div 
          className="relative h-full flex items-center justify-center cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleAnnouncementClick(ANNOUNCEMENTS[currentIndex].link)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
              className="flex items-center justify-center text-center px-4"
            >
              <span className={`text-xs md:text-sm font-bold uppercase tracking-wide transition-all duration-300 group-hover:scale-105 ${getAccentColor(ANNOUNCEMENTS[currentIndex].accentColor)}`}>
                {ANNOUNCEMENTS[currentIndex].message}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
          {ANNOUNCEMENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-gray-500 hover:bg-gray-300'
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 5, 
              ease: "linear",
              repeat: Infinity 
            }}
            key={currentIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

