import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative shapes */}
      <div
        className="absolute top-8 right-12 w-16 h-16 rounded-2xl opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)', transform: 'rotate(45deg)' }}
      />
      <div
        className="absolute bottom-8 left-12 w-12 h-12 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
          style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
        >
          Ready?
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Get Your GPU Fixed
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Free diagnosis. Honest quote. 12-month warranty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Get a Free Diagnosis
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button href="tel:+27674859875" variant="secondary" size="lg">
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
