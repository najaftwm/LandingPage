import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ManImage from '../assets/man.png';
import LoginPage from './LoginPage';

const DematAccount = () => {
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

  const bulletPoints = [
    "Quick & Hassle-Free Setup",
    "Beginner-Friendly Guidance", 
    "Real-Time Research Support",
    "Zero Hidden Charges",
    "Dedicated Support"
  ];

  const handleButtonClick = () => {
    // Download APK file
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}app-tradenstocko.apk`;
    link.download = 'app-tradenstocko.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Open modal
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white" id="demat-account">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Your</span> <span className="text-[#20B486]">First Step to Trading</span>
          </h2>
          
          {/* Sub Heading */}
        
         <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Open Your Free Demat Account with Tradenstocko - Your First Step Toward Smart & Profitable Trading
          </p>
        </motion.div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="space-y-6"
          >
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 hover:border-b-4 hover:border-[#20B486] transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#20B486] mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-lg">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* Right Panel - Image and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="text-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              className="mb-8"
            >
              <img
                src={ManImage}
                alt="Trading Professional"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
              className="bg-[#20B486] hover:bg-[#1a9068] text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm"
            >
              Open My Free Demat Account
            </motion.button>
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

export default DematAccount;
