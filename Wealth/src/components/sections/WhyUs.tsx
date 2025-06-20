import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Eye, Award } from 'lucide-react';

const WhyUs = () => {
  const values = [
    {
      icon: Check,
      title: 'Zero Pressure, 100% Clarity',
      description: 'No sales tactics, just honest advice tailored to your financial goals and risk appetite.'
    },
    {
      icon: Users,
      title: 'Real RMs, Not Robots',
      description: 'Work with experienced relationship managers who understand Indian market dynamics.'
    },
    {
      icon: Eye,
      title: '360° Wealth View',
      description: 'Comprehensive portfolio analysis across all your investments, insurance, and savings.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over 10 years of helping clients achieve their financial milestones with consistent results.'
    }
  ];

  return (
    <section id="why-us" className="py-10 md:py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            We Don't Sell. We Solve.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your success is our success. We're here to build long-term relationships, not quick transactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 sm:p-8 text-center group cursor-pointer rounded-lg transition-all duration-200 w-full"
            >
              <div className="mb-4 sm:mb-6">
              <value.icon size={36} className="mx-auto text-black sm:size-[48px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              {value.title}
              </h3>
              <p className="text-black leading-relaxed text-sm sm:text-base">
              {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;