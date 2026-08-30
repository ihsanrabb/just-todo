// TEMPORARY STUB — ProgressDots does not exist on any branch yet (PRD blocker, option c). Delete this file once the real primitive lands and re-point TaskCard.tsx at it; do not extend, restyle, or treat this as final.
export type ProgressDotsProps = {
  value?: number
  target?: number
  showCount?: boolean
}

export function ProgressDots({
  value = 0,
  target = 0,
  showCount = false,
}: ProgressDotsProps) {
  const total = Math.max(target, 0)
  const filled = Math.min(Math.max(value, 0), total)
  const dots = Array.from({ length: total }, (_, i) => i < filled)

  return (
    <span
      role="img"
      aria-label={showCount ? `${value} of ${target}` : undefined}
      style={{ display: 'inline-flex', gap: '4px' }}
    >
      {dots.map((isFilled, i) => (
        <span
          key={`${i}-${isFilled}`}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: isFilled
              ? 'var(--color-primary)'
              : 'var(--color-border)',
          }}
        />
      ))}
    </span>
  )
}
