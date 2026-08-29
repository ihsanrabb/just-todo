import type { ReactNode } from 'react'
import './TimerDisplay.css'

export type TimerDisplayProps = {
  remainingSeconds: number
  totalMinutes: number
  phase?: ReactNode
  task?: ReactNode
}

export function TimerDisplay({
  remainingSeconds,
  totalMinutes,
  phase = 'Focus',
  task,
}: TimerDisplayProps) {
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60
  const countdown = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const filled = Math.min(
    Math.max(totalMinutes - Math.floor(remainingSeconds / 60), 0),
    totalMinutes,
  )

  return (
    <div className="ui-timer-display">
      <span className="ui-timer-display__phase">{phase}</span>
      <span className="ui-timer-display__countdown">{countdown}</span>
      <div className="ui-timer-display__blocks">
        {Array.from({ length: totalMinutes }).map((_, i) => (
          <span
            key={i}
            className={`ui-timer-display__block${
              i < filled ? ' ui-timer-display__block--filled' : ''
            }`}
          />
        ))}
      </div>
      {task && <span className="ui-timer-display__task">{task}</span>}
    </div>
  )
}
