import React, { useEffect, useState, useRef } from 'react';
import { useGameContext } from '../../Context/GameContext';

const Score = () => {
    const [score, setScore] = useState(0)
    const { gameProperties } = useGameContext()
    const { playerColor } = gameProperties
    const clickedSquares = useRef([])

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            let square = event.target as HTMLSpanElement
            const opponentSquareClicked = getComputedStyle(square).getPropertyValue("--color") === "transparent"
            const blankSquareClickedOrOwnSquareClicked = getComputedStyle(square).getPropertyValue("--color") === playerColor
            const blackSquareClicked = blankSquareClickedOrOwnSquareClicked && !clickedSquares.current.includes(square)

            if (square.tagName === "SPAN" && blackSquareClicked) {
                setScore(prev => prev + 1)
                clickedSquares.current.push(square)
            } else if (square.tagName === "SPAN" && opponentSquareClicked && clickedSquares.current.includes(square)) {
                const index = clickedSquares.current.indexOf(square);
                if (index > -1) {
                    clickedSquares.current.splice(index, 1);
                }

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