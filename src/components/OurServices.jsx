import React from 'react'
import { BellDot, TrendingUp, CreditCard, MoveDownRight } from "lucide-react";
import { motion } from "framer-motion";

const OurServices = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="services">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold mb-4"
      >
    <span className='text-4xl'>Our <span className='text-[#20B486]'>Core Offerings</span></span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="text-gray-600 mb-12"
      >
       Start your trading journey with trusted research, guided trading, and effortless Demat account setup - all in one place.
      </motion.p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Research Alerts",
            desc: "Get SEBI-certified stock alerts and trade recommendations directly from our analysts.",
            icon: BellDot,
            sectionId: "research-alerts"
          },
          {
            title: "Trading Services",
            desc: "Learn how to trade confidently with personalized portfolio guidance and live support.",
            icon: TrendingUp,
            sectionId: "trading-services"
          },
          {
            title: "Demat Account Setup",
            desc: "We make opening your Demat account easy, secure, and beginner-friendly — from KYC to activation.",
            icon: CreditCard,
            sectionId: "demat-account"
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1, 
              ease: "easeOut" 
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 relative"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#20B486] bg-opacity-10 p-3 rounded-xl mr-4">
                <service.icon className="w-6 h-6 text-[#20B486]" />
              </div>
              <h3 className="text-xl font-semibold text-[#20B486]">
              {service.title}
            </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
            <div className="flex items-center justify-end">
              <button 
                onClick={() => scrollToSection(service.sectionId)}
                className="flex items-center text-[#20B486] text-sm font-medium hover:text-[#20B486] hover:opacity-80 transition-colors"
              >
                <span className="mr-1">Know more</span>
                <MoveDownRight className="w-4 h-4 mt-0.5" />
              </button>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurServices