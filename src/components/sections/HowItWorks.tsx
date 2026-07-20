import { howItWorks } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          title="How It Works"
          description="A straightforward process from start to finish."
        />

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5"
            style={{ backgroundColor: 'var(--border-light)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold font-display relative z-10 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: i === 0 ? 'var(--color-accent)' : 'var(--bg-elevated)',
                    color: i === 0 ? '#ffffff' : 'var(--color-accent)',
                    border: i === 0 ? 'none' : '2px solid var(--color-accent)',
                  }}
                >
                  {item.step}
                </div>
                <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
