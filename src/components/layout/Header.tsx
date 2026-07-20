import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/content'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
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

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: location.pathname === link.href ? 'var(--color-accent)' : 'var(--text-secondary)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            className="md:hidden pb-4 mt-2 pt-4"
            style={{ borderTop: '1px solid var(--border-light)' }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: location.pathname === link.href ? 'var(--color-accent)' : 'var(--text-secondary)',
                    backgroundColor: location.pathname === link.href ? 'var(--color-accent-light)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-3 pt-2">
                <ThemeToggle />
                <Button href="/contact" className="flex-1">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
