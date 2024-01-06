import { ChangeEvent } from 'react'

interface IInput {
  name: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  type?: 'text' | 'number' | 'password' | 'date'
}

const Input = ({ name, type, placeholder, value, handleChange }: IInput) => {
  return (
    <input
      name={name}
      className="border-[2px] border-borderGray p-1.5 rounded-sm w-[20rem]"
      type={type || 'text'}
      placeholder={placeholder || ''}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Input
