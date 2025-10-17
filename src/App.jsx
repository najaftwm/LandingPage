import React from 'react'


import { HeroSection, Courses, Categories,FeedBack,HowItWorks,FAQ,MoveToTop,OurServices,WhyWeStandOut,Footer } from './components'



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
        <Footer/>
        <MoveToTop/>

    </div>
  )
}

export default App
