export const STAGE_NAMES = [
  'Seed',
  'Sprout',
  'Leafy',
  'Budding',
  'Full Bloom',
] as const

export type StageName = (typeof STAGE_NAMES)[number]

export type GrowthStage = {
  stageIndex: number
  name: StageName
  lo: number
  hi: number | null
  next: StageName | null
  fraction: number
  caption: string
}

const CAPTIONS = [
  'A seed half-buried in a low soil mound.',
  'Two cotyledon leaves on a short stem, rooted in a soil mound.',
  'Four-leaf plant — two leaf pairs on an upright stem.',
  'Tall stem with alternating leaves and a closed bud at the tip.',
  'Open white flower above a single leaf pair on a straight stem.',
]

// Lower bound of each stage, by cumulative session count (DESIGN.md ## Stages).
const THRESHOLDS = [0, 1, 6, 21, 41]

export function getGrowthStage(sessions: number): GrowthStage {
  const count = Math.max(0, sessions ?? 0)

  let idx = 0
  for (let i = THRESHOLDS.length - 1; i >= 0; i -= 1) {
    if (count >= THRESHOLDS[i]) {
      idx = i
      break
    }
  }

  const lo = THRESHOLDS[idx]
  const hi = THRESHOLDS[idx + 1] ?? null
  const fraction = hi === null ? 1 : (count - lo) / (hi - lo)

  return {
    stageIndex: idx + 1,
    name: STAGE_NAMES[idx],
    lo,
    hi,
    next: STAGE_NAMES[idx + 1] ?? null,
    fraction,
    caption: CAPTIONS[idx],
  }
}
