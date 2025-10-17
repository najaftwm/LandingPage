import React, { useState } from "react";
import { motion } from "framer-motion";

import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import step4Img from "../assets/step4.jpg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Sign Up",
      description:
        "Register in minutes with your name, email, and number. Start your journey instantly with Royalty Research Alerts.",
      image: step1Img,
    },
    {
      id: 2,
      number: "02",
      title: "Complete KYC",
      description:
        "Upload your KYC documents and open a verified Demat account securely with our trusted partners.",
      image: step2Img,
    },
    {
      id: 3,
      number: "03",
      title: "Receive Research Alerts",
      description:
        "Start receiving SEBI-verified stock alerts curated by our research analysts — right in your dashboard.",
      image: step3Img,
    },
    {
      id: 4,
      number: "04",
      title: "Trade & Monitor Portfolio",
      description:
        "Act on research alerts, execute trades instantly, and track your portfolio's performance in real-time.",
      image: step4Img,
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-[#043344] text-white py-24 px-6">
      <div className="max-w-[1150px] mx-auto">
        {/* Top Progress Steps */}
        <div className="relative flex justify-between items-center mb-20 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1 flex flex-col items-center relative min-w-0">
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-[18px] left-[60%] w-[80%] h-[2px] ${
                    index + 1 < active ? "bg-white" : "bg-gray-500/40"
                  }`}
                />
              )}

              {/* Step Number */}
              <button
                onClick={() => setActive(step.id)}
                className={`text-2xl font-semibold ${
                  step.id === active ? "text-white" : "text-gray-400"
                }`}
              >
                {step.number}
              </button>

              {/* Step Title */}
              <p
                className={`text-sm mt-1 text-center ${
                  step.id === active ? "font-bold text-white" : "text-gray-400"
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Left Text */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {steps[active - 1].title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {steps[active - 1].description}
            </p>

            <ul className="space-y-3 mt-4 text-gray-300 text-sm">
              <li>✔ Simple onboarding</li>
              <li>✔ Secure account verification</li>
              <li>✔ Research-backed alerts</li>
              <li>✔ Track performance easily</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={steps[active - 1].image}
              alt={steps[active - 1].title}
              className="w-[90%] max-w-[450px] rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;