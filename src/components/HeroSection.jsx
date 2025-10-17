import React from 'react'
import Logo from '../assets/logo.png'
import HeroImage from '../assets/hero.jpg'
import LoginPage from './LoginPage'

const HeroSection = () => {
  return (
    <section className='w-full bg-white pb-24 pl-2 md:pl-4 pr-4 pt-0 relative'>
            <img src={Logo} alt='logo' className='h-[64px] md:h-[130px] absolute top-0 left-12 z-10'/>
            {/* Hero Banner Image */}
            <div className='absolute inset-0 w-full h-full overflow-hidden'>
                <img 
                    src={HeroImage} 
                    alt='Hero Banner' 
                    className='w-full h-full object-cover'
                />
            </div>
        <div className='md:max-w-[97%] m-auto grid md:grid-cols-2 max-w-[80%] relative z-10'>
            <div className='flex flex-col justify-start gap-3 pt-[72px] md:pt-[170px]'>
                <h2 className='py-2 mb-5 text-4xl md:text-5xl text-[#27b018] font-extrabold'>
                    Unlock Smart Investment Decisions with Royalty Research Alerts
                </h2>
                <h3 className='mb-5 text-lg md:text-2xl text-[white] font-bold'> Expert Stock Market Services for Traders like You</h3>
                
                <p className='py-1 mb-5 text-sm md:text-base text-black'>
                    Welcome to Royalty Research Alerts, your trusted partner in navigating the <br />
                    complexities of the stock market. We offer a suite of expert services designed to <br />
                    empower traders with informed decision-making capabilities. Our team of seasoned <br />
                    professionals provides cutting-edge solutions.
                </p>
                {/* Search form removed as requested */}
            </div>
            <div className='w-full mt-6 md:mt-0 pt-20'>
                <LoginPage embedded={true} />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
