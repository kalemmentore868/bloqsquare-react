import React, { FC, useState, useEffect } from "react";
import { useGameContext } from "../../Context/GameContext";
import Cell from "../../helpers/Cell";
import Player from "../../helpers/Player";
import { useAppSelector } from "../../redux/redux-hooks";



interface SquareRowProps {
    cell: Cell;
    incrementMachineScore: Function;
    incrementPlayerScore: Function;
    callOpponentSound: Function;
    callPlayerSound: Function;
}

function generateRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}

const Square: FC<SquareRowProps> = ({
    cell,
    incrementMachineScore,
    incrementPlayerScore
}) => {
    const [cellSquare, setCellSquare] = useState(cell);
    // const { gameProperties } = useGameContext();

    // const { playerColor, machineColor } = gameProperties;

    const player = useAppSelector((state) => state.player)
    const machine = useAppSelector((state) => state.machine)
    const { playerMusic, opponentMusic } = useAppSelector(state => state.audio)

    //for a random square to be coloured
    useEffect(() => {
        const computerInterval = setInterval(() => {
            const randomIndex = generateRandomInteger(64);

            if (cellSquare.index === randomIndex) {
                handleSquareClicked(machine, player);
            }
        }, 300);

        return () => clearInterval(computerInterval);
    }, []);

    const handleSquareClicked = (player: Player, opponent: Player) => {
        setCellSquare(prevState => {
            if (prevState.isClicked) {
                if (prevState.backgroundColor === opponent.chosenColor) {
                    return { ...prevState, backgroundColor: "transparent", isClicked: false }
                } else {
                    // if (!player.isComputer) decrementPlayerScore()
                    return prevState //here is where to put d code for if a player click his own square
                }
            } else {
                if (player.isComputer) {
                    // opponentFx.play()
                    incrementMachineScore()
                    // opponentMusic.play()
                } else {
                    // youFx.play()
                    playerMusic.play()
                    incrementPlayerScore()
                }
                return { ...prevState, backgroundColor: player.chosenColor, isClicked: true }
            }
        })
    }


    const squareClicked = () => {
        handleSquareClicked(player, machine);
    };

    return (
        <td
            className="color"
            key={cellSquare.index}
            style={{ "--color": cellSquare.backgroundColor } as React.CSSProperties}
            onClick={squareClicked}
        >
            <span id={`${cellSquare.index}`} className="square"></span>
        </td>
    );
};

export default Square;
