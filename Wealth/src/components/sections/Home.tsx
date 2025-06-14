import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from '../../assets/Image.png'; 


const Home = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#why-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left lg:text-left w-full flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6 text-center lg:text-left"
            >
              Helping Ambitious <span className="font-semibold mt-4 block">Indians</span>{' '}
              <span className="mt-4 block">Grow Their <span className="font-semibold">Wealth</span>,</span>
              <span className="mt-4 block">The <span className="font-semibold">Right</span> Way.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl text-center lg:text-left"
            >
              We are not brokers. We are your long-term financial partners committed to building 
              sustainable wealth through smart, personalized investment strategies.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-400 transition-colors duration-300 rounded-full mx-auto lg:mx-0"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule a Free Wealth Call
            </motion.button>
            {/* Mobile Image below content
            <div className="block lg:hidden mt-8 w-full flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <img
                  src={gif}
                  alt="Wealth Growth"
                  className="w-60 h-60 rounded-full object-cover"
                />
                <div className="absolute w-64 h-64 rounded-full border-2 border-white"></div>
              </div>
            </div> */}
          </div>

          {/* Right Image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center lg:order-2"
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