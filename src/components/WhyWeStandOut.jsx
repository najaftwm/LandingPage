import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const leftColVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const rightItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

// Icon URLs (SVG) served as <img> like your reference
const ICONS = {
  signal: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/signal.svg',
  // Some CDNs rename or block certain files; use a more reliable mirror for the chart icon
  chart: 'https://unpkg.com/lucide-static@0.452.0/icons/line-chart.svg',
  headset: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/headset.svg',
  award: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/award.svg',
}

const FeatureItem = ({ point, idx }) => {
  const itemRef = useRef(null)
  const inView = useInView(itemRef, { amount: 0.7 })
  const controls = useAnimation()

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [inView, controls])

  return (
    <motion.div
      ref={itemRef}
      initial='hidden'
      animate={controls}
      variants={rightItemVariants}
      transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
      className='bg-transparent p-0 flex flex-col items-center text-center gap-4'
    >
      <div className='shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#27b018]/10 to-[#20B486]/10 text-[#20B486] flex items-center justify-center'>
        <img
          src={point.img}
          alt={point.alt}
          className='w-10 h-10 md:w-14 md:h-14 object-contain opacity-90'
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = 'https://unpkg.com/lucide-static@0.452.0/icons/chart-no-axes-gantt.svg'
          }}
        />
      </div>
      <div className='flex-1'>
        <p className='text-sm md:text-base text-gray-800 leading-relaxed'>
          {point.text}
        </p>
      </div>
    </motion.div>
  )
}

const WhyWeStandOut = () => {
  // Existing content preserved – only the layout/visuals are changed
  const points = [
    { text: 'Actionable Research Alerts – Clear buy/sell/hold signals', img: ICONS.signal, alt: 'Signal icon' },
    { text: 'Data-Driven Insights – Backed by in-depth analysis', img: ICONS.chart, alt: 'Chart icon' },
    { text: '24/7 Support – Guidance at every step', img: ICONS.headset, alt: 'Headset icon' },
    { text: 'Proven Track Record – Consistent results across India', img: ICONS.award, alt: 'Award icon' },
  ]

  return (
    <section className='w-full bg-white py-14 md:py-19 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch'>
        {/* Left: badge + headline */}
        {(() => {
          const leftRef = useRef(null)
          const leftInView = useInView(leftRef, { amount: 0.7 })
          const leftControls = useAnimation()
          useEffect(() => {
            leftControls.start(leftInView ? 'visible' : 'hidden')
          }, [leftInView, leftControls])
          return (
            <motion.div
              ref={leftRef}
              initial='hidden'
              animate={leftControls}
              variants={leftColVariants}
              className='order-1 flex flex-col justify-center h-full items-center md:items-start text-center md:text-left'
            >
        
          <h2 className='text-5xl md:text-6xl font-extrabold leading-tight text-gray-900'>
            Why <span className='text-[#20B486]'>We Stand Out</span>
          </h2>
          <p className='mt-6 text-lg md:text-xl text-gray-600 max-w-2xl'>
            We combine research-driven insights with dedicated support to help you make confident decisions.
          </p>
            </motion.div>
          )
        })()}

        {/* Right: feature grid (icon + text, no cards) */}
        <div className='order-2 grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {points.map((p, idx) => (
            <FeatureItem key={p.text} point={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWeStandOut