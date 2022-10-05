import { FC } from 'react'
import Cell from '../../helpers/Cell'
import Square from './Square'
interface TableRowProps {
    row: Cell[]
    incrementMachineScore: Function
    incrementPlayerScore: Function
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