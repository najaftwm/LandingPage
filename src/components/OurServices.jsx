import React, { useState } from 'react'
import { Briefcase, TrendingUp, Coins, MoveDownRight, MoveUpLeft } from "lucide-react";
import { motion } from "framer-motion";

const OurServices = () => {
  const [expandedCard, setExpandedCard] = useState(null);
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
        <span>Our Core Services</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="text-gray-600 mb-12"
      >
        Explore our range of expert trading and investment solutions designed to grow your wealth.
      </motion.p>
  
      <div className="relative">
        {expandedCard !== null && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-white shadow-2xl rounded-2xl p-8 min-h-fit"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                {[
                  {
                    title: "Portfolio Management",
                    desc: "Professional management of your investments to balance risk and maximize returns.",
                    detailedInfo: "Building and maintaining a winning portfolio requires more than just picking stocks—it's about balance, diversification, and timely adjustments. Our Portfolio Management service takes the guesswork out of investing. We analyze your risk tolerance, financial objectives, and market trends to create a customized portfolio that grows with you.\n\nPersonalized Strategies: Tailored asset allocation based on your goals, whether it's aggressive growth or steady income.\nOngoing Monitoring: Regular reviews and rebalancing to adapt to market shifts.\nPerformance Tracking: Detailed reports and analytics to keep you informed every step of the way.\n\n"
                  },
                  {
                    title: "Demat Account Services",
                    desc: "Hassle-free setup and guidance to get you started in the stock market.",
                    detailedInfo: "Gone are the days of physical share certificates. Our Demat Account services make holding and trading securities effortless and secure. We partner with leading depositories to provide a hassle-free experience.\n\nQuick Setup: Open your Demat account in minutes with minimal paperwork.\nSecure Storage: Electronic holding of stocks, bonds, and mutual funds for easy access and safety.\nIntegrated Trading: Seamlessly link your Demat account to our trading platforms for instant transactions.\n\nStart your journey with a robust foundation—our Demat services ensure your assets are always protected and ready for action."
                  },
                  {
                    title: "Equity Trading",
                    desc: "Expert research and alerts to help you make informed buy/sell decisions.",
                    detailedInfo: "Dive into the heart of the stock market with our Equity Trading services. Whether you're buying blue-chip stocks or exploring emerging opportunities, we equip you with the tools for success.\n\nReal-Time Market Data: Access live quotes, charts, and news to make informed decisions.\nLow Brokerage Fees: Competitive rates that maximize your profits.\nExpert Recommendations: Daily tips and alerts from our research team to spot high-potential trades.\n\nEquity trading with us isn't just transactional—it's strategic, helping you capitalize on market movements with confidence."
                  },
                  {
                    title: "Positional Trading",
                    desc: "Medium-term strategies designed to capture strong market trends.",
                    detailedInfo: "For those who prefer a longer-term approach, Positional Trading is ideal. Hold positions for days, weeks, or months based on thorough analysis.\n\nTrend Analysis: Identify market trends using technical and fundamental indicators.\nRisk Management Tools: Stop-loss orders and position sizing to protect your capital.\nProfit Maximization: Strategies to ride trends and exit at peak performance.\n\nOur positional trading guidance turns market volatility into your advantage, fostering sustainable growth."
                  },
                  {
                    title: "Swing Trading",
                    desc: "Short-term opportunities with precise entry and exit points.",
                    detailedInfo: "Capture short-to-medium-term gains with Swing Trading. This dynamic strategy focuses on price swings within trends.\n\nMomentum Indicators: Use RSI, MACD, and moving averages to time entries and exits.\nDaily Alerts: Receive timely signals to act on profitable swings.\nEducational Resources: Webinars and tutorials to refine your swing trading skills.\n\nSwing trading at Royalty Research Alerts is about precision timing and quick wins, perfect for active traders."
                  },
                  {
                    title: "Commodity Trading",
                    desc: "Diversify your portfolio with gold, silver, crude oil, and more.",
                    detailedInfo: "Diversify beyond stocks with Commodity Trading. From gold and silver to oil and agricultural products, we help you trade commodities effectively.\n\nMarket Insights: In-depth reports on global supply-demand dynamics.\nHedging Strategies: Protect against price fluctuations in volatile markets.\nLeveraged Trading: Amplify your potential returns with careful leverage.\n\nUnlock new avenues for profit with our expert commodity trading support."
                  },
                  {
                    title: "Options & Futures",
                    desc: "Advanced derivatives strategies for traders seeking higher leverage and returns.",
                    detailedInfo: "Advanced traders thrive with Options and Futures. These derivatives offer high leverage and hedging opportunities.\n\nStrategy Building: From basic calls/puts to complex spreads and straddles.\nVolatility Analysis: Tools to gauge implied volatility and optimize trades.\nFutures Contracts: Trade indices, commodities, and currencies with precision.\n\nOur options and futures services provide the edge you need for sophisticated trading maneuvers."
                  },
                ][expandedCard].title}
              </h3>
              <div className="text-gray-700 text-base leading-relaxed mb-6">
                {(() => {
                  const services = [
                    {
                      title: "Portfolio Management",
                      desc: "Professional management of your investments to balance risk and maximize returns.",
                      detailedInfo: "Building and maintaining a winning portfolio requires more than just picking stocks—it's about balance, diversification, and timely adjustments. Our Portfolio Management service takes the guesswork out of investing. We analyze your risk tolerance, financial objectives, and market trends to create a customized portfolio that grows with you.\n\nPersonalized Strategies: Tailored asset allocation based on your goals, whether it's aggressive growth or steady income.\nOngoing Monitoring: Regular reviews and rebalancing to adapt to market shifts.\nPerformance Tracking: Detailed reports and analytics to keep you informed every step of the way.\n\nWith Royalty Research Alerts, your investments work smarter, not harder, ensuring optimal returns while minimizing risks."
                    },
                    {
                      title: "Demat Account Services",
                      desc: "Hassle-free setup and guidance to get you started in the stock market.",
                      detailedInfo: "Gone are the days of physical share certificates. Our Demat Account services make holding and trading securities effortless and secure. We partner with leading depositories to provide a hassle-free experience.\n\nQuick Setup: Open your Demat account in minutes with minimal paperwork.\nSecure Storage: Electronic holding of stocks, bonds, and mutual funds for easy access and safety.\nIntegrated Trading: Seamlessly link your Demat account to our trading platforms for instant transactions.\n\nStart your journey with a robust foundation—our Demat services ensure your assets are always protected and ready for action."
                    },
                    {
                      title: "Equity Trading",
                      desc: "Expert research and alerts to help you make informed buy/sell decisions.",
                      detailedInfo: "Dive into the heart of the stock market with our Equity Trading services. Whether you're buying blue-chip stocks or exploring emerging opportunities, we equip you with the tools for success.\n\nReal-Time Market Data: Access live quotes, charts, and news to make informed decisions.\nLow Brokerage Fees: Competitive rates that maximize your profits.\nExpert Recommendations: Daily tips and alerts from our research team to spot high-potential trades.\n\nEquity trading with us isn't just transactional—it's strategic, helping you capitalize on market movements with confidence."
                    },
                    {
                      title: "Positional Trading",
                      desc: "Medium-term strategies designed to capture strong market trends.",
                      detailedInfo: "For those who prefer a longer-term approach, Positional Trading is ideal. Hold positions for days, weeks, or months based on thorough analysis.\n\nTrend Analysis: Identify market trends using technical and fundamental indicators.\nRisk Management Tools: Stop-loss orders and position sizing to protect your capital.\nProfit Maximization: Strategies to ride trends and exit at peak performance.\n\nOur positional trading guidance turns market volatility into your advantage, fostering sustainable growth."
                    },
                    {
                      title: "Swing Trading",
                      desc: "Short-term opportunities with precise entry and exit points.",
                      detailedInfo: "Capture short-to-medium-term gains with Swing Trading. This dynamic strategy focuses on price swings within trends.\n\nMomentum Indicators: Use RSI, MACD, and moving averages to time entries and exits.\nDaily Alerts: Receive timely signals to act on profitable swings.\nEducational Resources: Webinars and tutorials to refine your swing trading skills.\n\nSwing trading at Royalty Research Alerts is about precision timing and quick wins, perfect for active traders."
                    },
                    {
                      title: "Commodity Trading",
                      desc: "Diversify your portfolio with gold, silver, crude oil, and more.",
                      detailedInfo: "Diversify beyond stocks with Commodity Trading. From gold and silver to oil and agricultural products, we help you trade commodities effectively.\n\nMarket Insights: In-depth reports on global supply-demand dynamics.\nHedging Strategies: Protect against price fluctuations in volatile markets.\nLeveraged Trading: Amplify your potential returns with careful leverage.\n\nUnlock new avenues for profit with our expert commodity trading support."
                    },
                    {
                      title: "Options & Futures",
                      desc: "Advanced derivatives strategies for traders seeking higher leverage and returns.",
                      detailedInfo: "Advanced traders thrive with Options and Futures. These derivatives offer high leverage and hedging opportunities.\n\nStrategy Building: From basic calls/puts to complex spreads and straddles.\nVolatility Analysis: Tools to gauge implied volatility and optimize trades.\nFutures Contracts: Trade indices, commodities, and currencies with precision.\n\nOur options and futures services provide the edge you need for sophisticated trading maneuvers."
                    },
                  ];
                  
                  const currentService = services[expandedCard];
                  const lines = currentService.detailedInfo.split('\n');
                  
                  // Find the index where bullet points start (first line with ':')
                  const bulletStartIndex = lines.findIndex(line => line.includes(':') && !line.startsWith(' '));
                  
                  // Find the index where concluding text starts (after double newline)
                  const conclusionStartIndex = lines.findIndex((line, index) => 
                    index > bulletStartIndex && line.trim() !== '' && 
                    !line.includes(':') && 
                    (line.includes('With Royalty Research Alerts') || 
                     line.includes('Start your journey') || 
                     line.includes('Equity trading with us') || 
                     line.includes('Our positional trading') || 
                     line.includes('Swing trading at Royalty') || 
                     line.includes('Unlock new avenues') || 
                     line.includes('Our options and futures'))
                  );
                  
                  const result = [];
                  
                  // Add introductory text
                  for (let i = 0; i < bulletStartIndex; i++) {
                    if (lines[i].trim() !== '') {
                      result.push(
                        <div key={`intro-${i}`} className="mb-3">
                          {lines[i]}
                        </div>
                      );
                    }
                  }
                  
                  // Add bullet points
                  for (let i = bulletStartIndex; i < (conclusionStartIndex !== -1 ? conclusionStartIndex : lines.length); i++) {
                    if (lines[i].includes(':') && !lines[i].startsWith(' ')) {
                      const [title, description] = lines[i].split(':');
                      result.push(
                        <div key={`bullet-${i}`}>
                          <span className="font-extrabold text-l" style={{color: 'black'}}>{title}:</span>
                          <span>{description}</span>
                        </div>
                      );
                    } else if (lines[i].trim() !== '') {
                      result.push(
                        <div key={`bullet-text-${i}`} className="mb-3">
                          {lines[i]}
                        </div>
                      );
                    }
                  }
                  
                  // Add concluding text after bullet points
                  if (conclusionStartIndex !== -1) {
                    for (let i = conclusionStartIndex; i < lines.length; i++) {
                      if (lines[i].trim() !== '') {
                        result.push(
                          <div key={`conclusion-${i}`} className="mb-3">
                            {lines[i]}
                          </div>
                        );
                      }
                    }
                  }
                  
                  return result;
                })()}
              </div>
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setExpandedCard(null)}
                  className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                >
                  <span className="mr-1">View less</span>
                  <MoveUpLeft className="w-4 h-4 mt-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${expandedCard !== null ? 'opacity-30' : ''}`}>
        {[
          {
            title: "Portfolio Management",
            desc: "Professional management of your investments to balance risk and maximize returns.",
            detailedInfo: "Building and maintaining a winning portfolio requires more than just picking stocks—it's about balance, diversification, and timely adjustments. Our Portfolio Management service takes the guesswork out of investing. We analyze your risk tolerance, financial objectives, and market trends to create a customized portfolio that grows with you.\n\nPersonalized Strategies: Tailored asset allocation based on your goals, whether it's aggressive growth or steady income.\nOngoing Monitoring: Regular reviews and rebalancing to adapt to market shifts.\nPerformance Tracking: Detailed reports and analytics to keep you informed every step of the way.\n\nWith Royalty Research Alerts, your investments work smarter, not harder, ensuring optimal returns while minimizing risks."
          },
          {
            title: "Demat Account Services",
            desc: "Hassle-free setup and guidance to get you started in the stock market.",
            detailedInfo: "Gone are the days of physical share certificates. Our Demat Account services make holding and trading securities effortless and secure. We partner with leading depositories to provide a hassle-free experience.\n\nQuick Setup: Open your Demat account in minutes with minimal paperwork.\nSecure Storage: Electronic holding of stocks, bonds, and mutual funds for easy access and safety.\nIntegrated Trading: Seamlessly link your Demat account to our trading platforms for instant transactions.\n\nStart your journey with a robust foundation—our Demat services ensure your assets are always protected and ready for action."
          },
          {
            title: "Equity Trading",
            desc: "Expert research and alerts to help you make informed buy/sell decisions.",
            detailedInfo: "Dive into the heart of the stock market with our Equity Trading services. Whether you're buying blue-chip stocks or exploring emerging opportunities, we equip you with the tools for success.\n\nReal-Time Market Data: Access live quotes, charts, and news to make informed decisions.\nLow Brokerage Fees: Competitive rates that maximize your profits.\nExpert Recommendations: Daily tips and alerts from our research team to spot high-potential trades.\n\nEquity trading with us isn't just transactional—it's strategic, helping you capitalize on market movements with confidence."
          },
          {
            title: "Positional Trading",
            desc: "Medium-term strategies designed to capture strong market trends.",
            detailedInfo: "For those who prefer a longer-term approach, Positional Trading is ideal. Hold positions for days, weeks, or months based on thorough analysis.\n\nTrend Analysis: Identify market trends using technical and fundamental indicators.\nRisk Management Tools: Stop-loss orders and position sizing to protect your capital.\nProfit Maximization: Strategies to ride trends and exit at peak performance.\n\nOur positional trading guidance turns market volatility into your advantage, fostering sustainable growth."
          },
          {
            title: "Swing Trading",
            desc: "Short-term opportunities with precise entry and exit points.",
            detailedInfo: "Capture short-to-medium-term gains with Swing Trading. This dynamic strategy focuses on price swings within trends.\n\nMomentum Indicators: Use RSI, MACD, and moving averages to time entries and exits.\nDaily Alerts: Receive timely signals to act on profitable swings.\nEducational Resources: Webinars and tutorials to refine your swing trading skills.\n\nSwing trading at Royalty Research Alerts is about precision timing and quick wins, perfect for active traders."
          },
          {
            title: "Commodity Trading",
            desc: "Diversify your portfolio with gold, silver, crude oil, and more.",
            detailedInfo: "Diversify beyond stocks with Commodity Trading. From gold and silver to oil and agricultural products, we help you trade commodities effectively.\n\nMarket Insights: In-depth reports on global supply-demand dynamics.\nHedging Strategies: Protect against price fluctuations in volatile markets.\nLeveraged Trading: Amplify your potential returns with careful leverage.\n\nUnlock new avenues for profit with our expert commodity trading support."
          },
          {
            title: "Options & Futures",
            desc: "Advanced derivatives strategies for traders seeking higher leverage and returns.",
            detailedInfo: "Advanced traders thrive with Options and Futures. These derivatives offer high leverage and hedging opportunities.\n\nStrategy Building: From basic calls/puts to complex spreads and straddles.\nVolatility Analysis: Tools to gauge implied volatility and optimize trades.\nFutures Contracts: Trade indices, commodities, and currencies with precision.\n\nOur options and futures services provide the edge you need for sophisticated trading maneuvers."
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
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
            <div className="flex items-center justify-end">
              <button
                onClick={() => setExpandedCard(i)}
                className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
              >
                <span className="mr-1">View more</span>
                <MoveDownRight className="w-4 h-4 mt-0.5" />
              </button>
          </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurServices