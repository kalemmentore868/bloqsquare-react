import { FC, useEffect, useState, useCallback } from 'react'
import Grid2 from '../../helpers/Grid2'
import { GameData } from '../../redux/gameData'
import { useAppSelector } from '../../redux/redux-hooks'
import TableRow from './TableRow'


interface TableRowProps {
    gameData: GameData
}



const GameBoard: FC<TableRowProps> = ({ gameData }) => {
    const { levels, currentLevel } = gameData
    const [board, setBoard] = useState(new Grid2(7, 14).rowList)
    const player = useAppSelector(state => state.player)
    const machine = useAppSelector(state => state.machine)
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
            const randomSquare = getRandomInt(0, y * x);
            const rowStart = Math.floor(randomSquare / x)


            handleSquareClick(rowStart, randomSquare, colors.machineColor, colors.playerColor, true)
        }, 700)
        return () => clearInterval(time)

    }, [handleSquareClick])


    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
                                        <TableRow key={i} row={row} rowNum={i} colors={colors} handleSquareClick={handleSquareClick} />
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

export default GameBoard