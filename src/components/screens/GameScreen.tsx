import { useAppSelector } from "../../redux/redux-hooks";
import GameBoard2 from '../gameScreenComponents/GameBoard'
import GameInfo from '../gameScreenComponents/GameInfo'


const GameScreen = () => {
    const gameData = useAppSelector((state) => state.gameData);




    return (
        <section className='game'>
            <GameInfo gameData={gameData} />
            <GameBoard2 gameData={gameData} />
        </section>
    )
}

export default GameScreen