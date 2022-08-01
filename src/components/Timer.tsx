import React, { FC, useEffect, useState } from 'react'

interface timerProps {
    gameOver: Function
}

const Timer: FC<timerProps> = React.memo(({ gameOver }) => {
    const [seconds, setSeconds] = useState(40);
    const [minutes, setMinutes] = useState(0);
	const timeSFx = new Audio('./audio/background-music.wav');

    let timer: any;
    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds - 1)
        
			if(seconds % 2 == 0) timeSFx.play();
        
            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
            }

            if (minutes === 0 && seconds === 0) {
                gameOver()
            }
        }, 600)

        return () => clearInterval(timer)
    })



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time>00:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</time></div></div>


    )
})

export default Timer