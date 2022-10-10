import { FC, memo } from 'react'
import Cell from '../../../helpers/Cell'
import Square2, { colors } from './Square2'
import { Howl } from "howler"
interface TableRowProps {
    row: Cell[]
    rowNum: number
    colors: colors
    handleSquareClick: Function
}

function areEqual(prevProps: TableRowProps, nextProps: TableRowProps) {
    {
        return prevProps.row.every(function (cell, i) {
            return cell.backgroundColor === nextProps.row[i].backgroundColor
        })
    }
}

const TableRow2: FC<TableRowProps> = ({ row, rowNum, colors, handleSquareClick }) => {

    console.log("row rerendering")
    return (
        <tr>
            {row.map(cell => {
                return (
                    <Square2 rowNum={rowNum} key={cell.index} cell={cell} colors={colors} handleSquareClick={handleSquareClick} />
                )
            })}
        </tr>
    )
}

export default memo(TableRow2, areEqual)