import { FC } from 'react'
import Cell from '../../helpers/Cell'
import Square from './Square'
import { Howl } from "howler"
const opponentSrc = "./audio/opponent.wav"
const youSrc = "./audio/you.wav"
interface TableRowProps {
    row: Cell[]
    incrementMachineScore: Function
    incrementPlayerScore: Function
}


const TableRow: FC<TableRowProps> = ({ row, incrementMachineScore, incrementPlayerScore }) => {

    const opponentFx = new Howl({
        src: [opponentSrc],
        html5: true,
        preload: true
    });
    const youFx = new Howl({
        src: [youSrc],
        html5: true,
        preload: true
    });

    const callOpponentSound = () => {

        opponentFx.play()
    }


    const callPlayerSound = () => {

        youFx.play()

    }

    return (
        <tr>
            {row.map(cell => {
                return (
                    <Square key={cell.index} cell={cell} incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} callOpponentSound={callOpponentSound} callPlayerSound={callPlayerSound} />
                )
            })}
        </tr>
    )
}

export default TableRow