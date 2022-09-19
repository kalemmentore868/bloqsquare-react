import React, { FC } from 'react'
interface colorProps{
  choseColor:Function
}

const ColorPicker:FC<colorProps> = ({choseColor}) => {
  return (
    // <div className="color-container">
    //     <input type="color" name="chosenColor" defaultValue={'#f50000'} onChange={e => choseColor(e.target.value)}/>
    //     <label className="input-color" htmlFor="chosenColor">
	  //       <div><span>Select</span><span>Color</span></div>
	  //   </label>
    // </div>
    <label className="input-color" htmlFor="chosenColor">
  		<input type="color" defaultValue={'#f50000'} name="chosenColor" onChange={e => choseColor(e.target.value)} />
        	<div><span>Select</span><span>Color</span></div>
   </label>
  )
}

export default ColorPicker