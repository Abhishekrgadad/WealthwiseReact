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
                className={`absolute inset-0 ${testimonials[currentIndex].background} p-12 flex items-center justify-center border rounded-lg border-gray-500`}
              >
                <div className="text-center">
                  <Quote size={48} className={`mx-auto mb-8 ${testimonials[currentIndex].textColor}`} />
                  <blockquote className={`text-2xl lg:text-3xl font-light ${testimonials[currentIndex].textColor} mb-8 leading-relaxed max-w-3xl`}>
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className={`${testimonials[currentIndex].textColor}`}>
                    <p className="text-xl font-semibold mb-1">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-lg opacity-70">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;