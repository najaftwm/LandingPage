import React from 'react';
import Logo from '../assets/logo.png';
import HeroImage from '../assets/hero.jpg';
import LoginPage from './LoginPage';

const HeroSection = () => {
  return (
    <section className="w-full bg-white relative">
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-12 z-10">
        <img src={Logo} alt="logo" className="h-12 md:h-48" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={HeroImage}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] md:max-w-[97%] mx-auto grid md:grid-cols-2 gap-6 md:gap-12 py-24 md:py-40">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-4 md:gap-6">
          <h2
            className="text-3xl md:text-6xl font-extrabold text-[#27b018] leading-snug md:leading-[4.5rem]"
          >
            <span className="block">Unlock Smart Investment</span>
            <span className="block">Decisions with Royalty Research Alerts</span>
          </h2>
          <h3 className="text-md md:text-2xl font-bold text-white">
            Expert Stock Market Services for Traders like You
          </h3>
          <p className="text-sm md:text-base text-white">
            Welcome to Royalty Research Alerts, your trusted partner in navigating the
            complexities of the stock market. We offer expert services designed to empower
            traders with informed decision-making capabilities. Our team of seasoned
            professionals provides cutting-edge solutions.
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-full mt-8 md:mt-0">
          <LoginPage embedded={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
