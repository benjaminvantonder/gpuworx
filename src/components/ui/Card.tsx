import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 transition-colors duration-200',
        hover && 'hover:border-[var(--color-accent)]',
        className
      )}
      style={{
        borderColor: 'var(--border-light)',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      {children}
    </div>
  )
}
