import { useId, useState } from 'react'
import './Stepper.css'
import { Icon } from './Icon.jsx'

export function Stepper({
  label,
  value,
  onChange,
  min = 1,
  max = 8,
  disabled = false,
}) {
  const inputId = useId()
  const [draft, setDraft] = useState(null)

  const commit = (next) => {
    const clamped = Math.min(max, Math.max(min, next))
    onChange(clamped)
  }

  const handleInputChange = (e) => {
    setDraft(e.target.value)
  }

  const handleBlur = () => {
    if (draft === null) return
    const parsed = Number.parseInt(draft, 10)
    commit(Number.isNaN(parsed) ? min : parsed)
    setDraft(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const displayValue = draft === null ? value : draft

  return (
    <div className="ui-stepper">
      {label ? (
        <label className="ui-stepper-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className="ui-stepper-control">
        <button
          type="button"
          className="ui-stepper-button"
          onClick={() => commit(value - 1)}
          disabled={disabled || value <= min}
          aria-label="Decrease"
        >
          <Icon name="minus" size={16} />
        </button>
        <input
          id={inputId}
          className="ui-stepper-input"
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <button
          type="button"
          className="ui-stepper-button"
          onClick={() => commit(value + 1)}
          disabled={disabled || value >= max}
          aria-label="Increase"
        >
          <Icon name="plus" size={16} />
        </button>
      </div>
    </div>
  )
}
