import type { MouseEventHandler, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost'

export type ButtonProps = {
  variant?: ButtonVariant
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const cls = `ui-button ui-button--${variant}${fullWidth ? ' ui-button--full' : ''}`

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
