import { FC } from "react";
import { GameData } from "../../redux/gameData";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import Button from "../Button"

interface gameInfo {
  scores: {
    playerScore: number;
    machineScore: number;

  }
  gameData: GameData
}

const GameInfo: FC<gameInfo> = ({ scores, gameData }) => {
  const { currentLevel } = gameData
  const levelData = gameData.levels[currentLevel]
  const { level } = levelData
  return (
    <article>
      <header>
        <Logo />
      </header>
      <header className="container-fluid">
        <div className="dashboard row">
          <Timer scores={scores} levelData={levelData} />
          <Score />
          <Button text={`Level: ${level}`} />
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
