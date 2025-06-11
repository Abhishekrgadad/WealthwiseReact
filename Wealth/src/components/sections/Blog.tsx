import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'SIP vs FD: Where Should You Park Your ₹10,000?',
      summary: 'Comprehensive comparison of Systematic Investment Plans vs Fixed Deposits for long-term wealth creation in India.',
      author: 'Rajesh Kumar',
      date: 'Dec 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Why Most People Buy the Wrong Insurance',
      summary: 'Common mistakes in insurance planning and how to choose the right coverage for your family\'s needs.',
      author: 'Priya Sharma',
      date: 'Dec 12, 2024',
      readTime: '7 min read'
    },
    {
      title: 'How We Select PMS Funds for Clients',
      summary: 'Our detailed process for evaluating and selecting Portfolio Management Services for high-net-worth individuals.',
      author: 'Amit Patel',
      date: 'Dec 10, 2024',
      readTime: '6 min read'
    },
    {
      title: 'Demystifying Mutual Fund Jargon',
      summary: 'Simple explanations of complex mutual fund terms every Indian investor should understand.',
      author: 'Neha Singh',
      date: 'Dec 8, 2024',
      readTime: '4 min read'
    },
    {
      title: 'Tax Planning Strategies for 2024-25',
      summary: 'Latest tax-saving investment options and strategies to maximize your after-tax returns.',
      author: 'Rajesh Kumar',
      date: 'Dec 5, 2024',
      readTime: '8 min read'
    },
    {
      title: 'Building Emergency Fund: A Step-by-Step Guide',
      summary: 'How to build and maintain an emergency fund that protects your wealth during uncertain times.',
      author: 'Priya Sharma',
      date: 'Dec 3, 2024',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Insights & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest insights on Indian markets, investment strategies, and financial planning tips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-8 cursor-pointer group transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="mr-2 font-medium">Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;