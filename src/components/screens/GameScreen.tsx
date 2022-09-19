import React, { FC } from "react"
import GameBoard from '../gameScreenComponents/GameBoard'
import GameInfo from '../gameScreenComponents/GameInfo'

interface GameScreenProps {
  incrementMachineScore: Function
  incrementPlayerScore: Function
}

const GameScreen: FC<GameScreenProps> = ({ incrementMachineScore, incrementPlayerScore }) => {
  return (
    <section className='game'>
      <GameInfo />
      <GameBoard incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} />
    </section>
  )
}

export default GameScreen