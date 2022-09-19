import GameBoard2 from '../gameScreenComponents/GameBoard2'
import GameInfo from '../gameScreenComponents/GameInfo'


const GameScreen = () => {
  return (
    <section className='game'>
      <GameInfo />
      <GameBoard2 />
    </section>
  )
}

export default GameScreen