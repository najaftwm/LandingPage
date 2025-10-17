import React from 'react'
import { HeroSection,Courses,Categories,OurServices,FeedBack,HowItWorks,FAQ } from './components'

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
    </div>
  )
}

export default App
