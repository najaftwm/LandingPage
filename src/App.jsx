import React from 'react'
import { HeroSection, Companies,Courses, Achievement,Categories,FeedBack,HowItWorks,FAQ } from './components'

function App() {

  return (
    <div className="app">
        <HeroSection/>
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
