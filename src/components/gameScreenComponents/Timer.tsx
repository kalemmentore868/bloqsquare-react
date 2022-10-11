import { memo, FC, useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setScreen } from "../../redux/screen";
import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";
import { incrementLevel, LevelData, setGameState } from "../../redux/gameData";

interface countdownProps {
    minutes: number;
    seconds: number;
    milliseconds: number;
}

interface timer {
    playerPoints: number
    levelData: LevelData
}

function areEqual(prevProps: timer, nextProps: timer) {
    {
        return prevProps.levelData.level === nextProps.levelData.level
    }
}

const Timer: FC<timer> = ({ levelData, playerPoints }) => {
    const { bgMusic, endAudio } = useAppSelector((state) => state.audio);
    const { gameState } = useAppSelector(state => state.gameData)
    const dispatch = useAppDispatch();
    const { level } = levelData



    const clockRef = useRef();
    // @ts-ignore
    const handleStart = () => clockRef.current.start();
    // @ts-ignore
    const handleStop = () => clockRef.current.stop();

    let time: number = Date.now() + 30000

    //for bg music
    useEffect(() => {

        let timer: number;
        setTimeout(() => {
            timer = window.setInterval(() => bgMusic.play(), 2000);
            handleStart();
        }, 300);


        return () => {
            return clearInterval(timer);
        };
    }, [level]);

    //called at the end of each level
    useEffect(() => {
        if (gameState === "end") {
            handleStop()
            if (playerPoints >= 0) {
                if (level === 7) endGame()
                dispatch(incrementLevel())
                dispatch(setPlayerScore(0))
                dispatch(setMachineScore(0))
            } else {
                dispatch(setScreen(4))
            }
            dispatch(setGameState("start"))
        }


    }, [gameState])


    const endGame = () => {
        endAudio.play();
        dispatch(setScreen(3));
    };


    const renderer = ({ minutes, seconds, milliseconds }: countdownProps) => {
        return (
            <time>
                {minutes < 10 ? "0" + minutes : minutes} :
                {seconds < 10 ? "0" + seconds : seconds} :
                {milliseconds < 100
                    ? "0".concat(Math.round(milliseconds / 10).toString())
                    : Math.round(milliseconds / 10)}
            </time>
        );
    };

    return (
        <div className="col s12">
            <div className="clock pink-text silom">
                {" "}
                <Countdown
                    ref={clockRef}
                    date={time}
                    intervalDelay={0}
                    precision={2}
                    renderer={renderer}
                    onComplete={() => dispatch(setGameState("end"))}
                    autoStart={false}
                />
            </div>
        </div>
    );
};

export default memo(Timer, areEqual);
// export default Timer