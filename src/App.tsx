import Help from './components/Help';
import InstallPWA from './components/InstallPwa';
import GameOverScreen from './components/screens/GameOverScreen';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoadingScreen from './components/screens/LoadingScreen';
import YouLoseScreen from './components/screens/YouLoseScreen';
import { useAppSelector } from './redux/redux-hooks';


function App() {

  const { screen } = useAppSelector((state) => state)


  return (
    <main className="App container valign-wrapper">
      {screen.value === 0 && <LoadingScreen />}
      {screen.value === 1 && <HomeScreen />}
      {screen.value === 2 && <GameScreen />}
      {screen.value === 3 && <GameOverScreen />}
      {screen.value === 4 && <YouLoseScreen />}
      <InstallPWA />
      <Help />
    </main>

  );
}

export default App;
