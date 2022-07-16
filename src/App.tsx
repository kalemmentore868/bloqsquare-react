import React, {useState} from 'react';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import Player from './helpers/Player';

function App() {
  const [screen, setScreen] = useState(1)
  const [player, setPlayer] = useState(new Player("red"))
  const [machine, setMachine] = useState(new Player("blue", false))

  const startGame = (newPlayer:Player, newMachine:Player) => {
    setPlayer(newPlayer);
    setMachine(newMachine);
    setScreen(2)
  }

  return (
    <div className="App container valign-wrapper">
      {screen === 1 && <HomeScreen startGame={startGame} />}
      {screen === 2 && <GameScreen player={player} machine={machine}/> }
    </div>
  );
}

export default App;
