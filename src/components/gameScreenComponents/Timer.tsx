import { memo, FC, useEffect, useRef } from "react";
import Countdown from "react-countdown";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { incrementScreen } from "../../redux/screen";
import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";
import { incrementLevel, LevelData } from "../../redux/gameData";

interface countdownProps {
    minutes: number;
    seconds: number;
    milliseconds: number;
}

interface timer {
    scores: {
        playerScore: number;
        machineScore: number;
    };
    levelData: LevelData
}

const Timer: FC<timer> = ({ scores, levelData }) => {
    const { bgMusic, endAudio } = useAppSelector((state) => state.audio);
    const dispatch = useAppDispatch();
    const { level } = levelData

    const clockRef = useRef();
    // @ts-ignore
    const handleStart = () => clockRef.current.start();
    // const handlePause = () => clockRef.current.pause();

    useEffect(() => {
        let timer: number;

        setTimeout(() => {
            timer = window.setInterval(() => bgMusic.play(), 2000);
            handleStart();
        }, 300);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const endGame = () => {
        endAudio.play();
        dispatch(incrementScreen());
        dispatch(setMachineScore(scores.machineScore));
        dispatch(setPlayerScore(scores.playerScore));
    };

    const endLevel = () => {
        if (level === 7) endGame()
        dispatch(incrementLevel())
    }

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
                    date={Date.now() + 3000}
                    intervalDelay={0}
                    precision={2}
                    renderer={renderer}
                    onComplete={endLevel}
                    autoStart={false}
                />
            </div>
        </div>
    );
};

export default memo(Timer);
