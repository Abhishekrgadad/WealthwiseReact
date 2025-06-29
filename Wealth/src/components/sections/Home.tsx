import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from '../../assets/Image.png';


const Home = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black flex flex-col items-center justify-start relative font-poppins pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="text-left">
        {/* Mobile/Tablet View */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block lg:hidden text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
        >
          Helping Ambitious <span className="mt-4 block"><span className="font-semibold">Indians</span> Grow Their</span>
          <span className="mt-4 block"> <span className="font-semibold">Wealth</span> Right way.</span>
        </motion.h1>

        {/* Desktop View */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block text-5xl text-white leading-tight mb-12"
        >
          Helping Ambitious<br />
          <span className="font-semibold">Indians</span>, Grow Their<br />
          <span className="font-semibold">Wealth</span>, The <span className="font-semibold">Right</span> Way.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
        >
            Managing Over <span className="font-semibold">₹300 Crore</span> in Assets
          <br />
          Trusted by hundreds of families and business owners.we help grow wealth the right way, with personalized strategies and long-term clarity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white mb-8 leading-relaxed max-w-2xl"
        >
          What you do with <span className="font-semibold">₹1 lakh</span> today decides your <span className="font-semibold">₹1 crore</span> tomorrow.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-400 transition-colors duration-300 rounded-full"
          onClick={() => window.location.href = '/schedule'}
        >
          Schedule a Free Wealth Call
        </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-96 h-96 flex items-center justify-center">
          <img
          src={Image}
          alt="Wealth Growth"
          className="absolute w-90 h-90 rounded-full object-cover"
          />
          <div className="absolute w-[410px] h-[410px] rounded-full border-2 border-white"></div>
          </div>
        </motion.div>
      </div>
      </div>
   
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToNext}
      >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;