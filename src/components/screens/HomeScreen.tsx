import Logo from "../Logo";
import Heading from "../homeScreenComponents/Heading";
import ColorPicker from "../homeScreenComponents/ColorPicker";
import Versus from "../Versus";
import Button from "../Button";
import { useAppSelector, useAppDispatch } from "../../redux/redux-hooks";
import { setPlayerColor } from "../../redux/player";
import { setMachineColor } from "../../redux/machine";
import { setScreen } from "../../redux/screen";
// import { setComputerSpeed, setCountDown, setRatio } from "../../redux/gameData";


const HomeScreen = () => {
  const player = useAppSelector((state) => state.player);
  const machine = useAppSelector((state) => state.machine);
  const dispatch = useAppDispatch();

  //Function to make it easy to adjust game settings
  // const setUpGame = (timerCountdown: number, computerSpeed: number, ratio = { ratioToWinRound: 0.75, ratioDuration: 5000 }
  // ) => {
  //   dispatch(setCountDown(timerCountdown))
  //   dispatch(setComputerSpeed(computerSpeed))
  //   dispatch(setRatio(ratio))
  // }


  function invertHex(hex: string) {
    hex = hex.substring(1);
    let newHex = (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
    return `#${newHex}`;
  }

  const choseColor = (colorPicked: string) => {
    dispatch(setPlayerColor(colorPicked));
    dispatch(setMachineColor(invertHex(player.chosenColor)));
  };

  const play = () => {
    dispatch(setScreen(2));
  };

  return (
    <section className="home">
      <header>
        <Logo />
        <Heading />
      </header>
      <article>
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <ColorPicker choseColor={choseColor} value={player.chosenColor} />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Versus
                colorPicked={player.chosenColor}
                machineColor={machine.chosenColor}
              />
            </div>
          </div>
          <div className="row">
            <div className="center-align col s12" onClick={play}>
              <Button text="play" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeScreen;
