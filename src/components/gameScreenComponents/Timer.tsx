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

    levelData: LevelData
}

function areEqual(prevProps: timer, nextProps: timer) {
    {
        return prevProps.levelData.level === nextProps.levelData.level
    }
}

const Timer: FC<timer> = ({ levelData }) => {
    const { bgMusic, endAudio } = useAppSelector((state) => state.audio);
    const dispatch = useAppDispatch();
    const { level } = levelData

    const clockRef = useRef();
    // @ts-ignore
    const handleStart = () => clockRef.current.start();
    // @ts-ignore
    const handleStop = () => clockRef.current.stop();

    useEffect(() => {
        let timer: number;

        setTimeout(() => {
            timer = window.setInterval(() => bgMusic.play(), 2000);
            handleStart();
        }, 150);


        return () => {
            clearInterval(timer);
        };
    }, [level]);

    const endGame = () => {
        endAudio.play();
        dispatch(incrementScreen());
    };

    const endLevel = () => {
        if (level === 7) {
            endGame()
        } else {
            handleStop()

            dispatch(setPlayerScore(0))
            dispatch(setMachineScore(0))
        }
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
                    date={Date.now() + 50000}
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

export default memo(Timer, areEqual);