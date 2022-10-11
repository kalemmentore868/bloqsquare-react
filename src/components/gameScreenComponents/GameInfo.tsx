import { FC, useEffect, useState } from "react";
import { GameData, incrementLevel } from "../../redux/gameData";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import Button from "../Button"
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setPlayerScore } from "../../redux/player";
import { setMachineScore } from "../../redux/machine";
import { setScreen } from "../../redux/screen";

interface gameInfo {
    gameData: GameData
}

const GameInfo: FC<gameInfo> = ({ gameData }) => {
    const { currentLevel } = gameData
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
                    <Timer levelData={levelData} playerPoints={player.totalPoints} />
                    <Score score={player.totalPoints} />
                    <Button text={`Level: ${level}`} />
                </div>
            </header>
        </article>
    );
};

export default GameInfo;