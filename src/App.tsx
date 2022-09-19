import React, { useState } from 'react';
import GameOverScreen from './components/screens/GameOverScreen';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import { GameContext } from './Context/GameContext'
import Grid2 from './helpers/Grid2';
import Player from './helpers/Player';


function App() {
  const [gameObj, setGameObj] = useState({
    player: new Player("red"),
    machine: new Player("blue", true),
    screen: 1,
  })
  const { screen } = gameObj

  return (
    <main className="App container valign-wrapper">
      <GameContext.Provider value={{ gameObj, setGameObj }}>
        {screen === 1 && <HomeScreen />}
        {screen === 2 && <GameScreen />}
        {screen === 3 && <GameOverScreen />}
      </GameContext.Provider  >
    </main>

  );
}

export default App;
