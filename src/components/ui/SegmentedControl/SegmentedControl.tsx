import './SegmentedControl.css'

export type SegmentedControlOption = { label: string; value: string }

export type SegmentedControlProps = {
  name?: string
  /** Accepts plain strings, which are expanded to `{ label: value, value }`. */
  options: Array<string | SegmentedControlOption>
  value?: string
  onChange: (value: string) => void
}

export function SegmentedControl({
  name,
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  const normalized = options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  )

  return (
    <div className="ui-segmented" role="group" aria-label={name}>
      {normalized.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            className={`ui-segmented-option${selected ? ' ui-segmented-option--selected' : ''}`}
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
