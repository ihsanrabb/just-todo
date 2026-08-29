import './Toast.css'

export function Toast({ message, actionLabel, onAction, tone = 'default' }) {
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
