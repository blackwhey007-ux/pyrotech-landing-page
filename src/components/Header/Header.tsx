import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import HeaderBackground3D from './HeaderBackground3D';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Startseite' },
    { path: '/about-us', label: 'Über Uns' },
    { path: '/preise', label: 'Preise' },
    { path: '/contact-us', label: 'Kontakt' },
    { path: '/social-feeds', label: 'Social Media' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black overflow-hidden md:transition-all md:duration-300 ${
        isScrolled
          ? 'md:bg-black/80 md:backdrop-blur-lg shadow-lg border-b border-yellow-500/20'
          : 'md:bg-black/40 md:backdrop-blur-sm'
      }`}
    >
      {/* 3D Background Animation - Mobile Only */}
      <div className="md:hidden">
        <HeaderBackground3D />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Mobile Menu Button - Right Side */}
          <div className="flex-1 md:hidden" />

          {/* Logo - Centered on Mobile */}
          <Link to="/" className="flex items-center gap-2 md:space-x-3 group absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <div className="relative">
              <motion.img
                src="/images/logo/Pyrotech-logo.jpg"
                alt="Pyrotech Event Logo"
                className="h-9 w-9 md:h-12 md:w-12 rounded-full object-cover group-hover:ring-2 group-hover:ring-yellow-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
            <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
              Pyrotech Event
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${
                    isActive(item.path)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }
                `}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Right Side */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-lg z-50 md:hidden border-l border-yellow-500/20"
            >
              <div className="flex flex-col h-full pt-20 pb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      px-6 py-4 text-lg font-medium transition-all duration-300
                      ${
                        isActive(item.path)
                          ? 'text-yellow-400 bg-yellow-500/10 border-l-4 border-yellow-400'
                          : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

