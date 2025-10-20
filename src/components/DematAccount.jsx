import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ManImage from '../assets/man.png';

const DematAccount = () => {
  const bulletPoints = [
    "Quick & Hassle-Free Setup",
    "Beginner-Friendly Guidance", 
    "Real-Time Research Support",
    "Zero Hidden Charges",
    "Dedicated WhatsApp & Call Assistance"
  ];

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
            <a href={`${import.meta.env.BASE_URL}app-tradenstocko.apk`} download>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#20B486] hover:bg-[#1a9068] text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm"
            >
              Open My Free Demat Account
            </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DematAccount;
