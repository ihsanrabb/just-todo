import './Button.css'

export function Button({
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick,
  children,
}) {
  const cls = `ui-button ui-button--${variant}${fullWidth ? ' ui-button--full' : ''}`

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
