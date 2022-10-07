import { useRef } from "react"
import GameBoard from '../gameScreenComponents/GameBoard'
import GameInfo from '../gameScreenComponents/GameInfo'

const GameScreen = () => {

  const scores = useRef({ playerScore: 0, machineScore: 0 })



  const incrementPlayerScore = () => {
    scores.current.playerScore++
  }

  const incrementMachineScore = () => {
    scores.current.machineScore++
  }

  return (
    <section className='game'>
      <GameInfo scores={scores.current} />
      <GameBoard incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} />
    </section>
  )
}

export default GameScreen