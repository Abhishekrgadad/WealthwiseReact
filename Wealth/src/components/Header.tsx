import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
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
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins w-full overflow-x-hidden ${
        scrolled ? 'bg-black shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold text-white cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('#home')}
          >
            WealthWise
          </motion.div>

          {/* Desktop Navigation - Only visible on lg and up */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Schedule Call Button - Desktop only */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block bg-white text-black px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-sm xl:text-base whitespace-nowrap flex-shrink-0"
          >
            Schedule a Free Call
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;