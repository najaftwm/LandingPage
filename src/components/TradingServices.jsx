import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Target, BarChart3, PieChart } from "lucide-react";
import ChartImage from '../assets/chart.png';
import LoginPage from './LoginPage';

const TradingServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Optional: lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);
  return (
    <section className="py-16 bg-white" id="trading-services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="text-4xl font-bold mb-4"
          >
            <span className='text-4xl'>Trading Guidance for <span className='text-[#20B486]'>Every Skill Level</span></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="text-gray-600 text-lg max-w-4xl mx-auto"
          >
            Whether you're a beginner learning the basics or an active trader refining your strategy - our team helps you trade smarter, not riskier.
          </motion.p>
        </div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Panel - Chart Image and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6">
              <img 
                src={ChartImage} 
                alt="Trading Chart" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
    
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#20B486] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a9a73] transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsModalOpen(true)}
            >
              Talk to a Trading Expert
            </motion.button>
          </motion.div>

          {/* Right Panel - Three Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                title: "Personalized Strategy Support",
                description: "Get 1:1 guidance on when to enter and exit trades.",
                icon: Target
              },
              {
                title: "Market Insights",
                description: "Daily trade setups and technical analysis.",
                icon: BarChart3
              },
              {
                title: "Portfolio Review",
                description: "Balance your risk and returns with expert help.",
                icon: PieChart
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2, 
                  ease: "easeOut" 
                }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 hover:bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#20B486]/20 hover:border-b-4 hover:border-b-[#20B486]"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#20B486] bg-opacity-10 p-3 rounded-xl flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[#20B486]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-2xl"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with Close */}
              <div className="relative px-5 py-4 border-b">
                <button
                  aria-label="Close"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-gray-100 text-gray-800"
                >
                  {/* X icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Body: reuse LoginPage */}
              <div className="p-4 sm:p-6">
                <LoginPage embedded={true} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TradingServices;
