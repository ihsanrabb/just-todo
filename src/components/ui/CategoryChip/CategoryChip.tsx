import type { MouseEventHandler, ReactNode } from 'react'
import './CategoryChip.css'
import { Icon } from '../Icon'
import type { CategoryColor } from '../types'

export type CategoryChipProps = {
  label?: ReactNode
  color?: CategoryColor
  selected?: boolean
  variant?: 'default' | 'new'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function CategoryChip({
  label,
  color,
  selected = false,
  variant = 'default',
  onClick,
}: CategoryChipProps) {
  const isNew = variant === 'new'
  const cls = [
    'ui-category-chip',
    isNew ? 'ui-category-chip--new' : '',
    selected ? 'ui-category-chip--selected' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={cls}
      aria-pressed={isNew ? undefined : selected}
      onClick={onClick}
    >
      {isNew ? (
        <Icon name="plus" size={16} />
      ) : (
        <span
          className="ui-category-chip__dot"
          style={{ background: `var(--color-cat-${color})` }}
        />
      )}
      {label}
    </button>
  )
}
