import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Township Retailers',
    description:
      'Digitised stock-in-trade finance and shared logistics bring down costs for spaza owners by up to 18% each quarter.',
  },
  {
    name: 'Impact Investors',
    description:
      'Structured deal rooms align returns with resilience metrics so blended finance unlocks high-trust community assets.',
  },
  {
    name: 'Civic Networks',
    description:
      'Neighbourhood forums tap consistent reporting, training, and grant tooling to scale programmes across provinces.',
  },
]

const Businesses = () => (
  <section className="relative bg-[#1F2B2E] py-20 sm:py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#66ADA7]">Built with partners</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#FFF9B0] sm:text-4xl">
          Align businesses, funders, and civic allies
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {partners.map((partner) => (
          <motion.article
            key={partner.name}
            className="flex flex-col gap-4 rounded-3xl border border-[#335155] bg-[#31484E] p-8 shadow-[0_10px_28px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <h3 className="text-2xl font-semibold text-[#FFF9B0]">{partner.name}</h3>
            <p className="text-sm leading-6 text-[#CEBDAD] sm:text-base">{partner.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Businesses
