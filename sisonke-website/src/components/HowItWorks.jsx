import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const steps = [
  {
    id: 'discover',
    label: '1. Discover',
    summary: 'Spot grassroots innovators across South Africa.',
    visual: {
      ariaLabel: 'A map of South Africa highlighting emerging community projects.',
      gradient:
        'radial-gradient(circle at 20% 20%, rgba(253, 185, 112, 0.45) 0%, transparent 55%), radial-gradient(circle at 80% 40%, rgba(47, 127, 129, 0.6) 0%, transparent 50%), linear-gradient(135deg, #0F1C1E 0%, #1B3536 100%)',
    },
  },
  {
    id: 'purchase',
    label: '2. Purchase',
    summary: 'Channel funding into vetted suppliers that keep value local.',
    visual: {
      ariaLabel: 'A dashboard mock-up showing local supplier purchases trending upward.',
      gradient:
        'radial-gradient(circle at 25% 30%, rgba(206, 189, 173, 0.5) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(137, 59, 36, 0.55) 0%, transparent 50%), linear-gradient(135deg, #1F2F35 0%, #2B3F45 100%)',
    },
  },
  {
    id: 'support',
    label: '3. Support',
    summary: 'Report impact and keep stakeholders aligned with transparent metrics.',
    visual: {
      ariaLabel: 'A report preview featuring bold impact metrics and partner logos.',
      gradient:
        'radial-gradient(circle at 20% 60%, rgba(247, 214, 148, 0.45) 0%, transparent 55%), radial-gradient(circle at 75% 25%, rgba(47, 127, 129, 0.55) 0%, transparent 50%), linear-gradient(135deg, #233239 0%, #31484E 100%)',
    },
  },
]

/**
 * Presents the "How It Works" journey with interactive steps and animated visuals.
 * @returns {JSX.Element} Section explaining the three-step flow.
 */
function HowItWorks() {
  const [activeStepId, setActiveStepId] = useState(steps[0].id)
  const activeStep = steps.find((step) => step.id === activeStepId) ?? steps[0]

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-24">
      <div className="flex flex-col gap-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CEBDAD]">How it works</span>
        <h2 className="text-3xl font-semibold text-[#FFF9B0] sm:text-4xl">Three moves to unlock local impact</h2>
        <p className="max-w-xl text-base text-[#CEBDAD]">
          Follow the playbook: discover opportunities, fund responsibly, and support communities with transparent feedback.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {steps.map((step) => {
            const isActive = step.id === activeStepId
            return (
              <button
                key={step.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveStepId(step.id)}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-white/5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDB970]"
              >
                {isActive && (
                  <motion.span
                    layoutId="howItWorks-active-glow"
                    className="absolute inset-0 bg-white/5"
                    transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                  />
                )}
                <div className="relative z-10 px-5 py-4">
                  <span
                    className="block text-lg font-semibold"
                    style={{ color: isActive ? '#FDB970' : '#CEBDAD' }}
                  >
                    {step.label}
                  </span>
                  <p className="mt-1 text-sm text-[#CEBDAD]/80">{step.summary}</p>
                  <div className="relative mt-3 h-0.5 overflow-hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="howItWorks-underline"
                          className="absolute inset-y-0 left-0 h-full w-full bg-[#FDB970]"
                          initial={{ x: '-100%' }}
                          animate={{ x: '0%' }}
                          exit={{ x: '100%' }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.figure
            key={activeStep.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="relative flex w-full max-w-md flex-col gap-4 rounded-3xl border border-white/10 bg-[#1A282D] p-6 shadow-2xl shadow-black/30"
          >
            <motion.div
              role="img"
              aria-label={activeStep.visual.ariaLabel}
              className="h-56 w-full rounded-2xl border border-white/10 shadow-inner"
              style={{ backgroundImage: activeStep.visual.gradient, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <figcaption className="text-sm text-[#CEBDAD]">{activeStep.summary}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default HowItWorks
