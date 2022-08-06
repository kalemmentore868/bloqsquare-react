import React, { FC } from 'react'

interface versusProps {
  colorPicked: string;
  machineColor: string;
  playerScore?: number;
  machineScore?: number;
}

const Versus: FC<versusProps> = ({ colorPicked, machineColor, playerScore, machineScore }) => {




  return (
    <div className="col s12">
      <table className="centered grid-3 scores">
        <thead><tr><th>You</th><th></th><th>A.I.</th></tr></thead>
        <tbody style={{ "backgroundColor": "#ffffff" }}>
          <tr>
            <td className="color" style={{ "--color": colorPicked } as React.CSSProperties}>
              <span className="bloq square" title={playerScore || playerScore === 0 ? `${playerScore}` : ""}></span>
            </td>
            <td>
              <span className="bloq large purple-text text-z-depth-2">VS</span>
            </td>
            <td className="color" style={{ "--color": machineColor } as React.CSSProperties}>
              <span className="bloq square" title={machineScore || machineScore === 0 ? `${machineScore}` : ""}></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Versus