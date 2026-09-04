import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './TaskDetailPage.css'
import {
  AppHeader,
  Button,
  CategoryChip,
  type CategoryColor,
  SegmentedControl,
  Stepper,
  TextField,
} from '../components/ui'

const DUMMY_CATEGORIES: { label: string; color: CategoryColor }[] = [
  { label: 'Writing', color: 'fern' },
  { label: 'Deep work', color: 'moss' },
  { label: 'Health', color: 'clay' },
  { label: 'Learning', color: 'ochre' },
  { label: 'Admin', color: 'slate' },
  { label: 'Side project', color: 'plum' },
]

const CATEGORY_SWATCHES: CategoryColor[] = [
  'clay',
  'fern',
  'ink',
  'mauve',
  'moss',
  'ochre',
  'plum',
  'slate',
]

function NewCategoryPanel() {
  const [name, setName] = useState('')
  const [color, setColor] = useState<CategoryColor>('moss')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="new-category-panel">
      <div className="new-category-panel__field">
        <label
          className="new-category-panel__label"
          htmlFor="new-category-name"
        >
          Category name
        </label>
        <input
          ref={inputRef}
          id="new-category-name"
          className="new-category-panel__input"
          type="text"
          placeholder="e.g. Reading"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="new-category-panel__swatches">
        {CATEGORY_SWATCHES.map((swatch) => (
          <button
            key={swatch}
            type="button"
            className={`new-category-panel__swatch${color === swatch ? ' new-category-panel__swatch--selected' : ''}`}
            style={{ background: `var(--color-cat-${swatch})` }}
            aria-pressed={color === swatch}
            aria-label={swatch}
            onClick={() => setColor(swatch)}
          />
        ))}
      </div>
      <Button variant="secondary" fullWidth onClick={() => {}}>
        Add category
      </Button>
    </div>
  )
}

export default function TaskDetailPage() {
  const [taskTitle, setTaskTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [taskType, setTaskType] = useState('Recurring')
  const [sessions, setSessions] = useState(1)
  const [showNewCategory, setShowNewCategory] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="task-detail">
      <AppHeader title="New task" onBack={() => navigate(-1)} />
      <div className="task-detail__content">
        <div className="task-detail__form">
          <div className="form-section">
            <TextField
              label="Task title"
              placeholder="What are you focusing on?"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="form-section">
            <span className="form-section__label">Category</span>
            <div className="category-chip-grid">
              {DUMMY_CATEGORIES.map((c) => (
                <CategoryChip
                  key={c.label}
                  label={c.label}
                  color={c.color}
                  selected={selectedCategory === c.label}
                  onClick={() => setSelectedCategory(c.label)}
                />
              ))}
              <CategoryChip
                label="New"
                variant="new"
                onClick={() => setShowNewCategory((v) => !v)}
              />
            </div>
            {showNewCategory ? (
              <div className="new-category-slot">
                <NewCategoryPanel />
              </div>
            ) : null}
          </div>
          <div className="form-section">
            <span className="form-section__label">Type</span>
            <SegmentedControl
              options={['Recurring', 'One-off']}
              value={taskType}
              onChange={setTaskType}
            />
          </div>
          <div className="form-section">
            <Stepper
              label="Target sessions per day"
              value={sessions}
              onChange={setSessions}
            />
          </div>
        </div>
      </div>
      <div className="task-detail__fab">
        <Button variant="primary" fullWidth onClick={() => {}}>
          CREATE TASK
        </Button>
      </div>
    </div>
  )
}
