import { useRef } from 'react'
import { motion as Motion, useScroll, useTransform } from 'framer-motion'

import Businesses from './components/Businesses'
import Features from './components/Features'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

function App() {
  const appRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: appRef,
    offset: ['start start', 'end end'],
  })

  const featureParallax = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <div ref={appRef} className="relative bg-[#31484E] text-white">
      <Motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#66ADA7]"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="flex flex-col gap-24 pb-24 pt-1 sm:gap-32">
        <Hero />
        <Motion.div
          aria-hidden
          className="relative"
          style={{ y: featureParallax }}
        >
          <Features />
        </Motion.div>
        <HowItWorks />
        <Businesses />
      </main>
    </div>
  )
}

export default App
