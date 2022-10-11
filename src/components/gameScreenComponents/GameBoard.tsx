import { FC, useEffect, useState, useCallback, useRef } from 'react'
import Grid2 from '../../helpers/Grid2'
import { GameData, incrementLevel, setGameState } from '../../redux/gameData'
import { setMachineScore } from '../../redux/machine'
import { setPlayerScore } from '../../redux/player'
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks'
import { setScreen } from '../../redux/screen'
import TableRow from './TableRow'


interface TableRowProps {
    gameData: GameData
}



const GameBoard: FC<TableRowProps> = ({ gameData }) => {
    const { levels, currentLevel, gameState } = gameData
    const levelData = levels[currentLevel]
    const { x, y } = levelData.grid
    const grid = new Grid2(x, y)
    const [board, setBoard] = useState(grid.rowList)
    const player = useAppSelector(state => state.player)
    const machine = useAppSelector(state => state.machine)
    const colors = { playerColor: player.chosenColor, machineColor: machine.chosenColor }
    const dispatch = useAppDispatch()
    const playerRatio = useRef(0)
    const machineRatio = useRef(0)


    useEffect(() => {
        setBoard(grid.rowList)
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


    //to make computer click square
    useEffect(() => {
        const time = setInterval(() => {
            const randomSquare = getRandomInt(0, y * x);
            const rowStart = Math.floor(randomSquare / x)


            handleSquareClick(rowStart, randomSquare, colors.machineColor, colors.playerColor, true)
        }, 700 - (currentLevel * 80))
        return () => clearInterval(time)



    }, [handleSquareClick, levelData])

    //to win/lose via % of squares controlled
    useEffect(() => {
        let totalSquares = board.reduce((a, b) => a.concat(b), []);

        let numberOfTotalSquares = totalSquares.length
        let playerSquaresCount = 0
        let machineSquaresCount = 0



        totalSquares.map(cell => {
            if (cell.backgroundColor === player.chosenColor) playerSquaresCount++
            if (cell.backgroundColor === machine.chosenColor) machineSquaresCount++

        })

        playerRatio.current = playerSquaresCount / numberOfTotalSquares

        if (playerRatio.current >= 0.75) {
            setTimeout(() => {
                if (playerRatio.current >= 0.75) {

                    dispatch(setGameState("end"))
                    playerRatio.current = 0
                }
            }, 3000)
        }

        machineRatio.current = machineSquaresCount / numberOfTotalSquares

        if (machineRatio.current >= 0.75) {
            setTimeout(() => {
                if (machineRatio.current >= 0.75) {
                    dispatch(setGameState("end"))
                    dispatch(setScreen(4))
                    machineRatio.current = 0
                }
            }, 5000)
        }

    }, [board])


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
                        <table className={`board grid-${x}`}>
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