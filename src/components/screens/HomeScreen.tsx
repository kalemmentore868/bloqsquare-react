import Logo from '../Logo'
import Heading from '../homeScreenComponents/Heading'
import ColorPicker from '../homeScreenComponents/ColorPicker'
import Versus from '../Versus'
import Button from '../Button'
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks'
import { setPlayerColor } from '../../redux/player'
import { setMachineColor } from '../../redux/machine'
import { incrementScreen } from '../../redux/screen'


const HomeScreen = () => {
  const player = useAppSelector((state) => state.player)
  const machine = useAppSelector((state) => state.machine)

  const dispatch = useAppDispatch()


  function invertHex(hex: string) {
    hex = hex.substring(1);
    let newHex = (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
    return `#${newHex}`;
  }

  const choseColor = (colorPicked: string) => {
    dispatch(setPlayerColor(colorPicked))
    dispatch(setMachineColor(invertHex(player.chosenColor)))
  }



  const play = () => {

    dispatch(incrementScreen())

  }



  return (
    <section>
      <header>
        <Logo />
        <Heading />
      </header>
      <article>
        <div className='container'>
          <div className="row">
            <div className="col s12 center-align">
              <ColorPicker choseColor={choseColor} />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Versus colorPicked={player.chosenColor} machineColor={machine.chosenColor} />
            </div></div>
          <div className="row">
            <div className="center-align col s12" onClick={play}>
              <Button text="play" />
            </div></div>
        </div>

      </article>
    </section>
  )
}

export default HomeScreen