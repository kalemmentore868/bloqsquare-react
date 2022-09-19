import React, { FC, useState, useContext } from 'react'
import Logo from '../Logo'
import Heading from '../homeScreenComponents/Heading'
import ColorPicker from '../homeScreenComponents/ColorPicker'
import Versus from '../Versus'
import Button from '../Button'
import { useGameContext } from '../../Context/GameContext'

// interface homeProps {
//   startGame: Function;
// }

const HomeScreen = () => {
  const [color, setColor] = useState("#ff0000")
  const { gameProperties, setGameProperties } = useGameContext();

  const choseColor = (colorPicked: string) => {
    setColor(colorPicked)
  }

  function invertHex(hex: string) {
    hex = hex.substring(1);
    let newHex = (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
    return `#${newHex}`;
  }

  let machineColor = invertHex(color)

  const play = () => {

    setGameProperties({
      playerColor: color,
      machineColor: machineColor,
      screen: 2

    })
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
              <Versus colorPicked={color} machineColor={machineColor} />
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