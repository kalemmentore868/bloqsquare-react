import React, { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useAppDispatch } from '../../redux/redux-hooks';
import { incrementScreen } from '../../redux/screen';
import Button from '../Button';

const LoadingScreen = () => {
    let [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const media = [
            "./audio/background-music.wav",
            "./audio/end.wav",
            "./audio/opponent.wav",
            "./audio/toggle-reverse.wav",
            "./audio/toggle.wav",
            "./audio/you.wav",
        ]

        cacheMedia(media)

    }, [])

    const cacheMedia = async (media: string[]) => {
        const promises = await media.map((src) => {
            return new Promise<void>(function (resolve, reject) {
                const audio = new Audio()
                audio.src = src;
                // @ts-ignore
                audio.onload = resolve()
                // @ts-ignore
                audio.onerror = reject()
            })
        })

        await Promise.all(promises)
        setLoading(false)
    }


    return (
        <div className='loading-screen'>



            {loading ?
                <ClimbingBoxLoader color="#d500f9" loading={loading} size={40} aria-label="Loading Spinner" />
                :
                <button onClick={() => dispatch(incrementScreen())} className="btn-larger  pink">start</button>
            }

        </div>
    )
}

export default LoadingScreen