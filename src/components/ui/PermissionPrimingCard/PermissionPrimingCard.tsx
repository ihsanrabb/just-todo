import type { ReactNode } from 'react'
import './PermissionPrimingCard.css'
import { Button } from '../Button'
import { Icon, type IconName } from '../Icon'

export type PermissionPrimingCardProps = {
  title?: ReactNode
  body?: ReactNode
  allowLabel?: ReactNode
  dismissLabel?: ReactNode
  onAllow?: () => void
  onDismiss?: () => void
  icon?: IconName
}

export function PermissionPrimingCard({
  title = 'Stay on track',
  body = "We'll send a gentle nudge when it's time to check in on your tasks.",
  allowLabel = 'Turn on notifications',
  dismissLabel = 'Not now',
  onAllow,
  onDismiss,
  icon = 'bell',
}: PermissionPrimingCardProps) {
  return (
    <article className="ui-priming-card">
      <span className="ui-priming-card__chip" aria-hidden="true">
        <Icon name={icon} />
      </span>
      <h3 className="ui-priming-card__title">{title}</h3>
      <p className="ui-priming-card__body">{body}</p>
      <div className="ui-priming-card__actions">
        <Button variant="primary" fullWidth onClick={onAllow}>
          {allowLabel}
        </Button>
        <Button variant="ghost" fullWidth onClick={onDismiss}>
          {dismissLabel}
        </Button>
      </div>
    </article>
  )
}
