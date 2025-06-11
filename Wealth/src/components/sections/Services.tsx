import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, TrendingUp, Shield, Calculator, Target, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PiggyBank,
      title: 'Wealth Planning',
      description: 'Comprehensive financial planning to help you achieve your life goals with systematic wealth creation strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Expert guidance on mutual funds, stocks, bonds, and alternative investments tailored to your risk profile.'
    },
    {
      icon: Shield,
      title: 'Insurance Planning',
      description: 'Right-sized life and health insurance coverage to protect your family and wealth from unforeseen circumstances.'
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Strategic tax planning and investment structuring to maximize your after-tax returns legally and efficiently.'
    },
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description: 'Customized investment strategies for specific goals like home purchase, child education, and retirement.'
    },
    {
      icon: Building,
      title: 'Portfolio Management',
      description: 'Active monitoring and rebalancing of your investment portfolio to maintain optimal asset allocation.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial services designed to grow and protect your wealth at every stage of life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <service.icon size={32} className="text-white mr-4" />
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;