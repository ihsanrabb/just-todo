import type { ReactNode } from 'react'
import './Dialog.css'
import { Button } from '../Button'

export type DialogProps = {
  title?: ReactNode
  children?: ReactNode
  confirmLabel?: ReactNode
  cancelLabel?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  destructive?: boolean
}

export function Dialog({
  title,
  children,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  destructive = false,
}: DialogProps) {
  const titleId = 'ui-dialog-title'

  return (
    <div
      className="ui-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="ui-dialog-title">
        {title}
      </h2>
      <div className="ui-dialog-body">{children}</div>
      <div className="ui-dialog-actions">
        <Button variant="secondary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button
          variant={destructive ? 'destructive' : 'primary'}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  )
}
