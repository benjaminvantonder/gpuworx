import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { stats } from '../../data/content'

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-2xl pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
            >
              South Africa's GPU Repair Specialists
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              GPU Repairs
              <br />
              You Can{' '}
              <span className="relative inline-block">
                <span style={{ color: 'var(--color-accent)' }}>Trust</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4"
                    stroke="var(--color-accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We diagnose and repair graphics cards. Genuine parts, professional work, and a 12-month warranty on every repair.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="/contact" size="lg">
                Get a Free Diagnosis
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Stats card - offset and rotated */}
            <div
              className="rounded-2xl p-8 relative"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-light)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      backgroundColor: i === 0 ? 'var(--color-accent-light)' : 'var(--bg-secondary)',
                    }}
                  >
                    <div
                      className="font-display text-3xl font-bold"
                      style={{ color: i === 0 ? 'var(--color-accent)' : 'var(--text-primary)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent shape */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl opacity-20 pointer-events-none"
              style={{ backgroundColor: 'var(--color-accent)', transform: 'rotate(12deg)' }}
            />
          </div>
        </div>
      </div>

      {/* Angled bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 0V80H0Z" style={{ fill: 'var(--bg-secondary)' }} />
        </svg>
      </div>
    </section>
  )
}
