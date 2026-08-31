import type { ReactNode } from 'react'
import './TaskCard.css'
import { ProgressDots } from '../ProgressDots'
import type { CategoryColor } from '../types'

export type TaskCardState = 'dragging' | 'focused' | 'pressed'

export type TaskCardProps = {
  title?: ReactNode
  description?: ReactNode
  category?: CategoryColor
  value?: number
  target?: number
  state?: TaskCardState
  onPlay?: () => void
  onActivate?: () => void
}

export default function TaskCard({
  title,
  description,
  category,
  value = 0,
  target = 0,
  state,
  onPlay,
  onActivate,
}: TaskCardProps) {
  const completed = value >= target
  const overTarget = value > target
  const partial = value > 0 && value < target
  const noCategory = !category

  const classes = [
    'task-card',
    partial ? 'task-card--partial' : '',
    completed ? 'task-card--completed' : '',
    overTarget ? 'task-card--over-target' : '',
    noCategory ? 'task-card--no-category' : '',
    state === 'dragging' ? 'task-card--dragging' : '',
    state === 'focused' ? 'task-card--focused' : '',
    state === 'pressed' ? 'task-card--pressed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const dotStyle = noCategory
    ? undefined
    : { background: `var(--color-cat-${category})` }

  return (
    <article className={classes}>
      <span className="task-card__handle" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="5" r="1" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="15" cy="5" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="15" cy="19" r="1" />
        </svg>
      </span>
      {onActivate ? (
        <button type="button" className="task-card__body" onClick={onActivate}>
          <div className="task-card__header">
            <span className="task-card__dot" style={dotStyle} />
            <h3 className="task-card__title">{title}</h3>
          </div>
          <p className="task-card__description">{description}</p>
          <div className="task-card__progress">
            <ProgressDots value={value} target={target} showCount />
            <span className="task-card__count">
              {value}/{target}
            </span>
          </div>
        </button>
      ) : (
        <div className="task-card__body">
          <div className="task-card__header">
            <span className="task-card__dot" style={dotStyle} />
            <h3 className="task-card__title">{title}</h3>
          </div>
          <p className="task-card__description">{description}</p>
          <div className="task-card__progress">
            <ProgressDots value={value} target={target} showCount />
            <span className="task-card__count">
              {value}/{target}
            </span>
          </div>
        </div>
      )}
      {onPlay ? (
        <button
          type="button"
          className="task-card__play"
          aria-label="Start focus session"
          onClick={onPlay}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>
      ) : null}
    </article>
  )
}

export function TaskCardDropSlot() {
  return <div className="task-card-drop-slot" aria-hidden="true" />
}
