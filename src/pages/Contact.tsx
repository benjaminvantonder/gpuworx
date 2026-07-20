import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Package, Shield } from 'lucide-react'
import { siteConfig, shippingInfo, warrantyInfo } from '../data/content'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Get in Touch"
            description="Ready to get your GPU fixed? Contact us for a free diagnosis."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Phone</div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {siteConfig.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Business Hours</div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{siteConfig.hours}</div>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Location</div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{siteConfig.address}</div>
                </div>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Package size={18} style={{ color: 'var(--color-accent)' }} />
                  <h4 className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {shippingInfo.title}
                  </h4>
                </div>
                <ol className="space-y-2 mb-4">
                  {shippingInfo.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-medium shrink-0" style={{ color: 'var(--color-accent)' }}>{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{shippingInfo.note}</p>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ border: '1px solid var(--color-accent)', backgroundColor: 'var(--color-accent-light)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} style={{ color: 'var(--color-accent)' }} />
                  <h4 className="font-display font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {warrantyInfo.title} — {warrantyInfo.duration}
                  </h4>
                </div>
                <div className="mb-3">
                  <div className="text-xs font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Coverage:</div>
                  <ul className="space-y-1">
                    {warrantyInfo.coverage.map((item) => (
                      <li key={item} className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--color-accent)' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div
                className="rounded-xl overflow-hidden mb-6"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114716.35138506784!2d28.023705!3d-26.1715985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956b0e1b8e5c1b%3A0x16f3e2c5e5e5e5e5!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GPU WorX location"
                />
              </div>

              {submitted ? (
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ border: '1px solid var(--color-accent)', backgroundColor: 'var(--color-accent-light)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                  >
                    <Send size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message Sent
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                        style={{
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-primary)',
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                        style={{
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'var(--bg-elevated)',
                          color: 'var(--text-primary)',
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                      style={{
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-elevated)',
                        color: 'var(--text-primary)',
                      }}
                      placeholder="+27..."
                    />
                  </div>

                  <div>
                    <label htmlFor="gpu" className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      GPU Model
                    </label>
                    <input
                      type="text"
                      id="gpu"
                      name="gpu"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                      style={{
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-elevated)',
                        color: 'var(--text-primary)',
                      }}
                      placeholder="e.g. NVIDIA RTX 3080"
                    />
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Describe the Problem
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm transition-colors resize-none"
                      style={{
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-elevated)',
                        color: 'var(--text-primary)',
                      }}
                      placeholder="Tell us what is happening with your GPU..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
