import React, { FC, useState, useEffect } from 'react'
import Cell from '../helpers/Cell'
import Player from '../helpers/Player'

interface SquareRowProps {
    cell: Cell
    player: Player
    machine: Player
    incrementPlayerScore: Function
    decrementPlayerScore: Function
    incrementMachineScore: Function
}

function generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}


const Square: FC<SquareRowProps> = ({ cell, player, machine, incrementMachineScore, decrementPlayerScore, incrementPlayerScore }) => {
    const [cellSquare, setCellSquare] = useState(cell)
    const opponentFx = new Audio('./audio/opponent.wav')
    const youFx = new Audio('./audio/you.wav')

    const handleSquareClicked = (player: Player, opponent: Player) => {
        setCellSquare(prevState => {
            if (prevState.isClicked) {
                if (prevState.backgroundColor === opponent.chosenColor) {

                    return { ...prevState, backgroundColor: "transparent", isClicked: false }
                } else {
                    if (!player.isComputer) decrementPlayerScore()
                    return prevState //here is where to put d code for if a player click his own square
                }
            } else {
                if (player.isComputer) {
                    opponentFx.play()
                    incrementMachineScore()
                } else {
                    youFx.play()
                    incrementPlayerScore()
                }

                return { ...prevState, backgroundColor: player.chosenColor, isClicked: true }
            }
        })

    }

    const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
        let square = e.target as HTMLDivElement
        let cellIndex = parseInt(square.id)
        handleSquareClicked(player, machine)
    }

    useEffect(() => {

        let randomTime = generateRandomInteger(100000)

        const computerInterval = setInterval(() => {


            handleSquareClicked(machine, player)
            randomTime = generateRandomInteger(100000)
        }, randomTime)

        return () => clearInterval(computerInterval)



    }, [])

    return (
        <td className="color" key={cellSquare.index}
            style={{ "--color": cellSquare.backgroundColor } as React.CSSProperties}
            onClick={(e) => squareClicked(e)}><span id={`${cellSquare.index}`} className="square"></span></td>
    )
}

export default Square