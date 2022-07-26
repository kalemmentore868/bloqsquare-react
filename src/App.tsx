import React, { useState } from 'react';
import GameOverScreen from './components/screens/GameOverScreen';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import Player from './helpers/Player';


function App() {
  const [screen, setScreen] = useState(1)
  const [player, setPlayer] = useState(new Player("red"))
  const [machine, setMachine] = useState(new Player("blue", true))

  const startGame = (newPlayer: Player, newMachine: Player) => {
    setPlayer(newPlayer);
    setMachine(newMachine);
    setScreen(2)
  }

  const endGame = (playerScore: number, machineScore: number) => {
    setPlayer(prevState => ({
      ...prevState,
      totalPoints: playerScore
    }))
    setMachine(prevState => ({
      ...prevState,
      totalPoints: machineScore
    }))
    setScreen(3)
  }

  const restartGame = () => {
    setPlayer(new Player("#ff0000"))
    setMachine(new Player("#0000FF", true))
    setScreen(1)
  }

  return (
    <div className="App container valign-wrapper">
      {screen === 1 && <HomeScreen startGame={startGame} />}
      {screen === 2 && <GameScreen player={player} machine={machine} endGame={endGame} />}
      {screen === 3 && <GameOverScreen player={player} machine={machine} restartGame={restartGame} />}
    </div>
  );
}

export default App;
