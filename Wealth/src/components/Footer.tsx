import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10  border-t border-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hide all except copyright on mobile */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold"
            >
              Angel Investments
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              Your trusted financial partner for long-term wealth creation and smart investment decisions.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              Quick Links
            </motion.h4>
            <div className="space-y-2">
              {['About Us', 'Services', 'Team', 'Blog', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              Services
            </motion.h4>
            <div className="space-y-2">
              {['Wealth Planning', 'Investment Advisory', 'Tax Planning', 'Insurance', 'Portfolio Management'].map((service, index) => (
                <motion.a
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              Contact Info
            </motion.h4>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <Phone size={16} />
                <span className="text-gray-300">+91 90352 54332</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3"
              >
                <Mail size={16} />
                <span className="text-gray-300">care@angelinvestments.co.in</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-3"
              >
                <MapPin size={16} className="mt-0.5" />
                <span className="text-gray-300">Basaveshwar Nagar Bengaluru, Karnataka - 560079</span>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 text-center text-gray-400 border-t border-black md:mt-12 md:border-t"
        >
          <p>&copy; 2025 Angel Investments. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;