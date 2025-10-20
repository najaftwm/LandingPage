import React from 'react';
import { motion } from "framer-motion";
import dashboardImage from "../assets/dashboard.png"; // using existing image as dashboard placeholder

const ReseachAlert = () => {
  const cards = [
    {
      title: "Daily Stock Ideas",
      desc: "Expert picks for short-term and long-term trades.",
      icon: (
        // lightbulb icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M2 11a8 8 0 1 1 16 0c0 2.485-1.5 4.5-3 5.5-.5.333-1 .833-1 1.5v0H10v0c0-.667-.5-1.167-1-1.5-1.5-1-3-3.015-3-5.5z"/>
        </svg>
      ),
    },
    {
      title: "Buy/Sell Recommendations",
      desc: "Clear actionable alerts with entry and exit guidance.",
      icon: (
        // up/down arrows icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 3v14"/>
          <path d="M3 7l4-4 4 4"/>
          <path d="M17 21V7"/>
          <path d="M21 17l-4 4-4-4"/>
        </svg>
      ),
    },
    {
      title: "Market Analysis & Trends",
      desc: "Insights into trends, sectors, and opportunities.",
      icon: (
        // trending up chart icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18"/>
          <path d="M19 7l-6 6-4-4-5 5"/>
          <path d="M19 7h-5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white" id="research-alerts">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trade Smarter with <span className="text-[#20B486]">Expert Alerts</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Stay ahead in the market with timely, actionable research from our SEBI-certified analysts - curated for beginners and seasoned traders alike.
          </p>
        </motion.div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Image and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <img
                src={dashboardImage}
                alt="Dashboard preview"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center w-full sm:w-auto mx-auto bg-[#20B486] hover:bg-[#1a9068] text-white font-semibold py-4 px-6 rounded-lg shadow-lg"
              onClick={() => {
                const el = document.getElementById('hero-register');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Start Receiving Alerts Now
              
            </motion.button>
          </motion.div>

          {/* Right Panel - Horizontal Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="space-y-4"
          >
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 border rounded-xl p-5 gap-3 transition-all hover:shadow-md hover:border-b-4 hover:border-b-[#20B486]"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border flex items-center justify-center text-[#20B486]">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 mt-1">{card.desc}</p>
                </div>
                
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReseachAlert;


