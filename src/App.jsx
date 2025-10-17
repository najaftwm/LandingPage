import React from 'react'

import { HeroSection, Companies,Courses, Achievement,Categories,FeedBack,HowItWorks,FAQ,MoveToTop } from './components'


function App() {

  return (
    <div className="app">
        <HeroSection/>
        <OurServices/>
        <Courses/>
        <Categories/>
        <FeedBack/>
        <HowItWorks/>
        <FAQ/>
        <MoveToTop/>
    </div>
  )
}

export default App
