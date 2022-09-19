import React, { FC, useEffect, useState, useRef } from 'react'
import { useGameContext } from '../../Context/GameContext';



const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(0);
    const [milliseconds, setMilliseconds] = useState(59);
    const timeSFx = new Audio('./audio/background-music.wav');

    const { gameObj, setGameObj } = useGameContext();

    let timer: any;
    useEffect(() => {

        timer = setTimeout(() => {
            setMilliseconds(milliseconds - 1)
            if (milliseconds === 0) {

                setSeconds(seconds - 1)
                setMilliseconds(59)

                if (seconds % 2 == 0) timeSFx.play();

                if (seconds === 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }

                if (minutes === 0 && seconds === 0) {
                    setGameObj({ ...gameObj, screen: 3 })
                }
            }

        }, 50)

        return () => { clearInterval(timer) }

    }, [])



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}:{milliseconds < 10 ? "0" + milliseconds : milliseconds}</time></div></div>


    )
}

export default Timer