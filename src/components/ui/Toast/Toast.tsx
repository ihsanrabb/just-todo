import type { MouseEventHandler, ReactNode } from 'react'
import './Toast.css'

/** Only `default` is styled today — Toast.css defines no `ui-toast--*` rules. */
export type ToastTone = 'default'

export type ToastProps = {
  message?: ReactNode
  actionLabel?: ReactNode
  onAction?: MouseEventHandler<HTMLButtonElement>
  tone?: ToastTone
}

export function Toast({
  message,
  actionLabel,
  onAction,
  tone = 'default',
}: ToastProps) {
  return (
    <div className={`ui-toast ui-toast--${tone}`} role="status">
      <span className="ui-toast-message">{message}</span>
      {actionLabel ? (
        <button type="button" className="ui-toast-action" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </div>
  )
}
