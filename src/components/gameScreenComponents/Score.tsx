import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "../../redux/redux-hooks";
import Grid2 from "../../helpers/Grid2";

const Score = () => {
  const [score, setScore] = useState(0);
  const player = useAppSelector((state) => state.player);
  const playerColor = player.chosenColor;
  const grid = useRef(new Grid2(8, 8));

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      let square = event.target as HTMLSpanElement;

      let squarePressed = grid.current.allCells[parseInt(square.id)];

      const opponentSquareClicked =
        getComputedStyle(square).getPropertyValue("--color") === "transparent";
      const blankSquareClickedOrOwnSquareClicked =
        getComputedStyle(square).getPropertyValue("--color") === playerColor;
      const blackSquareClicked =
        blankSquareClickedOrOwnSquareClicked &&
        squarePressed.isClicked === false;

      if (square.tagName === "SPAN" && blackSquareClicked) {
        setScore((prev) => prev + 1);
        squarePressed.isClicked = true;
      } else if (
        square.tagName === "SPAN" &&
        opponentSquareClicked &&
        squarePressed.isClicked === true
      ) {
        squarePressed.isClicked = false;
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="center-align col s12">
      <div className="points yellow-text silom">
        <div>
          <span id="points">{score}</span>pts.
        </div>
      </div>
    </div>
  );
};

export default Score;
