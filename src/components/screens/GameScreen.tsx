import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import GameBoard from '../gameScreenComponents/GameBoard'
import GameInfo from '../gameScreenComponents/GameInfo'

const GameScreen = () => {
  const gameData = useAppSelector((state) => state.gameData);




  const scores = useRef({ playerScore: 0, machineScore: 0 })



  const incrementPlayerScore = () => {
    scores.current.playerScore++
  }

  const incrementMachineScore = () => {
    scores.current.machineScore++
  }

  return (
    <section className='game'>
      <GameInfo scores={scores.current} gameData={gameData} />
      <GameBoard incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} gameData={gameData} />
    </section>
  )
}

export default GameScreen