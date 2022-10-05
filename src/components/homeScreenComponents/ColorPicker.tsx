import { FC } from 'react'
interface colorProps {
  choseColor: Function
}

const ColorPicker: FC<colorProps> = ({ choseColor }) => {
  return (
    <label className="input-color" htmlFor="chosenColor">
      <input type="color" defaultValue={'#f50000'} name="chosenColor" onChange={e => choseColor(e.target.value)} />
      <div><span>Select</span><span>Color</span></div>
    </label>
  )
}

export default ColorPicker