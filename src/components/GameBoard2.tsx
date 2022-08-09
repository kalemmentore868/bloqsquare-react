import React, { FC, useState, useEffect } from 'react'
import Grid2 from '../helpers/Grid2'
import Player from '../helpers/Player'
import TableRow from './TableRow'


interface GameBoardProps {
    player: Player
    machine: Player
    incrementPlayerScore: Function
    decrementPlayerScore: Function
    incrementMachineScore: Function
}


const GameBoard2: FC<GameBoardProps> = ({ player, machine, incrementPlayerScore, decrementPlayerScore, incrementMachineScore }) => {
    const grid = new Grid2(8, 8)

    return (
        <article className='game-play' >
            <div className="container-fluid">
                <div className="row">
                    <div className="center-align col no-padding s12">
                        <table className="board grid-8">
                            <tbody>
                                {grid.rowList.map(row => {
                                    return (
                                        <TableRow row={row} player={player} machine={machine} incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} decrementPlayerScore={decrementPlayerScore} />
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