import { FC } from 'react'

interface buttonProps {
  text: string
}

const Button: FC<buttonProps> = ({ text }) => {
  return (
    <button className="btn-larger fit-80 pink">{text}</button>
  )
}

export default Button