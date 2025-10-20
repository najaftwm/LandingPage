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
  layers: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/layers.svg',
  graduationCap: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/graduation-cap.svg',
  users: 'https://cdn.jsdelivr.net/npm/lucide-static@0.452.0/icons/users.svg',
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
      className='bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center gap-3 shadow-sm max-w-xs w-full mx-auto hover:border-[#20B486]/30 hover:shadow-md transition-colors'
    >
      <div className='shrink-0 w-16 h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-[#27b018]/10 to-[#20B486]/10 text-[#20B486] flex items-center justify-center'>
        <img
          src={point.img}
          alt={point.alt}
          className='w-8 h-8 md:w-10 md:h-10 object-contain opacity-90'
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
    { text: 'Research + Trading + Account in one platform', img: ICONS.layers, alt: 'Platform icon' },
    { text: 'Beginner to Expert Guidance', img: ICONS.graduationCap, alt: 'Education icon' },
    { text: 'Real People. Real Support.', img: ICONS.users, alt: 'Support icon' },
    { text: 'Actionable Research Alerts – Clear buy/sell/hold signals', img: ICONS.signal, alt: 'Signal icon' },
    { text: 'Data-Driven Insights – Backed by in-depth analysis', img: ICONS.chart, alt: 'Chart icon' },
    { text: '24/7 Support – Guidance at every step', img: ICONS.headset, alt: 'Headset icon' },
    { text: 'Proven Track Record – Consistent results across India', img: ICONS.award, alt: 'Award icon' },
  ]

  return (
    <section className='w-full bg-white py-14 md:py-19 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section - Top Center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6'>
            Why <span className='text-[#20B486]'>We Stand Out</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-4xl mx-auto'>
            Because trading success isn't luck - it's strategy, support, and simplicity.
          </p>
        </motion.div>

        {/* Feature Grid - 3 columns responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {points.map((p, idx) => (
            <FeatureItem key={p.text} point={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWeStandOut