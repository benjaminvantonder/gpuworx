import { Shield, Clock, DollarSign } from 'lucide-react'
import { teamMembers } from '../data/content'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

const values = [
  {
    icon: <Shield size={24} />,
    title: 'Genuine Parts',
    description: 'We only use brand-new, authentic components. No recycled or counterfeit parts — ever.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Fast Turnaround',
    description: 'Most repairs completed within 48-72 hours. We know you need your hardware back.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Honest Pricing',
    description: 'Clear quotes before we start work. No hidden fees, no surprises.',
  },
]

export function About() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              title="About GPU WorX"
              description="We are a professional GPU repair service based in South Africa."
            />
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
              GPU WorX was started with one goal: to provide a graphics card repair service that people can rely on. We saw too many hardware issues being dismissed as unfixable, or repaired with substandard parts.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Our team has years of experience in component-level GPU repair. We use professional BGA rework equipment to perform repairs that most shops cannot handle — from memory chip replacements to core-level work.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Every repair uses genuine parts. Every job comes with a 12-month warranty. We provide honest assessments and will never recommend work that is not needed.
            </p>
          </div>

          <SectionHeading
            title="What We Stand For"
            description="The principles that guide every repair."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <SectionHeading
            title="Our Team"
            description="The people behind the repairs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundColor: 'var(--bg-sunken)',
                  }}
                />
                <h3 className="font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {member.name}
                </h3>
                <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-accent)' }}>
                  {member.role}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {member.experience}
                </div>
              </Card>
            ))}
          </div>

          <SectionHeading
            title="Our Workshop"
            description="A look at where the work happens."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/images/shop/workbench.jpg', '/images/shop/equipment.jpg', '/images/shop/interior.jpg'].map((img) => (
              <div
                key={img}
                className="rounded-xl h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundColor: 'var(--bg-sunken)',
                  border: '1px solid var(--border-light)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
