import React from 'react'

import { HeroSection, Courses, Categories,FeedBack,HowItWorks,FAQ,MoveToTop,OurServices } from './components'


function App() {

  return (
    <div className="app">
        <HeroSection/>
        <OurServices/>
        {/* <Courses/> */}
        <Categories/>
        <FeedBack/>
        <HowItWorks/>
        <FAQ/>
        <MoveToTop/>
    </div>
  )
}

export default App
