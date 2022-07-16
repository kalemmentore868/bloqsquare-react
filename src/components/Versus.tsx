import React, { FC } from 'react' 

interface versusProps{
  colorPicked:string;
  machineColor:string;
}

const Versus:FC<versusProps> = ({ colorPicked, machineColor }) => {
  
  return (
  	<div className="col s12">
  		<table className="centered grid-3 scores">
        	<thead><tr><th>Player 1</th><th></th><th>Machine</th></tr></thead>
        	<tbody style={{ "backgroundColor": "#ffffff" }}>
            	<tr>
                	<td className="color" style={{ "--color": colorPicked } as React.CSSProperties}>
                    	<span className="bloq square"></span>
                	</td>
                	<td>
                    	<span className="bloq large purple-text text-z-depth-2">VS</span>
                	</td>
                	<td className="color" style={{ "--color": machineColor } as React.CSSProperties}>
                    	<span className="bloq square"></span>
                	</td>
            	</tr>
        	</tbody>
  		</table>
  	</div>
  )
}

export default Versus