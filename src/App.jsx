import React from 'react'

import { HeroSection, Courses, Categories,FeedBack,HowItWorks,FAQ,MoveToTop,OurServices,WhyWeStandOut } from './components'


function App() {

  return (
    <div className="app">
        <HeroSection/>
        <OurServices/>
        {/* <Courses/> */}
        <Categories/>
        <FeedBack/>
        <HowItWorks/>
        <WhyWeStandOut/>
        <FAQ/>
        <MoveToTop/>
    </div>
  )
}

export default App
