import React, { FC, useRef, useState } from 'react'
import Grid from '../../helpers/Grid'
import Player from '../../helpers/Player'
import GameBoard from '../GameBoard'
import GameBoard2 from '../GameBoard2'
import GameInfo from '../GameInfo'


interface gameScreenProps {
  player: Player
  machine: Player
  endGame: Function
}

const GameScreen: FC<gameScreenProps> = ({ player, machine, endGame }) => {
  const playerScore = useRef(0)
  const machineScore = useRef(0)

  const gameOver = () => {
    endGame(playerScore, machineScore.current)
  }

  let countPos = useRef(0);
  let countNeg = useRef(0);

  const incrementPlayerScore = () => {
    // countPos.current++
    // if (countPos.current > 5) {
    //   countPos.current = 0
    //   setPlayerScore(playerScore => playerScore + 5)
    // }
    playerScore.current++

  }
  const decrementPlayerScore = () => {
    // countNeg.current++
    // if (countNeg.current > 25) {
    //   countNeg.current = 0
    //   setPlayerScore(playerScore - 10)
    // }
    playerScore.current--
  }
  const incrementMachineScore = () => machineScore.current += 1

  return (
    <section className='game'>
      <GameInfo score={playerScore.current} gameOver={gameOver} />
      <GameBoard2 player={player} machine={machine} incrementPlayerScore={incrementPlayerScore} decrementPlayerScore={decrementPlayerScore} incrementMachineScore={incrementMachineScore} />
    </section>
  )
}

export default GameScreen