import React, { FC } from 'react'

interface scoreProps {
    score: number
}

const Score: FC<scoreProps> = ({ score }) => {

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