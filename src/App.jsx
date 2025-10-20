import React from 'react'
import { HeroSection, Courses, Categories,FeedBack,HowItWorks,FAQ,MoveToTop,OurServices,WhyWeStandOut,Footer,DematAccount,TradingServices,ReseachAlert, UrgencyStrip } from './components'

function App() {
  return (
    <div className="app">
      {/* Main Website Content */}
      <HeroSection/>
      <OurServices/>
      <ReseachAlert/>
      <DematAccount/>
      <TradingServices/>
      {/* <Courses/> */}
      <Categories/>
      <FeedBack/>
      {/* <HowItWorks/> */}
      <WhyWeStandOut/>
      <FAQ/>
      <Footer/>
      <MoveToTop/>
      <UrgencyStrip/>
    </div>
  )
}

export default App
