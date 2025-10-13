import { motion } from 'framer-motion'

const title = 'Sisonke: We Are Together'

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const letterVariant = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
}

const subheadlineVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const gradientKeyframes = [
  'radial-gradient(circle at 20% 20%, #B5725B 0%, transparent 55%), radial-gradient(circle at 80% 30%, #FDB970 0%, transparent 50%), radial-gradient(circle at 50% 80%, #2F7F81 0%, transparent 45%)',
  'radial-gradient(circle at 70% 20%, #893B24 0%, transparent 55%), radial-gradient(circle at 15% 40%, #FBAF5D 0%, transparent 50%), radial-gradient(circle at 45% 75%, #E3C7A5 0%, transparent 45%)',
  'radial-gradient(circle at 30% 30%, #FFD447 0%, transparent 55%), radial-gradient(circle at 75% 55%, #2F7F81 0%, transparent 50%), radial-gradient(circle at 55% 80%, #CEBDAD 0%, transparent 45%)',
]

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionH1 = motion.h1
const MotionSpan = motion.span
const MotionP = motion.p
const MotionButton = motion.button

function Hero() {
  return (
    <MotionSection
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#31484E] px-6 py-24 sm:px-10 md:py-32"
    >
      <MotionDiv
        className="pointer-events-none absolute inset-0 opacity-70"
        initial={{ background: gradientKeyframes[0] }}
        animate={{ background: gradientKeyframes }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror' }}
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <MotionH1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold leading-tight text-[#FFF9B0] sm:text-5xl md:text-6xl"
        >
          {title.split('').map((character, index) => (
            <MotionSpan
              key={`${character}-${index}`}
              variants={letterVariant}
              className="inline-block"
            >
              {character === ' ' ? '\u00A0' : character}
            </MotionSpan>
          ))}
        </MotionH1>

        <MotionP
          variants={subheadlineVariant}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg text-[#CEBDAD] sm:text-xl"
        >
          We connect South Africa&apos;s changemakers with the knowledge, capital, and community to build a more inclusive future.
        </MotionP>

        <MotionButton
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px #FDB970' }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#893B24] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#893B24]/40 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDB970] sm:text-lg"
        >
          Join the Movement
        </MotionButton>
      </div>
    </MotionSection>
  )
}

export default Hero
