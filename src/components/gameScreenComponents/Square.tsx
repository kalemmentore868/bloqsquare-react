import React, { FC, useState, useEffect, useRef } from 'react'
import { useGameContext } from '../../Context/GameContext';
import Cell from '../../helpers/Cell'
import Player from '../../helpers/Player'

interface SquareRowProps {
    cell: Cell
}

function generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}


const Square: FC<SquareRowProps> = ({ cell }) => {
    const [cellSquare, setCellSquare] = useState(cell);
    const { gameObj, setGameObj } = useGameContext();
    const { player, machine } = gameObj

    //for a random square to be coloured
    useEffect(() => {

        const computerInterval = setInterval(() => {
            const randomIndex = generateRandomInteger(64)

            if (cellSquare.index === randomIndex) {

                handleSquareClicked(machine, player)
            }


        }, 1000)

        return () => clearInterval(computerInterval)

    }, [])

    useEffect(() => {
        if (cellSquare.backgroundColor === player.chosenColor) {
            incrementPlayerScore()
        } else if (cellSquare.backgroundColor === player.chosenColor) {
            incrementMachineScore()
        }


    }, [cellSquare])



    const handleSquareClicked = (player: Player, opponent: Player) => {
        setCellSquare(prevState => {
            if (prevState.isClicked) {
                if (prevState.backgroundColor === opponent.chosenColor) {

                    return { ...prevState, backgroundColor: "transparent", isClicked: false }
                } else {
                    // if (!player.isComputer) decrementPlayerScore()
                    return prevState //here is where to put d code for if a player click his own square
                }
            } else {
                if (player.isComputer) {
                    opponentFx.play()
                    // incrementMachineScore()
                } else {
                    youFx.play()
                    // incrementPlayerScore()
                }

                return { ...prevState, backgroundColor: player.chosenColor, isClicked: true }
            }
        })

    }

    const decrementPlayerScore = () => {
        setGameObj(prevState => ({
            ...prevState,
            player: {
                ...prevState.player,
                totalPoints: prevState.player.totalPoints - 1
            }
        }))
    }

    const incrementPlayerScore = () => {
        setGameObj(prevState => ({
            ...prevState,
            player: {
                ...prevState.player,
                totalPoints: prevState.player.totalPoints + 1
            }
        }))
    }

    const incrementMachineScore = () => {
        setGameObj(prevState => ({
            ...prevState,
            machine: {
                ...prevState.machine,
                totalPoints: prevState.machine.totalPoints + 1
            }
        }))
    }

    const opponentFx = new Audio('./audio/opponent.wav')
    const youFx = new Audio('./audio/you.wav')



    const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
        // let square = e.target as HTMLDivElement
        // randomIndex.current = generateRandomInteger(parseInt(square.id)) + 10
        handleSquareClicked(player, machine)
    }



    return (
        <td className="color" key={cellSquare.index}
            style={{ "--color": cellSquare.backgroundColor } as React.CSSProperties}
            onClick={(e) => squareClicked(e)}><span id={`${cellSquare.index}`} className="square"></span></td>
    )
}

export default Square