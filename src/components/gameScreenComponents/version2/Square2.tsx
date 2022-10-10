import React, { FC, useEffect, memo } from "react";
import Cell from "../../../helpers/Cell";
import { incrementMachineScore } from "../../../redux/machine";
import { incrementPlayerScore } from "../../../redux/player";
import { useAppSelector, useAppDispatch } from "../../../redux/redux-hooks";



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

function generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}

function areEqual(prevProps: SquareRowProps, nextProps: SquareRowProps) {
    return prevProps.cell.backgroundColor === nextProps.cell.backgroundColor;
}

const Square2: FC<SquareRowProps> = ({
    cell,
    rowNum,
    colors,
    handleSquareClick

}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (cell.backgroundColor === colors.playerColor) {
            dispatch(incrementPlayerScore())
        } else if (cell.backgroundColor === colors.machineColor) {
            dispatch(incrementMachineScore())
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

export default memo(Square2, areEqual);
