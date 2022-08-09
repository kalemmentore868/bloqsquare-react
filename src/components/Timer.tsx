import React, { FC, useEffect, useState, useRef } from 'react'

interface timerProps {
    gameOver: Function
}

const Timer: FC<timerProps> = ({ gameOver }) => {
    const [seconds, setSeconds] = useState(40);
    const [minutes, setMinutes] = useState(0);
    const [milliseconds, setMilliseconds] = useState(60);
    const timeSFx = new Audio('./audio/background-music.wav');

    const requestRef: any = useRef()
    const previousTimeRef: any = useRef()

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current

            setMilliseconds((prevValue: number) => {
                let newValue = prevValue - 1
                if (newValue === 0) {
                    setSeconds((secsValue) => {
                        // if (secsValue === 0) gameOver()
                        return secsValue - 1
                    })
                    return 60
                }
                return newValue
            })

            // if (milliseconds <= 0) {

            //     if (seconds % 2 == 0) timeSFx.play();
            //     if (seconds === 0) {
            //         setMinutes(prevValue => prevValue - 1)
            //         setSeconds(59)
            //     }
            //     if (minutes === 0 && seconds === 0) {
            //         gameOver()
            //     }
            // }
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    let timer: any;
    useEffect(() => {

        // timer = setInterval(() => {
        //     setSeconds(seconds - 1)

        //     if (seconds % 2 == 0) timeSFx.play();

        //     if (seconds === 0) {
        //         setMinutes(minutes - 1)
        //         setSeconds(59)
        //     }

        //     if (minutes === 0 && seconds === 0) {
        //         gameOver()
        //     }
        // }, 600)

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current)
    }, [])



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}:{milliseconds < 10 ? "0" + milliseconds : milliseconds}</time></div></div>


    )
}

export default Timer