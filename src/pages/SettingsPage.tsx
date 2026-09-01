import { useState } from 'react'
import './SettingsPage.css'
import {
  AppHeader,
  Button,
  type CategoryColor,
  Dialog,
  EmptyState,
  Icon,
} from '../components/ui'

const CATEGORIES: { label: string; color: CategoryColor; count: number }[] = [
  { label: 'Writing', color: 'fern', count: 4 },
  { label: 'Deep work', color: 'moss', count: 3 },
  { label: 'Health', color: 'clay', count: 2 },
  { label: 'Learning', color: 'ochre', count: 2 },
  { label: 'Admin', color: 'slate', count: 1 },
  { label: 'Side project', color: 'plum', count: 0 },
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

const NO_CATEGORIES = false

type EditCategoryCardProps = {
  label: string
  color: CategoryColor
  onSave: () => void
  onCancel: () => void
  onDeleteRequest: () => void
}

function EditCategoryCard({
  label,
  color,
  onSave,
  onCancel,
  onDeleteRequest,
}: EditCategoryCardProps) {
  const [name, setName] = useState(label)
  const [selectedColor, setSelectedColor] = useState<CategoryColor>(color)

  return (
    <div className="settings-edit">
      <input
        className="settings-edit__input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="settings-edit__swatches">
        {CATEGORY_SWATCHES.map((swatch) => (
          <button
            key={swatch}
            type="button"
            className={`settings-edit__swatch${selectedColor === swatch ? ' settings-edit__swatch--selected' : ''}`}
            style={{ background: `var(--color-cat-${swatch})` }}
            aria-pressed={selectedColor === swatch}
            aria-label={swatch}
            onClick={() => setSelectedColor(swatch)}
          />
        ))}
      </div>
      <div className="settings-edit__actions">
        <button
          type="button"
          className="settings-edit__delete"
          aria-label="Delete category"
          onClick={onDeleteRequest}
        >
          <Icon name="trash-2" size={18} />
        </button>
        <div className="settings-edit__actions-end">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <div className="settings">
      <AppHeader
        variant="settings"
        title="Settings"
        onBack={() => {}}
        trailingIcon="plus"
        onTrailing={() => {}}
        trailingLabel="Add category"
      />
      <div className="settings__content">
        {NO_CATEGORIES ? (
          <EmptyState
            title="No categories"
            body="Add a category to organise your tasks"
            actionLabel="ADD CATEGORY"
            onAction={() => {}}
          />
        ) : (
          <>
            <span className="settings__section-label">CATEGORIES</span>
            <ul className="settings__list">
              {CATEGORIES.map((c, i) => (
                <li key={c.label}>
                  {editingIndex === i ? (
                    <EditCategoryCard
                      label={c.label}
                      color={c.color}
                      onSave={() => setEditingIndex(null)}
                      onCancel={() => setEditingIndex(null)}
                      onDeleteRequest={() => setConfirmDelete(true)}
                    />
                  ) : (
                    <button
                      type="button"
                      className="settings-row"
                      onClick={() => setEditingIndex(i)}
                    >
                      <span
                        className="settings-row__dot"
                        style={{ background: `var(--color-cat-${c.color})` }}
                      />
                      <span className="settings-row__name">{c.label}</span>
                      <span
                        className={`settings-row__count${c.count === 0 ? ' settings-row__count--muted' : ''}`}
                      >
                        {c.count} task{c.count === 1 ? '' : 's'}
                      </span>
                      <Icon name="chevron-right" size={17} />
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="settings-row"
                  onClick={() => {}}
                >
                  <span className="settings-row__dot settings-row__dot--hollow" />
                  <span className="settings-row__name">Uncategorised</span>
                  <span className="settings-row__count settings-row__count--muted">
                    1 task
                  </span>
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
      {confirmDelete ? (
        <div className="settings__dialog-overlay">
          <Dialog
            title="Delete category?"
            confirmLabel="Delete"
            cancelLabel="Cancel"
            destructive
            onCancel={() => setConfirmDelete(false)}
            onConfirm={() => {
              setConfirmDelete(false)
              setEditingIndex(null)
            }}
          >
            {/* Placeholder copy: no confirm-dialog mockup was provided. */}
            Tasks in this category will become uncategorised. This can't be
            undone.
          </Dialog>
        </div>
      ) : null}
    </div>
  )
}
