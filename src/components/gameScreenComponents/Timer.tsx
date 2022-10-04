import React, { FC, useEffect, useState, useRef, memo } from 'react'
import { useGameContext } from '../../Context/GameContext';
import Countdown from 'react-countdown';



const Timer = () => {
    // const [seconds, setSeconds] = useState(10);
    // const [minutes, setMinutes] = useState(0);
    // const [milliseconds, setMilliseconds] = useState(59);
    const timeSFx = new Audio('./audio/background-music.wav');
    const { gameProperties, setGameProperties } = useGameContext();


    // const requestRef = useRef();
    // const previousTimeRef = useRef();


    // const animate = (time: number) => {

    //     if (previousTimeRef.current != undefined) {
    //         const deltaTime = time - previousTimeRef.current;
    //         console.log((deltaTime / 0.01) % 100)


    //         setMilliseconds(prevValue => (prevValue - (deltaTime / 0.01) % 100))

    //         if (milliseconds <= 0) {


    //             setSeconds(prevValue => (prevValue - deltaTime * 0.01) % 100)
    //             setMilliseconds(59)

    //             if (seconds % 2 <= 0) timeSFx.play();

    //             if (seconds <= 0) {
    //                 setMinutes(prevValue => prevValue - 1)
    //                 setSeconds(59)
    //             }

    //             if (minutes <= 0 && seconds <= 0) {
    //                 setGameProperties({ ...gameProperties, screen: 3 })
    //             }
    //         }




    //     }

    //     previousTimeRef.current = time;
    //     requestRef.current = requestAnimationFrame(animate);
    // }



    // useEffect(() => {

    //     requestRef.current = requestAnimationFrame(animate)


    //     return () => cancelAnimationFrame(requestRef.current)

    // }, [])


    const renderer = ({ minutes, seconds, milliseconds }) => {
        if (milliseconds >= 1000) console.log("yes")
        return <span>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}:{milliseconds < 100 ? "0" + milliseconds : milliseconds < 10 ? "00" + milliseconds : milliseconds}</span>;
    };



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time> <Countdown
            date={Date.now() + 10000 * 10}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
        /></time></div></div>


    )
}

export default memo(Timer)