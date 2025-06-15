import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I always thought wealth management was for the rich. But Angel Investments helped me turn my small profits into a long term plan. I feel confident for my family’s future now.",
      author: "Ravi Kumar",
      location: "Mysore",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "We were investing randomly stocks here, a policy there. The team at Angel Investments helped us clean up our portfolio and set real goals. Now we feel in control.",
      author: "Shruti & Aditya Deshmukh",
      location: "Pune",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "They didn’t sell me anything. They listened. They understood I wanted peace of mind, not risk. Today, my retirement income is steady and worry-free.",
      author: "Mahadevan Iyer",
      location: "Chennai",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "I used to follow tips on YouTube and Instagram made money, lost more. Angel taught me discipline, SIPs, and planning. I just wish I had started earlier.",
      author: "Nikhil V",
      location: "Bangalore",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "I was looking to move my savings back to India and didn’t know where to start. Their team made the process easy clear advice, zero confusion.",
      author: "Sana Rahman",
      location: "Dubai to Bangalore",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "I used to blindly invest in crypto and stocks from tips. Lost money. After following their Kannada finance videos, I understood SIP properly. My money is growing without stress now.",
      author: "Rohith B",
      location: "Hubli",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "Big banks just sell products. Angel’s team explained everything patiently in Kannada. They never pushed anything. Genuine guidance and proper service.",
      author: "Nagaraj Patil",
      location: "Belgavi",
      background: "bg-black",
      textColor: "text-white"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        What Our Clients Say
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Real feedback from real people who trusted us with their financial future.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 ${testimonials[currentIndex].background} bg-opacity-90 p-10 flex items-center justify-center border rounded-xl border-gray-400 shadow-2xl`}
            >
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
              <div className="flex flex-col items-center gap-2 mb-6">
                <Quote size={40} className={`mx-auto ${testimonials[currentIndex].textColor} opacity-80`} />
                <span className="block w-16 h-1 bg-white opacity-30 rounded-full"></span>
              </div>
              <blockquote className={`relative text-xl lg:text-2xl font-semibold italic ${testimonials[currentIndex].textColor} mb-6 leading-relaxed max-w-2xl mx-auto`}>
                <span className="text-3xl text-white opacity-60 align-top mr-2">“</span>
                {testimonials[currentIndex].quote}
                <span className="text-3xl text-white opacity-60 align-bottom ml-2">”</span>
              </blockquote>
              <div className="flex flex-col items-center mt-2">
                <p className={`text-base font-bold ${testimonials[currentIndex].textColor}`}>{testimonials[currentIndex].author}</p>
                <p className={`text-xs opacity-70 ${testimonials[currentIndex].textColor}`}>{testimonials[currentIndex].location}</p>
              </div>
              </div>
            </motion.div>
        </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;