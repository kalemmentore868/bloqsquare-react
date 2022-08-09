import React, { FC, useState, useEffect } from 'react'
import Grid from '../helpers/Grid'
import Player from '../helpers/Player'


interface GameBoardProps {
  player: Player
  machine: Player
  incrementPlayerScore: Function
  decrementPlayerScore: Function
  incrementMachineScore: Function
}

function generateRandomInteger(max: number): number {
  return Math.floor(Math.random() * max);
}

const GameBoard: FC<GameBoardProps> = ({ player, machine, incrementPlayerScore, decrementPlayerScore, incrementMachineScore }) => {


  const [grid, setGrid] = useState(new Grid(8))
  const opponentFx = new Audio('./audio/opponent.wav')
  const youFx = new Audio('./audio/you.wav')

  let grid1 = grid.cells.slice(0, 8)
  let grid2 = grid.cells.slice(8, 16)
  let grid3 = grid.cells.slice(16, 24)
  let grid4 = grid.cells.slice(24, 32)
  let grid5 = grid.cells.slice(32, 40)
  let grid6 = grid.cells.slice(40, 48)
  let grid7 = grid.cells.slice(48, 56)
  let grid8 = grid.cells.slice(56, 64)


  const handleSquareClicked = (index: number, player: Player, opponent: Player) => {
    setGrid(prevState => ({
      ...prevState,
      cells: prevState.cells.map((cell) => {
        if (cell.index === index) {
          if (cell.isClicked) {
            if (cell.backgroundColor === opponent.chosenColor) {

              return { ...cell, backgroundColor: "transparent", isClicked: false }
            } else {
              if (!player.isComputer) decrementPlayerScore()
              return cell //here is where to put d code for if a player click his own square
            }
          } else {
            if (player.isComputer) {
              opponentFx.play()
              incrementMachineScore()
            } else {
              youFx.play()
              incrementPlayerScore()
            }

            return { ...cell, backgroundColor: player.chosenColor, isClicked: true }
          }
        } else {
          return cell
        }
      })
    }))

  }

  useEffect(() => {

    const computerInterval = setInterval(() => {
      const randomIndex = generateRandomInteger(
        grid.gridSize * grid.gridSize
      )

      handleSquareClicked(randomIndex, machine, player)

    }, 250)

    return () => clearInterval(computerInterval)



  }, [])





  const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
    let square = e.target as HTMLDivElement
    let cellIndex = parseInt(square.id)
    handleSquareClicked(cellIndex, player, machine)
  }


  return (
    <article className='game-play' >
      <div className="container-fluid">
        <div className="row">
          <div className="center-align col no-padding s12">
            <table className="board grid-8">
              <tbody>
                <tr>{grid1.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid2.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid3.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid4.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid5.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid6.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid7.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
                <tr>{grid8.map(cell => {
                  return (
                    <td className="color" key={cell.index}
                      style={{ "--color": cell.backgroundColor } as React.CSSProperties}
                      onClick={(e) => squareClicked(e)}><span id={`${cell.index}`} className="square"></span></td>
                  )
                })}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </article>
  )
}

export default GameBoard
