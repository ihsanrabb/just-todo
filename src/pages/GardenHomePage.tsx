import { useNavigate } from 'react-router'
import './GardenHomePage.css'
import {
  Button,
  type CategoryColor,
  EmptyState,
  TaskCard,
} from '../components/ui'

const SHOW_TASKS = true

const DUMMY_TASKS: {
  title: string
  description: string
  category?: CategoryColor
  value: number
  target: number
}[] = [
  {
    title: 'Water the garden',
    description: 'Keep the beds moist through the dry spell',
    category: 'fern',
    value: 2,
    target: 3,
  },
  {
    title: 'Call the landlord',
    description: 'Ask about the leaking faucet',
    value: 0,
    target: 1,
  },
  {
    title: 'Prune the roses',
    description: 'Cut back the dead growth before frost',
    category: 'clay',
    value: 1,
    target: 1,
  },
  {
    title: 'Plan the harvest',
    description: 'Map out which beds to rotate next season',
    category: 'ochre',
    value: 0,
    target: 4,
  },
  {
    title: 'Feed the compost',
    description: 'Turn the pile and add kitchen scraps',
    category: 'moss',
    value: 3,
    target: 3,
  },
]

export default function GardenHomePage() {
  const navigate = useNavigate()
  return (
    <div className="garden-home">
      <div className="garden-home__header">
        <div className="garden-home-header">
          <div className="garden-home-header__text">
            <h1 className="garden-home-header__title">Today</h1>
            <p className="garden-home-header__subtitle">Thursday 28 August</p>
          </div>
          <Button variant="primary" onClick={() => {}}>
            NEW TASK
          </Button>
          <button
            type="button"
            className="garden-home-header__action"
            aria-label="Settings"
            onClick={() => navigate('/settings')}
          >
            <img alt="settings" src="/settings.png" width={22} height={22} />
          </button>
        </div>
      </div>
      {SHOW_TASKS ? (
        <>
          <div className="garden-home__garden">
            <div className="garden-card">
              <div className="garden-card__scene" aria-hidden="true" />
              <div className="garden-card__meta">
                <div className="garden-card__stage-row">
                  <span className="garden-card__badge">3</span>
                  <span className="garden-card__stage-name">Leafy</span>
                </div>
                <p className="garden-card__caption">9 sessions to Budding</p>
                <div
                  className="garden-card__track"
                  role="img"
                  aria-label="Progress: 48%"
                >
                  <div className="garden-card__track-fill" />
                </div>
                <div className="garden-card__bounds">
                  <span>6 sessions</span>
                  <span>21 sessions</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="garden-home__task-list">
            {DUMMY_TASKS.map((t) => (
              <li key={t.title}>
                <TaskCard
                  title={t.title}
                  description={t.description}
                  category={t.category}
                  value={t.value}
                  target={t.target}
                  onPlay={() => navigate('/focus-timer')}
                  onActivate={() => navigate('/task-detail')}
                />
              </li>
            ))}
          </ul>
          <Button variant="primary" fullWidth onClick={() => {}}>
            ADD A TASK
          </Button>
        </>
      ) : (
        <div className="garden-home__empty">
          <EmptyState
            title="No tasks yet"
            body="Add a task to start growing your garden"
            actionLabel="ADD A TASK"
            onAction={() => {}}
          />
        </div>
      )}
    </div>
  )
}
