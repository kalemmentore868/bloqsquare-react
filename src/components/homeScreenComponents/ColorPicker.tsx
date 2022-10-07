import { FC } from 'react'
interface colorProps {
  choseColor: Function
  value: string
}

const ColorPicker: FC<colorProps> = ({ choseColor, value }) => {

  return (
    <label className="input-color" htmlFor="chosenColor">
      <input type="color" defaultValue={value} name="chosenColor" onChange={e => choseColor(e.target.value)} />
      <div><span>Select</span><span>Color</span></div>
    </label>
  )
}

export default ColorPicker