import { testimonials } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What Our Clients Say"
          description="Real feedback from people who have used our services."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-elevated)',
                transform: i === 1 ? 'rotate(1deg)' : i === 2 ? 'rotate(-1deg)' : undefined,
              }}
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-display font-bold leading-none mb-2"
                style={{ color: 'var(--color-accent)', opacity: 0.3 }}
              >
                &ldquo;
              </div>
              <p className="text-sm leading-relaxed flex-1 italic mb-6" style={{ color: 'var(--text-secondary)' }}>
                {testimonial.quote}
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                <div>
                  <div className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                    {testimonial.fix}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.turnaround}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
