import { memo, FC, useEffect } from "react";
import Countdown from "react-countdown";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { incrementScreen } from "../../redux/screen";
import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";



interface countdownProps {
    minutes: number;
    seconds: number;
    milliseconds: number;
}

interface timer {
    scores: {
        playerScore: number;
        machineScore: number;
    }
}


const Timer: FC<timer> = ({ scores }) => {

    const { bgMusic } = useAppSelector(state => state.audio)
    const dispatch = useAppDispatch()
    useEffect(() => {
        bgMusic.play()
    }, [])

    const endGame = () => {
        bgMusic.stop()
        dispatch(incrementScreen())
        dispatch(setMachineScore(scores.machineScore))
        dispatch(setPlayerScore(scores.playerScore))

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
