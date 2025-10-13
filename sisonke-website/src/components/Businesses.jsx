import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebaseClient.js'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const Businesses = () => {
  const [businesses, setBusinesses] = useState([])
  const [status, setStatus] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchBusinesses = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'businesses'))
        if (!isMounted) {
          return
        }

        const records = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setBusinesses(records)
        setStatus('success')
      } catch (error) {
        if (!isMounted) {
          return
        }

        setErrorMessage('We could not load the latest community businesses. Please try again shortly.')
        setStatus('error')
      }
    }

    fetchBusinesses()

    return () => {
      isMounted = false
    }
  }, [])

  const hasBusinesses = useMemo(() => businesses.length > 0, [businesses])

  return (
    <section className="relative bg-[#1F2B2E] py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#66ADA7]">Built with partners</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#FFF9B0] sm:text-4xl">
            Align businesses, funders, and civic allies
          </h2>
          <p className="mt-4 text-base text-[#CEBDAD]">
            Real businesses across Gauteng, KZN, and the Western Cape share traction data so township communities can prove
            their readiness for blended capital.
          </p>
        </header>

        {status === 'loading' && (
          <p aria-live="polite" role="status" className="text-sm text-[#CEBDAD]">
            Loading community businesses...
          </p>
        )}

        {status === 'error' && (
          <p aria-live="assertive" role="status" className="text-sm text-[#FFB4A2]">
            {errorMessage}
          </p>
        )}

        {status === 'success' && !hasBusinesses && (
          <p aria-live="polite" className="text-sm text-[#CEBDAD]">
            We&apos;re onboarding the first cohort of Sisonke businesses. Check back soon for their stories.
          </p>
        )}

        {status === 'success' && hasBusinesses && (
          <div className="relative">
            <div
              aria-label="Community businesses"
              className="flex gap-6 overflow-x-auto pb-6 pr-4" 
              role="list"
              tabIndex={0}
            >
              {businesses.map((business) => (
                <motion.div
                  key={business.id}
                  className="flex min-w-[280px] max-w-xs flex-col justify-between gap-4 rounded-3xl border border-[#603B26] bg-[#391B11] p-6 text-left shadow-[0_10px_28px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4D4A5] sm:min-w-[320px]"
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.4 }}
                  role="listitem"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4D4A5]">
                      {business.community ?? 'Community partner'}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{business.name}</h3>
                    {business.summary && <p className="text-sm leading-6 text-[#F9C784]">{business.summary}</p>}
                  </div>

                  <dl className="mt-4 flex flex-col gap-3 text-sm text-[#F8E1C7]">
                    {business.focusArea && (
                      <div>
                        <dt className="font-semibold text-white">Focus</dt>
                        <dd>{business.focusArea}</dd>
                      </div>
                    )}
                    {business.impact && (
                      <div>
                        <dt className="font-semibold text-white">Impact</dt>
                        <dd>{business.impact}</dd>
                      </div>
                    )}
                    {business.retention && (
                      <div>
                        <dt className="font-semibold text-white">Retention</dt>
                        <dd>{business.retention}</dd>
                      </div>
                    )}
                    {business.contact && (
                      <div>
                        <dt className="font-semibold text-white">Contact</dt>
                        <dd>{business.contact}</dd>
                      </div>
                    )}
                  </dl>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Businesses
