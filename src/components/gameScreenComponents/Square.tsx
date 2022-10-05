import React, { FC, useState, useEffect } from 'react'
import { useGameContext } from '../../Context/GameContext';
import Cell from '../../helpers/Cell'

interface SquareRowProps {
    cell: Cell
    incrementMachineScore: Function
    incrementPlayerScore: Function
}

function generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}


const Square: FC<SquareRowProps> = ({ cell, incrementMachineScore, incrementPlayerScore }) => {
    const [cellSquare, setCellSquare] = useState(cell);
    const { gameProperties } = useGameContext()

    const { playerColor, machineColor } = gameProperties

    console.log("square is rerndering")
    //for a random square to be coloured
    useEffect(() => {

        const computerInterval = setInterval(() => {
            const randomIndex = generateRandomInteger(64)

            if (cellSquare.index === randomIndex) {

                handleSquareClicked(machineColor, playerColor, true)
            }


        }, 1000)

        return () => clearInterval(computerInterval)

    }, [])

    useEffect(() => {



        if (cellSquare.backgroundColor === playerColor) {
            incrementPlayerScore()
        } else if (cellSquare.backgroundColor === machineColor) {
            incrementMachineScore()
        }


    }, [cellSquare])



    const handleSquareClicked = (playerColor: string, machineColor: string, machineDidClick: boolean) => {
        setCellSquare(prevState => {
            if (prevState.isClicked) {
                if (prevState.backgroundColor === machineColor) {

                    return { ...prevState, backgroundColor: "transparent", isClicked: false }
                } else {
                    // if (!player.isComputer) decrementPlayerScore()
                    return prevState //here is where to put d code for if a player click his own square
                }
            } else {
                if (machineDidClick) {
                    opponentFx.play()
                    // incrementMachineScore()
                } else {
                    youFx.play()
                    // incrementPlayerScore()
                }

                return { ...prevState, backgroundColor: playerColor, isClicked: true }
            }
        })

    }



    const opponentFx = new Audio('./audio/opponent.wav')
    const youFx = new Audio('./audio/you.wav')



    const squareClicked = () => {
        handleSquareClicked(playerColor, machineColor, false)
    }



    return (
        <td className="color" key={cellSquare.index}
            style={{ "--color": cellSquare.backgroundColor } as React.CSSProperties}
            onClick={squareClicked}><span id={`${cellSquare.index}`} className="square"></span></td>
    )
}

export default Square