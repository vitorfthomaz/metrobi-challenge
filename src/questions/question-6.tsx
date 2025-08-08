import { useCallback, useEffect, useState } from "react"
import "./question-6.css"

const TORTOISE_VELOCITY = 10
const TORTOISE_RATIO = 1.2

export const ZenoParadox = () => {
  const [counter, setCounter] = useState(1)
  const [distance, setDistance] = useState({
    achilles: 0,
    tortoise: 10,
  })
  const difference = (distance.tortoise - distance.achilles).toFixed(2)
  const message = `The tortoise is ${difference} meters away`
  const buttonText = counter > 1 ? `Run ${difference} meters` : `Start running`

  const onAchillesRun = useCallback(() => {
    const tortoiseDistance = TORTOISE_VELOCITY / (TORTOISE_RATIO ** counter)
    setDistance(prev => ({
      achilles: prev.tortoise,
      tortoise: prev.tortoise + tortoiseDistance,
    }))
    setCounter(prev => prev + 1)
  }, [counter])

  const resetRace = () => {
    setDistance({ achilles: 0, tortoise: 10 })
    setCounter(0)
  }

  useEffect(() => {
    const interval = setInterval(onAchillesRun, 1000)

    return () => clearInterval(interval)
  }, [onAchillesRun])

  return (
    <section className="section">
      <p>Achilles need to win the race against the tortoise, but the tortoise has a headstart.<br />
        In order to Achilles surpass the tortoise, he first needs to traverse what the tortoise already has.</p>
      <div>
        <label htmlFor="achilles">Achilles</label>
        <progress id="achilles" value={distance.achilles} max="100" className="progress" />
      </div>
      <div>
        <label htmlFor="tortoise">Tortoise</label>
        <progress id="tortoise" value={distance.tortoise} max="100" className="progress" />
      </div>
      <span>{message}</span>
      <div className="buttonList">
        <button onClick={onAchillesRun}>{buttonText}</button>
        <button onClick={resetRace}>Start over</button>
      </div>
      {counter >= 3 && (
        <span>
          <p className="citation">In a race, the quickest runner can never over­take the slowest, since the pursuer must first reach the point whence the pursued started, so that the slower must always hold a lead.</p>
          — as recounted by Aristotle, Physics VI:9, 239b15
        </span>
      )}
    </section>
  )
}