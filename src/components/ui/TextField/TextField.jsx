import './TextField.css'

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  error = false,
  disabled = false,
  id,
  name,
  type = 'text',
}) {
  const hasError = Boolean(error)
  const hintText = typeof error === 'string' ? error : hint
  const cls = `ui-textfield${hasError ? ' ui-textfield--error' : ''}${disabled ? ' ui-textfield--disabled' : ''}`

  return (
    <div className={cls}>
      <label className="ui-textfield-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="ui-textfield-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hintText ? `${id}-hint` : undefined}
      />
      {hintText ? (
        <p className="ui-textfield-hint" id={`${id}-hint`}>
          {hintText}
        </p>
      ) : null}
    </div>
  )
}
