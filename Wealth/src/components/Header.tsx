import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Journey', href: '#journey' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
        scrolled ? 'bg-black shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            WealthWise
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Schedule Call Button - Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block bg-white text-black px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-sm xl:text-base"
          >
            Schedule a Free Call
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black border-t border-gray-800 py-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left px-4 py-3 mt-2px bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200 mx-4 rounded-full text-center"
            >
              Schedule a Free Call
            </motion.button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;