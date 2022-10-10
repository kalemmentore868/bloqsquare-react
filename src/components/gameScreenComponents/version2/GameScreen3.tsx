import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/redux-hooks";
import GameBoard2 from './GameBoard2'
import GameInfo from './GameInfo2'

const GameScreen2 = () => {
    const gameData = useAppSelector((state) => state.gameData);




    return (
        <section className='game'>
            <GameInfo gameData={gameData} />
            <GameBoard2 gameData={gameData} />
        </section>
    )
}

export default GameScreen2