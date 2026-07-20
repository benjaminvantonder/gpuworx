import { Link } from 'react-router-dom'
import { Mail, Phone, Clock, Shield } from 'lucide-react'
import { siteConfig, navLinks } from '../../data/content'

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <span className="font-display font-bold text-white text-sm">GX</span>
              </div>
              <span className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Professional GPU repairs with genuine parts, a 12-month warranty, and honest pricing.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h3>
            <div className="flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <Phone size={14} />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <Mail size={14} />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <Clock size={14} />
                {siteConfig.hours}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Warranty</h3>
            <div
              className="flex items-start gap-3 p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-accent-light)' }}
            >
              <Shield size={20} style={{ color: 'var(--color-accent)' }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>12-Month Warranty</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  On all repairs and parts. If the same issue recurs, we fix it free.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name} (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
