import { FC } from "react";
import { GameData } from "../../redux/gameData";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import Button from "../Button"
import { useAppSelector } from "../../redux/redux-hooks";


interface gameInfo {
    gameData: GameData
}

const GameInfo: FC<gameInfo> = ({ gameData }) => {
    const { currentLevel, gameSettings } = gameData
    const { lastLevel, countDown } = gameSettings
    const levelData = gameData.levels[currentLevel]
    const { level } = levelData
    const player = useAppSelector(state => state.player)



    return (
        <article>
            <header>
                <Logo />
            </header>
            <header className="container-fluid">
                <div className="dashboard row">
                    <Timer levelData={levelData} lastLevel={lastLevel} countDown={countDown} playerPoints={player.totalPoints} />
                    <Score score={player.totalPoints} />
                    <Button text={`Level: ${level}`} />
                </div>
            </header>
        </article>
    );
};

export default GameInfo;