import './WakeLockPill.css'

export type WakeLockPillProps = {
  label?: string
}

export function WakeLockPill({
  label = 'Screen staying on',
}: WakeLockPillProps) {
  return (
    <div className="wake-lock-pill">
      <span className="wake-lock-pill-dot" aria-hidden="true" />
      <span className="wake-lock-pill-label">{label}</span>
    </div>
  )
}
