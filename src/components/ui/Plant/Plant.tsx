import buddingImg from '../../../assets/images/budding.png'
import fullBloomImg from '../../../assets/images/full-bloom.png'
import leafyImg from '../../../assets/images/leafy.png'
import seedImg from '../../../assets/images/seed.png'
import sproutImg from '../../../assets/images/sprout.png'
import { getGrowthStage, STAGE_NAMES, type StageName } from './growthStages'
import './Plant.css'

const STAGE_IMAGES = [seedImg, sproutImg, leafyImg, buddingImg, fullBloomImg]

export type PlantProps = {
  sessions?: number
  stage?: StageName
}

export default function Plant({ sessions, stage }: PlantProps) {
  // `stage` wins over `sessions`; the stage-prop path bypasses getGrowthStage
  // entirely and reads STAGE_NAMES directly, same as the sessions-driven path.
  const idx = stage
    ? STAGE_NAMES.indexOf(stage)
    : getGrowthStage(sessions ?? 0).stageIndex - 1

  const safeIdx = idx >= 0 ? idx : 0

  return (
    <img
      className="plant"
      src={STAGE_IMAGES[safeIdx]}
      alt={`${STAGE_NAMES[safeIdx]} stage plant`}
    />
  )
}
