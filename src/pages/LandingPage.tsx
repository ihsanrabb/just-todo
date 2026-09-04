import { useNavigate } from 'react-router'
import heroPlant from '../assets/images/hero-plant.png'
import { Button } from '../components/ui'
import './LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <main className="landing__main">
        <div className="landing__hero">
          <img
            src={heroPlant}
            alt="Hero illustration"
            className="landing__hero-img"
          />
        </div>
        <h1 className="landing__title">Just TODO</h1>
        <p className="landing__tagline">Grow your garden, one task at a time</p>
        <div className="landing__controls">
          <Button variant="primary" fullWidth onClick={() => navigate('/home')}>
            GET STARTED
          </Button>
        </div>
      </main>
    </div>
  )
}
