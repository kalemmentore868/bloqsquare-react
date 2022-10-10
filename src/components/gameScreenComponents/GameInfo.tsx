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
    const { level, grade } = levelData
    const player = useAppSelector(state => state.player)
    const dispatch = useAppDispatch()
    const [gamePlaying, setGamePlaying] = useState(true)

    useEffect(() => {
        if (!gamePlaying) {
            if (player.totalPoints >= grade) {
                dispatch(incrementLevel())
                dispatch(setPlayerScore(0))
                dispatch(setMachineScore(0))
            } else {
                dispatch(setScreen(4))
            }
        }


    }, [gamePlaying])

    useEffect(() => {
        setGamePlaying(true)
    }, [level])

    const endfOLevel = () => {
        setGamePlaying(false)
    }
    return (
        <article>
            <header>
                <Logo />
            </header>
            <header className="container-fluid">
                <div className="dashboard row">
                    <Timer levelData={levelData} endOfLevel={endfOLevel} />
                    <Score score={player.totalPoints} />
                    <Button text={`Level: ${level}`} />
                </div>
            </header>
        </article>
    );
};

export default GameInfo;