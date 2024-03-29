import { FC, useEffect, useState, useCallback, useRef } from "react";
import Grid2 from "../../helpers/Grid2";
import { GameData, setGameState } from "../../redux/gameData";
import { useAppSelector, useAppDispatch } from "../../redux/redux-hooks";
import { setScreen } from "../../redux/screen";
import TableRow from "./TableRow";
import { isMobile } from "react-device-detect";

interface TableRowProps {
  gameData: GameData;
}

const GameBoard: FC<TableRowProps> = ({ gameData }) => {
  const { levels, currentLevel, gameSettings, gameState } = gameData;
  let { computerSpeed, ratio } = gameSettings;
  const { ratioToWinRound, ratioDuration } = ratio;
  const levelData = levels[currentLevel];
  const { x, y } = levelData.grid;
  const [board, setBoard] = useState(new Grid2(x, y).rowList);
  const player = useAppSelector((state) => state.player);
  const machine = useAppSelector((state) => state.machine);
  const colors = {
    playerColor: player.chosenColor,
    machineColor: machine.chosenColor,
  };
  const dispatch = useAppDispatch();
  const playerRatio = useRef(0);
  const machineRatio = useRef(0);

  if (isMobile) computerSpeed = computerSpeed / 1.5;

  useEffect(() => {
    setBoard(new Grid2(x, y).rowList);
  }, [levelData]);

  const handleSquareClick = useCallback(
    (
      rowIndex: number,
      squareIndex: number,
      playerColor: string,
      opponentColor: string,
      machineClicked: boolean
    ) => {
      setBoard((prevValue) => {
        return prevValue.map((row, index) => {
          if (index === rowIndex) {
            return row.map((cell) => {
              if (cell.index === squareIndex) {
                if (cell.isClicked) {
                  if (cell.backgroundColor === opponentColor) {
                    return {
                      ...cell,
                      backgroundColor: "transparent",
                      isClicked: false,
                    };
                  } else {
                    return cell; //here is where to put d code for if a player click his own square
                  }
                } else {
                  return {
                    ...cell,
                    backgroundColor: playerColor,
                    isClicked: true,
                  };
                }
              } else {
                return cell;
              }
            });
          } else {
            return row;
          }
        });
      });
    },
    []
  );

  //to make computer click square
  useEffect(() => {
    const time = setInterval(() => {
      if (gameState === "start") {
        const randomSquare = getRandomInt(0, y * x);
        const rowStart = Math.floor(randomSquare / x);
        handleSquareClick(
          rowStart,
          randomSquare,
          colors.machineColor,
          colors.playerColor,
          true
        );
      }
    }, computerSpeed - currentLevel * 80);
    return () => clearInterval(time);
  }, [handleSquareClick, levelData, gameState]);

  //to win/lose via % of squares controlled
  useEffect(() => {
    let totalSquares = board.reduce((a, b) => a.concat(b), []);

    let numberOfTotalSquares = totalSquares.length;
    let playerSquaresCount = 0;
    let machineSquaresCount = 0;

    totalSquares.map((cell) => {
      if (cell.backgroundColor === player.chosenColor) playerSquaresCount++;
      if (cell.backgroundColor === machine.chosenColor) machineSquaresCount++;
    });

    playerRatio.current = playerSquaresCount / numberOfTotalSquares;

    if (playerRatio.current >= ratioToWinRound) {
      setTimeout(() => {
        if (playerRatio.current >= ratioToWinRound) {
          dispatch(setGameState("end"));
          playerRatio.current = 0;
        }
      }, ratioDuration);
    }

    machineRatio.current = machineSquaresCount / numberOfTotalSquares;

    if (machineRatio.current >= ratioToWinRound) {
      setTimeout(() => {
        if (machineRatio.current >= ratioToWinRound) {
          dispatch(setGameState("end"));
          dispatch(setScreen(4));
          machineRatio.current = 0;
        }
      }, ratioDuration);
    }
  }, [board]);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="game-play">
      <div className={`board grid-${x}`}>
          {board.map((row, i) => {
                  return (
                    <TableRow
                      key={i}
                      row={row}
                      rowNum={i}
                      colors={colors}
                      handleSquareClick={handleSquareClick}
                    />
                  );
                })}
        </div>
      </div>
  );
};

export default GameBoard;
