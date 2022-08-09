import React, { FC, useState, useEffect } from 'react'
import Cell from '../helpers/Cell'
import Player from '../helpers/Player'
import Square from './Square'
interface TableRowProps {
    row: Cell[]
    player: Player
    machine: Player
    incrementPlayerScore: Function
    decrementPlayerScore: Function
    incrementMachineScore: Function
}


const TableRow: FC<TableRowProps> = ({ row, player, machine, incrementMachineScore, decrementPlayerScore, incrementPlayerScore }) => {


    return (
        <tr>
            {row.map(cell => {
                return (
                    <Square cell={cell} player={player} machine={machine} incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} decrementPlayerScore={decrementPlayerScore} />
                )
            })}
        </tr>
    )
}

export default TableRow