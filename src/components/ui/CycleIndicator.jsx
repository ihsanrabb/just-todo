import './CycleIndicator.css'

export default function CycleIndicator({ current, total = 4, longBreak = false }) {
  const safeTotal = Math.max(1, Math.round(total))
  const safeCurrent = Math.min(Math.max(Math.round(current), 1), safeTotal)

  const cls = `cycle-indicator${longBreak ? ' cycle-indicator--long-break' : ''}`

  return (
    <div className={cls}>
      <div className="cycle-indicator__markers">
        {Array.from({ length: safeTotal }).map((_, i) => (
          <span
            key={i}
            className={`cycle-indicator__marker ${
              i < safeCurrent - 1
                ? 'cycle-indicator__marker--completed'
                : i === safeCurrent - 1
                  ? 'cycle-indicator__marker--current'
                  : 'cycle-indicator__marker--upcoming'
            }`}
          />
        ))}
      </div>
      <span className="cycle-indicator__caption">
        {longBreak ? 'Long break' : `Session ${safeCurrent} of ${safeTotal}`}
      </span>
    </div>
  )
}
