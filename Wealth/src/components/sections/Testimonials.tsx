import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "WealthWise helped me structure my investments properly. In 3 years, my portfolio has grown by 18% annually while reducing risk. They truly understand Indian markets.",
      author: "S.K.",
      location: "Mumbai",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "Finally found advisors who don't push products. They spent 2 hours understanding my goals before recommending anything. My retirement planning is now on track.",
      author: "P.M.",
      location: "Bangalore",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "Best decision was switching to WealthWise. They optimized my tax planning and insurance, saving me ₹2 lakhs annually. Professional and trustworthy team.",
      author: "R.G.",
      location: "Delhi",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      quote: "As a young professional, I was confused about investments. WealthWise created a simple SIP strategy that's already showing great results. Highly recommend!",
      author: "A.S.",
      location: "Pune",
      background: "bg-black",
      textColor: "text-white"
    }
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
                className={`absolute inset-0 ${testimonials[currentIndex].background} p-12 flex items-center justify-center border border-gray-600`}
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
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;