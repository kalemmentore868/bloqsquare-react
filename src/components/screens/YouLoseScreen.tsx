import React from 'react'
import { resetLevel } from '../../redux/gameData'
import { setMachineScore } from '../../redux/machine'
import { setPlayerScore } from '../../redux/player'
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks'
import { setScreen } from '../../redux/screen'

const YouLoseScreen = () => {
    const player = useAppSelector(state => state.player)
    const gameData = useAppSelector(state => state.gameData)
    const { levels, currentLevel } = gameData
    const currentLevelData = levels[currentLevel]
    const dispatch = useAppDispatch()

    const restartGame = () => {


        dispatch(setPlayerScore(0))
        dispatch(setMachineScore(0))
        dispatch(resetLevel())
        dispatch(setScreen(1))
    }

    return (
        <div>
            <h1>You Lose!</h1>

            <div>Your Score: {player.totalPoints}</div>

            <div>Score Needed to Advance: {currentLevelData.grade}</div>

            <button onClick={restartGame}>Play Again</button>
        </div>
    )
}

export default YouLoseScreen