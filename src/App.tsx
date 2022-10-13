import { useEffect, lazy, Suspense, CSSProperties } from 'react';
import Help from './components/Help';
import InstallPWA from './components/InstallPwa';

import HomeScreen from './components/screens/HomeScreen';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { LevelData, setGameData, setLastLevel } from './redux/gameData';
import { useAppDispatch, useAppSelector } from './redux/redux-hooks';
const GameScreen = lazy(() => import('./components/screens/GameScreen'));
const GameOverScreen = lazy(() => import('./components/screens/GameOverScreen'));
const YouLoseScreen = lazy(() => import('./components/screens/YouLoseScreen'));


interface ApiData {
  response: {
    data: LevelData[];
  };
}

function App() {


  const { screen } = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(() => {


    fetchGameData()


  }, []);

  const fetchGameData = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_GAMEDATA_URL
      );
      const data: ApiData = await response.json();
      let levels = data.response.data
      dispatch(setGameData(levels))
      dispatch(setLastLevel(levels.length))
      localStorage.setItem("levels", JSON.stringify(levels))

    } catch (error) {
      let levelsString = localStorage.getItem("levels");
      let levels = JSON.parse(levelsString)
      dispatch(setGameData(levels))
      dispatch(setLastLevel(levels.length))
    }
  }

  const override: CSSProperties = {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    width: "100%"
  };




  return (
    <main className="App container valign-wrapper">

      {screen.value === 1 && <HomeScreen />}
      <Suspense fallback={<ClimbingBoxLoader
        color="#d500f9"
        loading
        size={50}
        aria-label="Loading Spinner"
        cssOverride={override}
      />}>
        {screen.value === 2 && <GameScreen />}
        {screen.value === 3 && <GameOverScreen />}
        {screen.value === 4 && <YouLoseScreen />}
      </Suspense>
      <InstallPWA />
      <Help />
    </main>

  );
}

export default App;
