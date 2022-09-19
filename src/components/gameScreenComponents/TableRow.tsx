import React, { FC, useState, useEffect, memo } from 'react'
import Cell from '../../helpers/Cell'
import Square from './Square'
interface TableRowProps {
    row: Cell[]
    incrementMachineScore: Function
    incrementPlayerScore: Function
}

function areEqual(prevProps: Cell[], nextProps: Cell[]): boolean {
    return prevProps[0].backgroundColor === nextProps[0].backgroundColor
}

const TableRow: FC<TableRowProps> = ({ row, incrementMachineScore, incrementPlayerScore }) => {

    console.log("Table row is rerendering")

    return (
        <tr>
            {row.map(cell => {
                return (
                    <Square key={cell.index} cell={cell} incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} />
                )
            })}
        </tr>
    )
}

export default TableRow