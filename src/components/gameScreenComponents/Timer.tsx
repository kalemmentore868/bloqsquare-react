import React, { memo, FC } from "react";
import { useGameContext } from "../../Context/GameContext";
import Countdown from "react-countdown";



interface countdownProps {
    minutes: number;
    seconds: number;
    milliseconds: number;
}

interface timer {
    stopBgMusic: Function
}

const Timer: FC<timer> = ({ stopBgMusic }) => {

    const { gameProperties, setGameProperties } = useGameContext();

    const endGame = () => {
        stopBgMusic()
        setGameProperties({ ...gameProperties, screen: 3 })
    }


    const renderer = ({ minutes, seconds, milliseconds }: countdownProps) => {

        return (
            <time>
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}:
                {milliseconds < 100
                    ? "0".concat(Math.round(milliseconds / 10).toString())
                    : Math.round(milliseconds / 10)}
            </time>
        );
    };

    return (
        <div className="col s12">
            <div className="clock pink-text">
                {" "}
                <Countdown
                    date={Date.now() + 25000}
                    intervalDelay={0}
                    precision={3}
                    renderer={renderer}
                    onComplete={endGame}
                />
            </div>
        </div>
    );
};

export default memo(Timer);
