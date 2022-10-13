import React, { FC } from 'react'

interface levelProps {
    level: number
}
const Level: FC<levelProps> = ({ level }) => {
    return (
        <div className="yellow-text silom level">
            <div>
                <span>Level: {level}</span>
            </div>
        </div>
    )
}

export default Level