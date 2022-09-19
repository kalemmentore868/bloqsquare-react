import React, { FC } from 'react'
import { useGameContext } from '../../Context/GameContext';

const Score = () => {


    return (
        <div className="center-align col s12">
            <div className="points yellow z-depth-2">
                <div>
                    <span id="points"></span>pts.
                </div>
            </div>
        </div>
    )
}

export default Score