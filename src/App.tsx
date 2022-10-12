import React, { Suspense } from "react";
import Help from './components/Help';

import HomeScreen from './components/screens/HomeScreen';
import LoadingScreen from './components/screens/LoadingScreen';
import { useAppSelector } from './redux/redux-hooks';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const GameOverScreen = React.lazy(() => import("./components/screens/GameOverScreen"));
const GameScreen = React.lazy(() => import("./components/screens/GameScreen"));
const YouLoseScreen = React.lazy(() => import("./components/screens/YouLoseScreen"));

const Loader = () => {
  return (
    <ClimbingBoxLoader
      color="#d500f9"
      loading={true}
      size={25}
      aria-label="Loading Spinner"
    />
  )
}


function App() {

  const { screen } = useAppSelector((state) => state)


  return (
    <main className="App container valign-wrapper">
      {screen.value === 0 && <LoadingScreen />}
      {screen.value === 1 && <HomeScreen />}
      <Suspense fallback={<Loader />}>
        {screen.value === 2 && <GameScreen />}
        {screen.value === 3 && <GameOverScreen />}
        {screen.value === 4 && <YouLoseScreen />}
      </Suspense>
      <Help />
    </main>

  );
}

export default App;
