import { STAGE_NAMES } from '../Plant/growthStages'
import Plant from '../Plant/Plant'
import './GardenStrip.css'

export default function GardenStrip() {
  return (
    <div className="garden-strip">
      <div className="garden-strip__ground" aria-hidden="true" />
      <div className="garden-strip__plants">
        {STAGE_NAMES.map((name) => (
          <Plant key={name} stage={name} />
        ))}
      </div>
    </div>
  )
}
