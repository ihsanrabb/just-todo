import './SegmentedControl.css'

export function SegmentedControl({ name, options, value, onChange }) {
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
