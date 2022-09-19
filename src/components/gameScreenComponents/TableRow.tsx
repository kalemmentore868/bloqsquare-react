import React, { FC, useState, useEffect } from 'react'
import Cell from '../../helpers/Cell'
import Square from './Square'
interface TableRowProps {
    row: Cell[]
}


const TableRow: FC<TableRowProps> = ({ row }) => {

    function generateRandomInteger(max: number): number {
        return Math.floor(Math.random() * max);
    }

    const randomIndex = generateRandomInteger(64)

    return (
        <tr>
            {row.map(cell => {
                return (
                    <Square key={cell.index} cell={cell} />
                )
            })}
        </tr>
    )
}

export default TableRow