import React from "react";
import { motion } from "framer-motion";
 import AbhiImg from "../../assets/Image.png";
import GiriImg from "../../assets/Giri.png";

const Team = () => {
 

  const teamMembers = [
    {
      name: "Abhilash N",
      role: "Founder & CEO",
      experience: "12+ years",
      image: AbhiImg,
    },
    {
      name: "Girish Kumar N",
      role: "Sales Head",
      experience: "7+ years",
      image: GiriImg,
    },
  ];

  const stats = [
    { number: "300Cr+", label: "AUM" },
    { number: "1000+", label: "HNI Clients" },
    { number: "300+", label: "Family Offices & UHNI" },
    { number: "12yrs", label: "Market Experience" },
  ];

  return (
    <section id="team" className="py-5 md:py-20 bg-black font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 mt-5">
            People First. Performance Follows.
          </h2>
        </motion.div>
        //Add section if required here on top.
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
          {/* Founder's Note */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              A Note from Our Founder
            </h3>
            <div className="text-lg text-gray-300 leading-relaxed space-y-2 font-serif italic">
              <p>
                "After working with hundreds of Indian families, I realized that
                most people don't need complex financial products—they need
                clarity, trust, and a long-term partner who truly understands
                their aspirations."
              </p>
              <p>
                "That's why we built Angel Investments. Not as another
                brokerage, but as a trusted financial partner committed to your
                success. Every recommendation we make is backed by thorough
                research and aligned with your unique goals."
              </p>
              <div className="pt-4">
                <p className="font-bold not-italic text-white">
                  - Abhilash N, Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-2"
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
                    className="w-24 h-24 rounded-full mx-auto  group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-">{member.role}</p>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-black  rounded-lg"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
