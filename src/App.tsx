import React, { useState, useRef } from 'react';
import Help from './components/Help';
import GameOverScreen from './components/screens/GameOverScreen';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import { GameContext, useGameContext } from './Context/GameContext'
import Grid2 from './helpers/Grid2';
import Player from './helpers/Player';


function App() {

  const [gameProperties, setGameProperties] = useState({
    playerColor: "red",
    machineColor: "blue",
    screen: 1
  })

  const scores = useRef({ playerScore: 0, machineScore: 0 })

  const incrementPlayerScore = () => {
    scores.current.playerScore++
  }

  const incrementMachineScore = () => {
    scores.current.machineScore++
  }

  const { screen } = gameProperties
  if (screen === 1) {
    scores.current = { playerScore: 0, machineScore: 0 }
  }
  console.log(screen)

  return (
    <main className="App container valign-wrapper">
      <GameContext.Provider value={{ gameProperties, setGameProperties }}>
        {screen === 1 && <HomeScreen />}
        {screen === 2 && <GameScreen incrementPlayerScore={incrementPlayerScore} incrementMachineScore={incrementMachineScore} />}
        {screen === 3 && <GameOverScreen scores={scores.current} />}
      </GameContext.Provider  >
      <Help />
    </main>

  );
}

export default App;
