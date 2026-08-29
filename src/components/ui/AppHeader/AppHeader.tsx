import type { ReactNode } from 'react'
import './AppHeader.css'
import { Icon, type IconName } from '../Icon'

export type AppHeaderVariant = 'detail' | 'focus' | 'home' | 'settings'

export type AppHeaderProps = {
  variant?: AppHeaderVariant
  title?: ReactNode
  onBack?: () => void
  backLabel?: string
  destructive?: boolean
  trailingIcon?: IconName
  onTrailing?: () => void
  trailingLabel?: string
}

export default function AppHeader({
  variant = 'detail',
  title,
  onBack,
  backLabel = 'Back',
  destructive = false,
  trailingIcon,
  onTrailing,
  trailingLabel,
}: AppHeaderProps) {
  const cls = `ui-app-header ui-app-header--${variant}`
  const trailingCls = [
    'ui-app-header__action',
    destructive ? 'ui-app-header__action--danger' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={cls}>
      {onBack ? (
        <button
          type="button"
          className="ui-app-header__action"
          onClick={onBack}
          aria-label={backLabel}
        >
          <Icon name="chevron-left" size={24} />
        </button>
      ) : (
        <span className="ui-app-header__action ui-app-header__action--spacer" />
      )}
      <h1 className="ui-app-header__title">{title}</h1>
      {trailingIcon ? (
        <button
          type="button"
          className={trailingCls}
          onClick={onTrailing}
          aria-label={trailingLabel}
        >
          <Icon name={trailingIcon} size={20} />
        </button>
      ) : (
        <span className="ui-app-header__action ui-app-header__action--spacer" />
      )}
    </header>
  )
}
