import { FC } from "react";
import { GameData } from "../../../redux/gameData";
import Logo from "../../Logo";
import Score from "./Score2";
import Timer from "./Timer2";
import Button from "../../Button"

interface gameInfo {
    gameData: GameData
}

const GameInfo: FC<gameInfo> = ({ gameData }) => {
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
                    <Timer levelData={levelData} />
                    <Score />
                    <Button text={`Level: ${level}`} />
                </div>
            </header>
        </article>
    );
};

export default GameInfo;