import React, { useEffect, useState, useRef } from 'react';
import { useGameContext } from '../../Context/GameContext';

const Score = () => {
    const [score, setScore] = useState(0)
    const { gameProperties } = useGameContext()
    const { playerColor, machineColor } = gameProperties
    const clickedSquares = useRef([])

    useEffect(() => {
        const handleClick = (event: any) => {
            const opponentSquareClicked = getComputedStyle(event.target).getPropertyValue("--color") === "transparent"
            const blankSquareClickedOrOwnSquareClicked = getComputedStyle(event.target).getPropertyValue("--color") === playerColor
            const blackSquareClicked = !clickedSquares.current.includes(event.target)

            if (event.target.tagName === "SPAN" && blackSquareClicked) {
                setScore(prev => prev + 1)
                clickedSquares.current.push(event.target)
            }

        }

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

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