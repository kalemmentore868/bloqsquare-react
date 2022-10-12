import React, { FC, useEffect, memo } from "react";
import Cell from "../../helpers/Cell";
import { incrementMachineScore, incrementTotalMachinePoints } from "../../redux/machine";
import { incrementPlayerScore, incrementTotalPlayerPoints } from "../../redux/player";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";



interface SquareRowProps {
    cell: Cell;
    rowNum: number
    colors: colors
    handleSquareClick: Function
}

export interface colors {
    playerColor: string, machineColor: string
}

export interface squareInfo {
    colors: colors
    rowNum: number
    squareId: number
}

function areEqual(prevProps: SquareRowProps, nextProps: SquareRowProps) {
    return prevProps.cell.backgroundColor === nextProps.cell.backgroundColor;
}

const Square: FC<SquareRowProps> = ({
    cell,
    rowNum,
    colors,
    handleSquareClick

}) => {
    const dispatch = useAppDispatch()
    const { playerMusic, opponentMusic } = useAppSelector(state => state.audio)

    //increment scores based on bgColor
    useEffect(() => {
        if (cell.backgroundColor === colors.playerColor) {
            playerMusic.play()
            dispatch(incrementPlayerScore())
            dispatch(incrementTotalPlayerPoints())
        } else if (cell.backgroundColor === colors.machineColor) {
            opponentMusic.play()
            dispatch(incrementMachineScore())
            dispatch(incrementTotalMachinePoints())
        }

    }, [cell.backgroundColor]);


    const squareClicked = () => {

        handleSquareClick(rowNum, cell.index, colors.playerColor, colors.machineColor)
    };

    return (
        <td
            className="color"
            key={cell.index}
            style={{ "--color": cell.backgroundColor } as React.CSSProperties}
            onClick={squareClicked}
        >
            <span id={`${cell.index}`} className="square"></span>
        </td>
    );
};

export default memo(Square, areEqual);
