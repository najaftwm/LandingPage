import React from 'react';
import Logo from '../assets/logo.png';
import HeroImage from '../assets/hero.jpg';
import LoginPage from './LoginPage';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full bg-white relative m-0 p-0">
      {/* SEBI Registration - Top */}
      {/* <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
        <p className="text-xs md:text-sm text-white/90 font-medium bg-black/30 px-3 py-2 rounded-lg backdrop-blur-sm">
          SEBI Registration Number - <span className="font-bold text-[#27b018]">INH000010821</span>
        </p>
      </div> */}
      
      {/* Logo */}
      {/* <div className="absolute top-4 left-3 md:top-0 md:left-8 z-10">
        <img src={Logo} alt="logo" className="h-12 md:h-48" />
      </div> */}

      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-[900px]">
        <img
          src={HeroImage}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] md:max-w-[97%] mx-auto grid md:grid-cols-2 gap-6 md:gap-12 pt-24 pb-24 md:pt-12 md:pb-40">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-4 md:gap-5 md:mt-20">
          <h2
            className="text-3xl md:text-6xl font-extrabold text-[#27b018] leading-snug md:leading-[4.5rem] mb-4"
          >
            <span className="block md:whitespace-nowrap ">Unlock Smart Trading</span>
            <span className="block">Decisions with Us</span>
          </h2>
          <h3 className="text-md md:text-2xl font-bold text-white mb-5">
          Get Expert Research Alerts, Personalized Trading Guidance & Easy Demat Account Setup-All in One Place
          </h3>
          <p className="text-sm md:text-base text-white">
          Welcome to RRA, your trusted partner for trading success. Whether you're a beginner opening your first Demat account or an active trader seeking expert research insights, we help you trade smarter, faster, and more confidently.
          Our team of SEBI-registered analysts and trading professionals delivers research-backed alerts, hands-on trading support, and complete Demat setup guidance — everything you need to start or scale your trading journey.
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div id="hero-register" className="w-full mt-8 md:mt-7 md:max-w-xl md:ml-auto">
          <p className="text-lg md:text-xl font-bold text-white mb-4 text-center md:text-left bg-gradient-to-r from-[#27b018] to-[#27b018] px-4 py-3 rounded-lg shadow-lg">
             Start your journey today — register for your free Demat account, trading support and stock alerts.
          </p>
          <LoginPage embedded={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
