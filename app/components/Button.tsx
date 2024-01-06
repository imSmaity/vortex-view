import React from 'react'

interface IButton {
  children: React.ReactNode
  handleClick: () => void
  variant: 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
}

const Button = ({ children, variant, handleClick, size }: IButton) => {
  const sizeClass = size === 'sm' ? ' w-32' : size === 'md' ? ' w-38' : ' w-44'
  const variantClass =
    variant === 'contained'
      ? ' bg-buttonPrimary text-[#ffffff]'
      : ' border-2 bg-[#ffffffff] border-borderLight text-textActive'
  return (
    <button
      className={'p-2 rounded-sm' + variantClass + sizeClass}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
