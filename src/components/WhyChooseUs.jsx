import React from "react";
import {
  FaUserTie,
  FaChartLine,
  FaLightbulb,
  FaRegClock,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaUserTie size={24} />,
      title: "Trusted Expertise",
      description:
        "Decades of market experience and analytical depth help us deliver research-backed, confident recommendations.",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Comprehensive Services",
      description:
        "From portfolio management to derivatives, we provide complete trading and investment solutions under one roof.",
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Tailored Strategies",
      description:
        "Every investor is unique — our research is personalized to align with your financial goals and risk appetite.",
    },
    {
      icon: <FaRegClock size={24} />,
      title: "Real-Time Insights",
      description:
        "Stay updated with actionable alerts, data-driven insights, and timely market recommendations that matter.",
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Compliance & Transparency",
      description:
        "We operate under SEBI-registered advisory standards ensuring integrity, accuracy, and ethical research practices.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why <span className="text-[#20B486]">Choose Us</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Building trust through expertise, insight, and transparency — here’s why traders and investors choose us.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 text-left"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#20B486]/10 to-[#208486]/10 text-[#208486] flex items-center justify-center group-hover:from-[#20B486]/20 group-hover:to-[#208486]/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#20B486] to-[#208486] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
