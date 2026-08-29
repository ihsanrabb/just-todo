import { useState } from 'react'
import {
  AppHeader,
  Button,
  CategoryChip,
  CycleIndicator,
  Dialog,
  EmptyState,
  Icon,
  PermissionPrimingCard,
  SegmentedControl,
  Stepper,
  TaskCard,
  TaskCardDropSlot,
  TextField,
  TimerDisplay,
  Toast,
} from '../components/ui'
import './UiGalleryPage.css'

const PALETTE_TOKENS = [
  '--color-bg',
  '--color-surface',
  '--color-surface-alt',
  '--color-border',
  '--color-text-primary',
  '--color-text-secondary',
  '--color-text-disabled',
  '--color-primary',
  '--color-primary-hover',
  '--color-primary-pressed',
  '--color-accent',
  '--color-mauve',
  '--color-danger',
  '--color-focus-ring',
  '--color-on-primary',
]

const CATEGORY_TOKENS = [
  '--color-cat-moss',
  '--color-cat-fern',
  '--color-cat-clay',
  '--color-cat-ochre',
  '--color-cat-slate',
  '--color-cat-plum',
  '--color-cat-mauve',
  '--color-cat-ink',
]

const ICON_NAMES = ['chevron-left', 'trash-2', 'plus', 'minus', 'bell', 'x']

function UiGalleryPage() {
  const [filledValue, setFilledValue] = useState('Buy groceries')
  const [emptyValue, setEmptyValue] = useState('')
  const [errorValue, setErrorValue] = useState('')
  const [stepperValue, setStepperValue] = useState(1)
  const [stepperMaxValue, setStepperMaxValue] = useState(8)
  const [segmentValue, setSegmentValue] = useState('daily')
  const [selectedCategory, setSelectedCategory] = useState('moss')

  return (
    <div id="ui-gallery">
      <header className="ui-gallery-header">
        <h1>Component Library</h1>
        <p>Design tokens and component placeholders for /ui</p>
      </header>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-colors-heading"
      >
        <h2 id="ui-colors-heading">Colors</h2>
        <ul className="ui-swatch-grid">
          {PALETTE_TOKENS.map((token) => (
            <li key={token} className="ui-swatch">
              <span
                className="ui-swatch-color"
                style={{ background: `var(${token})` }}
              />
              <span className="ui-swatch-label">{token}</span>
            </li>
          ))}
        </ul>
        <ul className="ui-swatch-grid">
          {CATEGORY_TOKENS.map((token) => (
            <li key={token} className="ui-swatch">
              <span
                className="ui-swatch-color"
                style={{ background: `var(${token})` }}
              />
              <span className="ui-swatch-label">{token}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-typography-heading"
      >
        <h2 id="ui-typography-heading">Typography</h2>
        <p
          className="ui-type-sample"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Sans — var(--font-sans)
        </p>
        <p
          className="ui-type-sample"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Heading — var(--font-heading)
        </p>
        <p
          className="ui-type-sample"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Mono — var(--font-mono)
        </p>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-button-heading"
      >
        <h2 id="ui-button-heading">Button</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <Button variant="primary" fullWidth>
          Full Width Primary
        </Button>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-form-controls-heading"
      >
        <h2 id="ui-form-controls-heading">Form controls</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <Stepper
            label="Target"
            value={stepperValue}
            onChange={setStepperValue}
          />
          <Stepper
            label="At max"
            value={stepperMaxValue}
            onChange={setStepperMaxValue}
          />
          <Stepper label="Disabled" value={4} onChange={() => {}} disabled />
        </div>
        <SegmentedControl
          name="Frequency"
          options={[
            { label: 'Daily', value: 'daily' },
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
          ]}
          value={segmentValue}
          onChange={setSegmentValue}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <CategoryChip
            label="Moss"
            color="moss"
            selected={selectedCategory === 'moss'}
            onClick={() => setSelectedCategory('moss')}
          />
          <CategoryChip
            label="Fern"
            color="fern"
            selected={selectedCategory === 'fern'}
            onClick={() => setSelectedCategory('fern')}
          />
          <CategoryChip
            label="Clay"
            color="clay"
            selected={selectedCategory === 'clay'}
            onClick={() => setSelectedCategory('clay')}
          />
          <CategoryChip label="New category" variant="new" />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-icons-heading"
      >
        <h2 id="ui-icons-heading">Icons</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {ICON_NAMES.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Icon name={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Icon name="bell" size={16} />
          <Icon name="bell" size={24} />
          <Icon name="bell" size={32} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Icon name="bell" label="Notifications" />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-app-header-heading"
      >
        <h2 id="ui-app-header-heading">App Header</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AppHeader
            variant="detail"
            title="Task Details"
            onBack={() => {}}
            trailingIcon="trash-2"
            trailingLabel="Delete task"
            destructive
            onTrailing={() => {}}
          />
          <AppHeader variant="settings" title="Settings" onBack={() => {}} />
          <AppHeader variant="home" title="Just TODO" />
          <AppHeader
            variant="focus"
            title="Focus Session"
            onBack={() => {}}
            trailingIcon="x"
            trailingLabel="End session"
            onTrailing={() => {}}
          />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-input-heading"
      >
        <h2 id="ui-input-heading">Input</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            id="ui-input-empty"
            label="Empty"
            value={emptyValue}
            onChange={(e) => setEmptyValue(e.target.value)}
            placeholder="Task title"
          />
          <TextField
            id="ui-input-filled"
            label="Filled"
            value={filledValue}
            onChange={(e) => setFilledValue(e.target.value)}
          />
          <TextField
            id="ui-input-error"
            label="Error"
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            placeholder="Task title"
            error="Title is required"
          />
          <TextField
            id="ui-input-disabled"
            label="Disabled"
            value="Locked task"
            onChange={() => {}}
            disabled
          />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-taskcard-heading"
      >
        <h2 id="ui-taskcard-heading">Task Card</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          <TaskCard
            title="Default"
            description="Fresh task, no progress yet"
            category="moss"
            value={0}
            target={3}
          />
          <TaskCard
            title="Partial"
            description="Some progress made"
            category="fern"
            value={2}
            target={3}
          />
          <TaskCard
            title="Target met"
            description="Goal reached"
            category="clay"
            value={3}
            target={3}
          />
          <TaskCard
            title="Over target"
            description="Went past the goal"
            category="ochre"
            value={4}
            target={3}
          />
          <TaskCard
            title="Max"
            description="High-volume habit"
            category="slate"
            value={6}
            target={8}
          />
          <TaskCard
            title="No category"
            description="Uncategorized task"
            value={1}
            target={3}
          />
          <TaskCard
            title="Dragging"
            description="Currently being reordered"
            category="plum"
            value={2}
            target={3}
            state="dragging"
          />
          <TaskCard
            title="Focused"
            description="Keyboard focus demo"
            category="mauve"
            value={2}
            target={3}
            state="focused"
          />
          <TaskCard
            title="Pressed"
            description="Active press demo"
            category="ink"
            value={2}
            target={3}
            state="pressed"
          />
          <TaskCardDropSlot />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-cycle-indicator-heading"
      >
        <h2 id="ui-cycle-indicator-heading">Cycle Indicator</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <CycleIndicator current={1} total={4} />
          <CycleIndicator current={3} total={4} />
          <CycleIndicator current={4} total={4} longBreak />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-timer-display-heading"
      >
        <h2 id="ui-timer-display-heading">Timer Display</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <TimerDisplay
            remainingSeconds={1499}
            totalMinutes={25}
            task="Deep work"
          />
          <TimerDisplay
            remainingSeconds={750}
            totalMinutes={25}
            phase="Focus"
          />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-overlays-heading"
      >
        <h2 id="ui-overlays-heading">Overlays</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <Dialog
            title="Delete this task?"
            confirmLabel="Discard"
            cancelLabel="Keep going"
            destructive
            onConfirm={() => {}}
            onCancel={() => {}}
          >
            This task and its progress history will be permanently deleted.
          </Dialog>
          <EmptyState
            title="No tasks yet"
            body="Add your first task to start tracking progress."
            actionLabel="Add task"
            onAction={() => {}}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          <Toast
            message="Task deleted"
            actionLabel="Undo"
            onAction={() => {}}
          />
          <Toast
            message="3 tasks completed today"
            actionLabel="View"
            onAction={() => {}}
          />
        </div>
      </section>

      <section
        className="ui-gallery-section"
        aria-labelledby="ui-permission-priming-heading"
      >
        <h2 id="ui-permission-priming-heading">Permission Priming</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <PermissionPrimingCard onAllow={() => {}} onDismiss={() => {}} />
        </div>
      </section>

      {/* Mount point: Badge component */}
      <section
        className="ui-gallery-section ui-placeholder"
        aria-labelledby="ui-badge-heading"
      >
        <h2 id="ui-badge-heading">Badge</h2>
      </section>
    </div>
  )
}

export default UiGalleryPage
