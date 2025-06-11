import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, TrendingUp, PieChart, Target } from 'lucide-react';

const ClientJourney = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Free Consultation',
      description: 'We start with a comprehensive discussion about your financial goals, current situation, and investment experience.',
      details: 'No obligations, no sales pitch - just an honest conversation about your financial future.'
    },
    {
      icon: FileText,
      title: 'Financial Health Check',
      description: 'Complete analysis of your existing investments, insurance, taxes, and financial gaps.',
      details: 'We review all your current financial products and identify areas for improvement.'
    },
    {
      icon: PieChart,
      title: 'Personalized Strategy',
      description: 'Custom investment strategy designed specifically for your goals, timeline, and risk tolerance.',
      details: 'Every recommendation is backed by thorough research and tailored to your unique situation.'
    },
    {
      icon: TrendingUp,
      title: 'Implementation',
      description: 'We help you implement the strategy with the right products and optimal asset allocation.',
      details: 'Seamless execution with complete transparency on costs, risks, and expected returns.'
    },
    {
      icon: Target,
      title: 'Ongoing Monitoring',
      description: 'Regular reviews, rebalancing, and adjustments to keep you on track towards your goals.',
      details: 'Quarterly reviews and proactive communication about market changes and opportunities.'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Here's How We Work With You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent, step-by-step process designed to build your wealth systematically and sustainably.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-16 bottom-16 w-0.5 bg-white"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex items-start space-x-8"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl z-10 relative">
                    {index + 1}
                  </div>
                  <div className="absolute inset-0 bg-black border-4 border-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-black p-8 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {step.details}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourney;