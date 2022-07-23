import React, { FC, useEffect, useState } from 'react'

interface timerProps {
    gameOver: Function
}

const Timer: FC<timerProps> = ({ gameOver }) => {
    const [seconds, setSeconds] = useState(30);
    const [minutes, setMinutes] = useState(1);

    let timer: any;
    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds - 1)

            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
            }

            if (minutes === 0 && seconds === 0) {
                gameOver()
            }
        }, 1000)

        return () => clearInterval(timer)
    })



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time>00:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</time></div></div>


    )
}

export default React.memo(Timer)