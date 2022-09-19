import React, { FC } from 'react'
import { useGameContext } from '../../Context/GameContext';

const Score = () => {
    const { gameObj, setGameObj } = useGameContext();
    const score = gameObj.player.totalPoints

    return (
        <div className="center-align col s12">
            <div className="points yellow z-depth-2">
                <div>
                    <span id="points">{score}</span>pts.
                </div>
            </div>
        </div>
    )
}

export default Score