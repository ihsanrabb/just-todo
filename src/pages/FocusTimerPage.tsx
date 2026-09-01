import './FocusTimerPage.css'
import type { ButtonVariant } from '../components/ui'
import {
  Button,
  CycleIndicator,
  GardenStrip,
  Icon,
  TimerDisplay,
  WakeLockPill,
} from '../components/ui'

type FocusTimerAction = {
  label: string
  variant: ButtonVariant
}

type FocusTimerState = {
  modifierClass: string
  wakeLockLabel: string | null
  cycle: { current: number; total: number; longBreak?: boolean }
  timer: {
    remainingSeconds: number
    totalMinutes: number
    phase: string
    task?: string
  }
  garden: {
    stageBadge: number
    stageName: string
    caption: string
    progressLabel: string
    lowerBound: string
    upperBound: string
  }
  actions: FocusTimerAction[]
}

const STATES = {
  workRunning: {
    modifierClass: '',
    wakeLockLabel: 'Screen staying on',
    cycle: { current: 2, total: 4 },
    timer: {
      remainingSeconds: 1104,
      totalMinutes: 25,
      phase: 'Focus',
      task: 'Deep work block',
    },
    garden: {
      stageBadge: 3,
      stageName: 'Leafy',
      caption: '9 sessions to Budding',
      progressLabel: 'Progress: 48%',
      lowerBound: '6 sessions',
      upperBound: '21 sessions',
    },
    actions: [{ label: 'End session', variant: 'secondary' }],
  },
  paused: {
    modifierClass: 'focus-timer--paused',
    wakeLockLabel: null,
    cycle: { current: 2, total: 4 },
    timer: {
      remainingSeconds: 812,
      totalMinutes: 25,
      phase: 'Paused',
      task: 'Deep work block',
    },
    garden: {
      stageBadge: 3,
      stageName: 'Leafy',
      caption: '9 sessions to Budding',
      progressLabel: 'Progress: 48%',
      lowerBound: '6 sessions',
      upperBound: '21 sessions',
    },
    actions: [
      { label: 'Resume', variant: 'primary' },
      { label: 'End session', variant: 'secondary' },
    ],
  },
  shortBreakRunning: {
    modifierClass: 'focus-timer--short-break',
    wakeLockLabel: 'Screen staying on',
    cycle: { current: 2, total: 4 },
    timer: {
      remainingSeconds: 245,
      totalMinutes: 5,
      phase: 'Short break',
      task: 'Step away for a bit',
    },
    garden: {
      stageBadge: 3,
      stageName: 'Leafy',
      caption: '8 sessions to Budding',
      progressLabel: 'Progress: 52%',
      lowerBound: '6 sessions',
      upperBound: '21 sessions',
    },
    actions: [{ label: 'Skip break', variant: 'secondary' }],
  },
  workComplete: {
    modifierClass: 'focus-timer--work-complete',
    wakeLockLabel: null,
    cycle: { current: 3, total: 4 },
    timer: {
      remainingSeconds: 0,
      totalMinutes: 25,
      phase: 'Focus complete',
      task: 'Deep work block',
    },
    garden: {
      stageBadge: 3,
      stageName: 'Leafy',
      caption: '8 sessions to Budding',
      progressLabel: 'Progress: 52%',
      lowerBound: '6 sessions',
      upperBound: '21 sessions',
    },
    actions: [
      { label: 'Start break', variant: 'primary' },
      { label: 'End session', variant: 'secondary' },
    ],
  },
  breakComplete: {
    modifierClass: 'focus-timer--break-complete',
    wakeLockLabel: null,
    cycle: { current: 3, total: 4 },
    timer: {
      remainingSeconds: 0,
      totalMinutes: 5,
      phase: 'Break complete',
      task: 'Step away for a bit',
    },
    garden: {
      stageBadge: 3,
      stageName: 'Leafy',
      caption: '8 sessions to Budding',
      progressLabel: 'Progress: 52%',
      lowerBound: '6 sessions',
      upperBound: '21 sessions',
    },
    actions: [
      { label: 'Start focus', variant: 'primary' },
      { label: 'End session', variant: 'secondary' },
    ],
  },
} satisfies Record<string, FocusTimerState>

const DUMMY_STATE: FocusTimerState = STATES.paused

export default function FocusTimerPage() {
  const rootClassName = DUMMY_STATE.modifierClass
    ? `focus-timer ${DUMMY_STATE.modifierClass}`
    : 'focus-timer'

  return (
    <div className={rootClassName}>
      <div className="focus-timer__header">
        {DUMMY_STATE.wakeLockLabel ? (
          <WakeLockPill label={DUMMY_STATE.wakeLockLabel} />
        ) : (
          <span />
        )}
        <button
          type="button"
          className="focus-timer__exit"
          aria-label="Exit"
          onClick={() => {}}
        >
          <Icon name="x" />
        </button>
      </div>
      <div className="focus-timer__cycle">
        <CycleIndicator
          current={DUMMY_STATE.cycle.current}
          total={DUMMY_STATE.cycle.total}
          longBreak={DUMMY_STATE.cycle.longBreak}
        />
      </div>
      <TimerDisplay
        remainingSeconds={DUMMY_STATE.timer.remainingSeconds}
        totalMinutes={DUMMY_STATE.timer.totalMinutes}
        phase={DUMMY_STATE.timer.phase}
        task={DUMMY_STATE.timer.task}
      />
      <div className="garden-card">
        <div className="garden-card__scene" aria-hidden="true" />
        <div className="garden-card__meta">
          <div className="garden-card__stage-row">
            <span className="garden-card__badge">
              {DUMMY_STATE.garden.stageBadge}
            </span>
            <span className="garden-card__stage-name">
              {DUMMY_STATE.garden.stageName}
            </span>
          </div>
          <p className="garden-card__caption">{DUMMY_STATE.garden.caption}</p>
          <div
            className="garden-card__track"
            role="img"
            aria-label={DUMMY_STATE.garden.progressLabel}
          >
            <div className="garden-card__track-fill" />
          </div>
          <div className="garden-card__bounds">
            <span>{DUMMY_STATE.garden.lowerBound}</span>
            <span>{DUMMY_STATE.garden.upperBound}</span>
          </div>
        </div>
      </div>
      <GardenStrip />
      <div className="focus-timer__actions">
        {DUMMY_STATE.actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            fullWidth
            onClick={() => {}}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
