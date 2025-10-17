import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, SignalHigh, Headset, Award } from 'lucide-react'

const leftCardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const rightCardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const imageVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const WhyWeStandOut = () => {
  const points = [
    { text: 'Actionable Research Alerts – Clear buy/sell/hold signals', side: 'left', icon: SignalHigh },
    { text: 'Data-Driven Insights – Backed by in-depth analysis', side: 'left', icon: LineChart },
    { text: '24/7 Support – Guidance at every step', side: 'right', icon: Headset },
    { text: 'Proven Track Record – Consistent results across India', side: 'right', icon: Award },
  ]

  return (
    <section className='w-full bg-white py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-center text-4xl md:text-4xl font-extrabold mb-10'>
          <span className='text-gray-900'>Why</span> <span className='text-[#20B486]'>We Stand Out</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
          {/* Left column cards */}
          <div className='flex flex-col gap-6 order-2 md:order-1'>
            {points
              .filter(p => p.side === 'left')
              .map((p, idx) => (
                <motion.div
                  key={p.text}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.3 }}
                  variants={leftCardVariants}
                  transition={{ delay: idx * 0.1 }}
                  className='bg-[#f8f8f4] border border-gray-200 rounded-2xl p-8 shadow-md min-h-[132px] flex items-start gap-4'
                >
                  <div className='p-3 rounded-xl bg-gradient-to-br from-[#27b018]/10 to-[#20B486]/10 text-[#20B486] flex items-center justify-center'>
                    <p.icon className='w-6 h-6' />
                  </div>
                  <p className='text-base md:text-lg text-gray-800'>{p.text}</p>
                </motion.div>
              ))}
          </div>

          {/* Center image */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
            variants={imageVariants}
            className='order-1 md:order-2 flex justify-center'
          >
            {/* Center image – served from public/ */}
            <img src='/man.webp' alt='Investor' className='w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-lg' />
          </motion.div>

          {/* Right column cards */}
          <div className='flex flex-col gap-6 order-3'>
            {points
              .filter(p => p.side === 'right')
              .map((p, idx) => (
                <motion.div
                  key={p.text}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.3 }}
                  variants={rightCardVariants}
                  transition={{ delay: idx * 0.1 }}
                  className='bg-[#f8f8f4] border border-gray-200 rounded-2xl p-8 shadow-md min-h-[132px] flex items-start gap-4'
                >
                  <div className='p-3 rounded-xl bg-gradient-to-br from-[#27b018]/10 to-[#20B486]/10 text-[#20B486] flex items-center justify-center'>
                    <p.icon className='w-6 h-6' />
                  </div>
                  <p className='text-base md:text-lg text-gray-800'>{p.text}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeStandOut