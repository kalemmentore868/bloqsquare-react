import React, { memo } from 'react'
import { useGameContext } from '../../Context/GameContext';
import Countdown from 'react-countdown';

interface countdownProps {
    minutes: number;
    seconds: number;
    milliseconds: number
}


const Timer = () => {

    const timeSFx = new Audio('./audio/background-music.wav');
    const { gameProperties, setGameProperties } = useGameContext();




    const renderer = ({ minutes, seconds, milliseconds }: countdownProps) => {
        if (seconds % 2 === 0) timeSFx.play()
        return <time>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}:{milliseconds < 100 ? "0" + milliseconds : milliseconds < 10 ? "00" + milliseconds : milliseconds}</time>;
    };



    return (

        <div className="col s12"><div className="clock pink z-depth-2"> <Countdown
            date={Date.now() + 25000}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
            onComplete={() => setGameProperties({ ...gameProperties, screen: 3 })}
        /></div></div>


    )
}

export default memo(Timer)