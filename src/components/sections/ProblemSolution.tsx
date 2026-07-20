import { problems } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function ProblemSolution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Is Your GPU Failing?"
          description="GPU problems show up in different ways. If you recognise these symptoms, it is time to get it looked at."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-elevated)',
                transform: i === 1 ? 'translate-y-4' : undefined,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${problem.image})`, backgroundColor: 'var(--bg-sunken)' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" size="lg">
            Get It Diagnosed
          </Button>
        </div>
      </div>
    </section>
  )
}
