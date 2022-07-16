import React, { FC, useState } from 'react'
import Logo from '../Logo'
import Heading from '../Heading'
import ColorPicker from '../ColorPicker'
import Versus from '../Versus'
import Button from '../Button'
import Help from '../Help'
import Player from '../../helpers/Player'

interface homeProps{
  startGame:Function;
}

const HomeScreen:FC<homeProps> = ({startGame}) => {
  const [color, setColor] = useState("#ff0000")

  const choseColor = (colorPicked:string) => {
    setColor(colorPicked)
  }

  function invertHex(hex:string) {
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
    <div className='container'>
        <Logo />
        <Heading text='Choose Your Color' headingStyle='home-screen-text' />
        <ColorPicker choseColor={choseColor}/>
        <Versus colorPicked={color} machineColor={machineColor}/>
        <span onClick={play}>
           <Button text="play" /> 
        </span>
        <Help />
    </div>
  )
}

export default HomeScreen