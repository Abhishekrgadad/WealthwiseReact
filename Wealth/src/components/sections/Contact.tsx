import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    investmentGoal: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', investmentGoal: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Wealth Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take control of your financial future? Let's have a conversation about your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you're just starting your investment journey or looking to optimize your existing portfolio, 
                we're here to help. Schedule a free consultation to discuss your financial goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">hello@wealthwise.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Office</p>
                  <p className="text-gray-300">
                    Business Bay, Lower Parel<br />
                    Mumbai, Maharashtra 400013
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">Office Hours</p>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="investmentGoal" className="block text-sm font-medium text-white mb-2">
                  Primary Investment Goal
                </label>
                <select
                  id="investmentGoal"
                  name="investmentGoal"
                  value={formData.investmentGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select your goal</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="child-education">Child's Education</option>
                  <option value="home-purchase">Home Purchase</option>
                  <option value="wealth-creation">Wealth Creation</option>
                  <option value="tax-saving">Tax Saving</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-4 px-6 font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Schedule Free Consultation</span>
              </motion.button>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-white text-black text-center"
                >
                  Thank you! We'll contact you within 24 hours to schedule your consultation.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;