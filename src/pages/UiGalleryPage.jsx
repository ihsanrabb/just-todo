import { Button } from '../components/ui/Button.jsx'
import CycleIndicator from '../components/ui/CycleIndicator.jsx'
import { Icon } from '../components/ui/Icon.jsx'
import TaskCard, { TaskCardDropSlot } from '../components/ui/TaskCard.jsx'
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

      {/* Mount point: Input component */}
      <section
        className="ui-gallery-section ui-placeholder"
        aria-labelledby="ui-input-heading"
      >
        <h2 id="ui-input-heading">Input</h2>
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
