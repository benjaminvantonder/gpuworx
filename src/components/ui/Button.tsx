import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const base = 'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-200 cursor-pointer'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ children, variant = 'primary', size = 'md', href, onClick, className, type = 'button' }: ButtonProps) {
  const variantClasses = cn(
    base,
    sizes[size],
    variant === 'secondary' && 'border-2',
    variant === 'ghost' && 'hover:opacity-80',
    className
  )

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#ffffff',
    },
    secondary: {
      borderColor: 'var(--color-accent)',
      color: 'var(--color-accent)',
      backgroundColor: 'transparent',
    },
    ghost: {
      color: 'var(--text-secondary)',
      backgroundColor: 'transparent',
    },
  }

  const style = variantStyles[variant]

  if (href) {
    return (
      <a href={href} className={variantClasses} style={style}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={variantClasses} style={style}>
      {children}
    </button>
  )
}
