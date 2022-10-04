import React, { FC, useEffect, useState, useRef, memo } from 'react'
import { useGameContext } from '../../Context/GameContext';
const useCountdown = (initialTimer, initialPlaying = false) => {
    const milisecond = useRef(initialTimer * 1000);
    const previous = useRef(milisecond);
    const [timer, setTimer] = useState(initialTimer);
    const [isPlaying, setIsPlaying] = useState(initialPlaying);

    useEffect(() => {
        if (!isPlaying || milisecond.current <= 0) return;

        let effectInitialMs = milisecond.current;
        let effectInitialTimeStamp, handle;

        const step = (timestampMs) => {
            if (effectInitialTimeStamp === undefined)
                effectInitialTimeStamp = timestampMs;
            const elapsed = timestampMs - effectInitialTimeStamp;
            milisecond.current = effectInitialMs - elapsed;

            if (milisecond.current <= 0) {
                setTimer(0);
                console.log("cancelAnimationFrame(zero)", handle, milisecond.current);
                cancelAnimationFrame(handle);
            } else {
                const seconds = Math.floor(milisecond.current / 1000);
                const isUpdate = seconds !== Math.floor(previous.current / 1000);
                previous.current = milisecond.current;

                if (isUpdate) {
                    setTimer(seconds);
                }

                if (isPlaying) {
                    handle = window.requestAnimationFrame(step);
                }
            }
        };

        handle = window.requestAnimationFrame(step);

        return () => {
            console.log("cancelAnimationFrame(pause)", handle, milisecond.current);
            cancelAnimationFrame(handle);
        };
    }, [isPlaying]);

    return [timer, isPlaying, setIsPlaying];
};


const Timer2 = () => {
    const [clockTime, isPlaying, setIsPlaying] = useCountdown(1 * 60, true);

    const convertTime = (count: number) => {
        let hours = Math.floor(count / 3600);
        let minutes = Math.floor(count / 60) - hours * 60;
        let seconds = parseFloat(count % 60).toFixed(0);
        let milliseconds = Math.round(count)
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;
        return `${minutes}:${seconds}:${milliseconds}`;
    };



    return (

        <div className="col s12"><div className="clock pink z-depth-2"><time>{convertTime(clockTime)}</time></div></div>


    )
}

export default memo(Timer2)