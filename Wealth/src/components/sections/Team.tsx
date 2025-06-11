import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Investment',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Amit Patel',
      role: 'Senior Financial Advisor',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Neha Singh',
      role: 'Wealth Manager',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '₹50Cr+', label: 'Assets Under Advisory' },
    { number: '10+', label: 'Years of Experience' },
    { number: '95%', label: 'Client Retention' }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            People First. Performance Follows.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Founder's Note */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">A Note from Our Founder</h3>
            <div className="text-lg text-gray-300 leading-relaxed space-y-4 font-serif italic">
              <p>
                "After working with hundreds of Indian families, I realized that most people don't need complex financial products—they need clarity, trust, and a long-term partner who truly understands their aspirations."
              </p>
              <p>
                "That's why we built WealthWise. Not as another brokerage, but as a trusted financial partner committed to your success. Every recommendation we make is backed by thorough research and aligned with your unique goals."
              </p>
              <div className="pt-4">
                <p className="font-bold not-italic text-white">- Rajesh Kumar, Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black p-6 text-center group cursor-pointer rounded-lg transition-all duration-300"
              >
                <div className="mb-4 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-1">{member.role}</p>
                <p className="text-sm text-gray-400">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-black p-8 rounded-lg"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;