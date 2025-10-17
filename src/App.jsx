import React from 'react'
import { HeroSection, Companies,Courses, Achievement,Categories,OurServices,FeedBack,HowItWorks,CTA,FAQ } from './components'

function App() {

  return (
    <div className="app">
        <HeroSection/>
        <OurServices/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
        <HowItWorks/>
        <FAQ/>
    </div>
  )
}

export default App
