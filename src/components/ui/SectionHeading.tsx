interface SectionHeadingProps {
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {description && (
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
    </div>
  )
}
