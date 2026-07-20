interface PriceRangeProps {
  range: string
}

export function PriceRange({ range }: PriceRangeProps) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-sm font-medium"
      style={{
        backgroundColor: 'var(--color-accent-light)',
        color: 'var(--color-accent)',
      }}
    >
      {range}
    </span>
  )
}
