import type { ReactNode } from 'react'
import './EmptyState.css'
import { Button } from '../Button'
import { Icon } from '../Icon'

export type EmptyStateProps = {
  title?: ReactNode
  body?: ReactNode
  actionLabel?: ReactNode
  onAction?: () => void
  icon?: ReactNode
}

export function EmptyState({
  title,
  body,
  actionLabel,
  onAction,
  icon = <Icon name="plus" size={32} />,
}: EmptyStateProps) {
  return (
    <div className="ui-empty-state">
      <div className="ui-empty-state-icon">{icon}</div>
      <h3 className="ui-empty-state-title">{title}</h3>
      <p className="ui-empty-state-body">{body}</p>
      <Button variant="primary" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  )
}
