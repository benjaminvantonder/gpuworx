import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { services } from '../data/content'
import { Button } from '../components/ui/Button'
import { PriceRange } from '../components/ui/PriceRange'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowLeft size={14} />
            Back to Services
          </Link>

          <div className="flex items-start justify-between mb-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {service.title}
            </h1>
            <PriceRange range={service.priceRange} />
          </div>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            {service.description}
          </p>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <h2 className="font-display font-semibold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Common Symptoms
            </h2>
            <ul className="space-y-3">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <h2 className="font-display font-semibold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Our Process
            </h2>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div
            className="rounded-xl p-6 text-center"
            style={{ border: '1px solid var(--color-accent)', backgroundColor: 'var(--color-accent-light)' }}
          >
            <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
              Need this service?
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Contact us for a free diagnosis and a detailed quote.
            </p>
            <Button href="/contact" size="md">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
