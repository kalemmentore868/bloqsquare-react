import { FC, useEffect, useState, useCallback } from 'react'
import Grid2 from '../../../helpers/Grid2'
import { GameData } from '../../../redux/gameData'
import { incrementMachineScore } from '../../../redux/machine'
import { incrementPlayerScore } from '../../../redux/player'
import { useAppSelector, useAppDispatch } from '../../../redux/redux-hooks'
import TableRow2 from './TableRow2'


interface TableRowProps {
    gameData: GameData
}



const GameBoard2: FC<TableRowProps> = ({ gameData }) => {
    const { grid, levels, currentLevel } = gameData
    const [board, setBoard] = useState(grid.rowList)
    const player = useAppSelector(state => state.player)
    const machine = useAppSelector(state => state.machine)
    const dispatch = useAppDispatch()
    const colors = { playerColor: player.chosenColor, machineColor: machine.chosenColor }


    const levelData = levels[currentLevel]
    const { x, y } = levelData.grid

    useEffect(() => {
        const board = new Grid2(x, y)
        setBoard(board.rowList)
    }, [levelData])

    const handleSquareClick = useCallback((rowIndex: number, squareIndex: number, playerColor: string, opponentColor: string, machineClicked: boolean) => {
        setBoard(prevValue => {
            return prevValue.map((row, index) => {
                if (index === rowIndex) {
                    return row.map(cell => {
                        if (cell.index === squareIndex) {
                            if (cell.isClicked) {
                                if (cell.backgroundColor === opponentColor) {
                                    return {
                                        ...cell,
                                        backgroundColor: "transparent",
                                        isClicked: false,
                                    };
                                } else {
                                    // if (!player.isComputer) decrementPlayerScore()
                                    return cell; //here is where to put d code for if a player click his own square
                                }
                            } else {
                                return { ...cell, backgroundColor: playerColor, isClicked: true };
                            }
                        } else {
                            return cell
                        }
                    })
                } else {
                    return row
                }

            })
        })
    }, [])


    useEffect(() => {
        const time = setInterval(() => {
            const randomRow = generateRandomInteger(y - 1);

            const randomSquare = generateRandomInteger(x - 1) + randomRow * 7;
            handleSquareClick(randomRow, randomSquare, colors.machineColor, colors.playerColor, true)
        }, 100)
        return () => clearInterval(time)

    }, [handleSquareClick])


    function generateRandomInteger(max: number): number {
        return Math.floor(Math.random() * max);
    }


    return (
        <article className='game-play' >
            <div className="container-fluid">
                <div className="row">
                    <div className="center-align col no-padding s12">
                        <table className="board grid-8">
                            <tbody>
                                {board.map((row, i) => {
                                    return (
                                        <TableRow2 key={i} row={row} rowNum={i} colors={colors} handleSquareClick={handleSquareClick} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </article>
    )
}

export default GameBoard2