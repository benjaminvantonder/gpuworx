import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Straight answers to the questions we hear most."
        />

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                border: '1px solid var(--border-light)',
                backgroundColor: openIndex === i ? 'var(--color-accent-light)' : 'var(--bg-elevated)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-display font-semibold text-sm pr-4" style={{ color: 'var(--text-primary)' }}>
                  {item.question}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                  style={{
                    backgroundColor: openIndex === i ? 'var(--color-accent)' : 'var(--bg-sunken)',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                >
                  <ChevronDown size={16} style={{ color: openIndex === i ? '#ffffff' : 'var(--text-muted)' }} />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
