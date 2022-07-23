import React, { FC, useState } from 'react'
import Logo from '../Logo'
import Heading from '../Heading'
import ColorPicker from '../ColorPicker'
import Versus from '../Versus'
import Button from '../Button'
import Help from '../Help'
import Player from '../../helpers/Player'

interface homeProps {
  startGame: Function;
}

const HomeScreen: FC<homeProps> = ({ startGame }) => {
  const [color, setColor] = useState("#ff0000")

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
    const player = new Player(color)
    const machine = new Player(machineColor, true)
    startGame(player, machine)
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