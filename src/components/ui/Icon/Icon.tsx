import type { ReactElement } from 'react'
import './Icon.css'

const X_GLYPH = (
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
)

const GLYPHS = {
  'chevron-left': <polyline points="15 18 9 12 15 6" />,
  'trash-2': (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </>
  ),
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  minus: <line x1="5" y1="12" x2="19" y2="12" />,
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
  x: X_GLYPH,
  close: X_GLYPH,
} satisfies Record<string, ReactElement>

export type IconName = keyof typeof GLYPHS

export type IconProps = {
  name: IconName
  size?: number
  label?: string
  className?: string
}

export function Icon({ name, size = 24, label, className }: IconProps) {
  const glyph = GLYPHS[name]
  if (!glyph) return null

  const cls = ['ui-icon', className].filter(Boolean).join(' ')
  const a11yProps = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true, focusable: 'false' as const }

  return (
    <svg
      className={cls}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11yProps}
    >
      {glyph}
    </svg>
  )
}
