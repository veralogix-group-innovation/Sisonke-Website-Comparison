import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'

const featureCards = [
  {
    title: 'Faster Field Deployments',
    description:
      'Spin up community activations in hours, not days. Modular toolkits and pre-built messaging keep squads in sync from Cape Town to Limpopo.',
  },
  {
    title: 'Insight-Led Playbooks',
    description:
      'Live dashboards surface the next best action with neighbourhood-level data so every spend is defensible and traceable in ZAR.',
  },
  {
    title: 'Partnership Ready',
    description:
      'Plug into Veralogix partners with standard contracts, POPIA-safe data flows, and reporting your funders can trust.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const Features = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' })

  return (
    <section className="bg-[#1c1c1c] py-20 sm:py-24">
      <Motion.div
        ref={sectionRef}
        className="mx-auto max-w-6xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#CEBDAD] sm:text-4xl">
            Built for agile social impact teams
          </h2>
          <p className="mt-4 text-base text-[#8B9497] sm:text-lg">
            Sisonke wraps strategy, execution, and reporting into one stack so lean squads can prove
            outcomes before the next board call.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <Motion.article
              key={feature.title}
              variants={cardVariants}
              className="group rounded-3xl bg-[#391B11] p-8 shadow-[0_20px_45px_rgba(18,18,18,0.35)] transition-shadow transition-transform duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="rounded-2xl border border-transparent p-6 transition duration-300 group-hover:border-[#66ADA7] group-hover:shadow-[0_0_24px_rgba(102,173,167,0.45)]">
                <h3 className="text-2xl font-semibold text-[#CEBDAD]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C7B49A] sm:text-base">
                  {feature.description}
                </p>
              </div>
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}

export default Features
