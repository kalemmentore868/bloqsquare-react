import { FC, useRef } from 'react'
import Grid2 from '../../helpers/Grid2'
import TableRow from './TableRow'

interface TableRowProps {
    incrementMachineScore: Function
    incrementPlayerScore: Function
}



const GameBoard: FC<TableRowProps> = ({ incrementMachineScore, incrementPlayerScore }) => {


    const grid = useRef(new Grid2(8, 8))


    return (
        <article className='game-play' >
            <div className="container-fluid">
                <div className="row">
                    <div className="center-align col no-padding s12">
                        <table className="board grid-8">
                            <tbody>
                                {grid.current.rowList.map((row) => {
                                    return (
                                        <TableRow key={row[0].index} row={row} incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} />
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