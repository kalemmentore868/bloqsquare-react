import React, { useState } from 'react'
import Logo from './Logo'

const Help = () => {
    const [helpMenuOpen, setHelpMenu] = useState(false)
  return (
    <div>
        <button className='help-button' onClick={() => setHelpMenu(!helpMenuOpen)}>?</button>
        {helpMenuOpen && 
        <div className="modal">

        <div className="container-fluid help"><div className="row"><div className="center-align col s12"><div className="container">		<Logo />
        </div></div><div className="center-align col s12"><div className="container"><article><header><h3>How To Play</h3></header><p>To play the game is simple! Try to bloq out as many of the squares as you can more than your opponent before the time runs out!</p><p>You can also unbloq your opponents squares by clicking/ double clicking on them! <strong>Beware!</strong> Your opponent can do the same! Happy playing!</p></article></div></div></div></div>
      </div>
        }
    </div>
  )
}

export default Help