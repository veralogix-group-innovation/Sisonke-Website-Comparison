import { motion as Motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover community needs',
    description:
      'We map on-the-ground insights with partners across provinces to identify the highest-impact opportunities.',
  },
  {
    title: 'Activate rapid responses',
    description:
      'Cross-functional squads mobilise with toolkits, funding options, and rollout plans aligned to local context.',
  },
  {
    title: 'Report outcomes transparently',
    description:
      'Real-time dashboards quantify reach, spend, and resilience gains so funders see every rand at work.',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const HowItWorks = () => (
  <section className="relative bg-[#2A3A3F] py-20 sm:py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#66ADA7]">How it works</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#FFF9B0] sm:text-4xl">
          One platform from insight to measurable impact
        </h2>
      </header>

      <Motion.ol
        className="grid grid-cols-1 gap-10 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        {steps.map((step, index) => (
          <Motion.li
            key={step.title}
            className="flex flex-col gap-4 rounded-3xl border border-[#3F575C] bg-[#31484E] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            variants={item}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CEBDAD]">Step {index + 1}</span>
            <h3 className="text-2xl font-semibold text-[#FFF9B0]">{step.title}</h3>
            <p className="text-sm leading-6 text-[#CEBDAD] sm:text-base">{step.description}</p>
          </Motion.li>
        ))}
      </Motion.ol>
    </div>
  </section>
)

export default HowItWorks
