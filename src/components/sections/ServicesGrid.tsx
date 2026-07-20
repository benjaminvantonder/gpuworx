import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { PriceRange } from '../ui/PriceRange'

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Services"
          description="Professional GPU repairs and maintenance. Every job includes a detailed diagnostic and a clear quote."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link to={`/services/${service.slug}`} key={service.slug}>
              <div
                className="group h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  border: '1px solid var(--border-light)',
                  backgroundColor: i % 3 === 0 ? 'var(--color-accent-light)' : 'var(--bg-elevated)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg group-hover:opacity-70 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <PriceRange range={service.priceRange} />
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {service.shortDesc}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
