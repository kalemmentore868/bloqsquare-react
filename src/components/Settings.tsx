import React, { useState } from 'react'
import { BsFillGearFill } from "react-icons/bs"
import { ImCross } from "react-icons/im"
import { setComputerSpeed, setCountDown, setRatio } from "../redux/gameData";
import { useAppDispatch } from '../redux/redux-hooks';
import Logo from './Logo';

const Settings = () => {
    const [menuOpen, setMenu] = useState(false);
    const dispatch = useAppDispatch()


    const setUpGame = (timerCountdown: number, computerSpeed: number, ratio = { ratioToWinRound: 0.75, ratioDuration: 5000 }
    ) => {
        dispatch(setCountDown(timerCountdown))
        dispatch(setComputerSpeed(computerSpeed))
        dispatch(setRatio(ratio))
    }



    return (
        <>

            <div>

                <BsFillGearFill className="settings" onClick={() => setMenu(true)} color='#ff4081' size={35} title="settings" />

                {menuOpen && (
                    <div className="modal">
                        <div className='container modal-content'>
                            <ImCross className="cross" onClick={() => setMenu(false)} color='#fdd835' size={25} title="close" />
                            <Logo />
                            <div className="difficulty">
                                <div>Difficulty</div>
                                <div className='difficulty-box'>
                                    <button className="button-3" role="button">Easy</button>
                                    <button className="button-3" role="button">Medium</button>
                                    <button className="button-3" role="button">Hard</button>

                                </div>
                            </div>

                            <div className="difficulty">
                                <div>Timer</div>
                                <div className='difficulty-box'>
                                    <button className="button-3" role="button">15s</button>
                                    <button className="button-3" role="button">30s</button>
                                    <button className="button-3" role="button">45s</button>

                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default Settings