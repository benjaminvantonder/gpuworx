import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/content'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PriceRange } from '../components/ui/PriceRange'
import { Button } from '../components/ui/Button'

export function Services() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Services"
            description="Professional GPU repairs and maintenance. Every job includes a detailed diagnostic and a clear quote."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link to={`/services/${service.slug}`} key={service.slug}>
                <Card className="h-full group cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-semibold text-xl group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                        {service.title}
                      </h3>
                      <PriceRange range={service.priceRange} />
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.symptoms.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: 'var(--bg-sunken)', color: 'var(--text-muted)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium mt-auto"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      View details <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Not sure which service you need?</p>
            <Button href="/contact" size="lg">
              Get a Free Diagnosis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
