import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappFloating = () => (
  <a
    href="https://wa.me/919035254332"
    target="Whatsapp"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
    aria-label="Chat on WhatsApp"
    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
  >
    <FaWhatsapp size={32} />
  </a>
);

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    investmentGoal: ''
    , invest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    investmentGoal: '',
    invest: ''
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', phone: '', email: '', investmentGoal: '', invest: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
      valid = false;
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number (numbers only, 10-15 digits).';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }
    if (!formData.investmentGoal) {
      newErrors.investmentGoal = 'Please select your investment goal.';
      valid = false;
    }
    if (!formData.invest.trim()) {
      newErrors.invest = 'Investment amount is required.';
      valid = false;
    } else if (isNaN(Number(formData.invest)) || Number(formData.invest) < 1000) {
      newErrors.invest = 'Enter an investment amount of at least 1000 INR.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', investmentGoal: '', invest: '' });
    setErrors({ name: '', phone: '', email: '', investmentGoal: '', invest: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-black font-poppins min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-gray-900 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Info Text */}
        <div className="flex flex-col justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-4">Book Your Free Wealth Consultation</h2>
          <p className="text-lg text-gray-300 mb-6">Let's discuss your financial goals and create a personalized plan for your future. No obligations, just honest advice from our experts.</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 text-base">
            <li>100% confidential and pressure-free</li>
            <li>Expert guidance on investments, tax, and insurance</li>
            <li>Actionable steps for your unique situation</li>
          </ul>
        </div>
        {/* Right Side: The Form */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Schedule Your Free Consultation</h3>
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
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                placeholder="98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                required
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
              {errors.investmentGoal && <p className="text-red-500 text-sm mt-1">{errors.investmentGoal}</p>}
            </div>
            <div>
              <label htmlFor="invest" className="block text-sm font-medium text-white mb-2">
                How much do you want to Invest? *
              </label>
              <input
                type="number"
                id="invest"
                name="invest"
                value={formData.invest}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none transition-colors duration-300"
                placeholder="Enter amount in INR"
              />
              {errors.invest && <p className="text-red-500 text-sm mt-1">{errors.invest}</p>}
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
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-white text-black text-center rounded"
              >
                Thank you! We'll contact you within 24 hours to schedule your consultation.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScheduleForm;
