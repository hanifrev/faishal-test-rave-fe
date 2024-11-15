import React from 'react'

interface BtnProps {
  text: string
  bgColor?: string
  textColor?: string
}

const Button: React.FC<BtnProps> = ({ bgColor, textColor, text }) => {
  return (
    <button
      className={`${bgColor ? bgColor : 'bg-[#e02044]'} ${
        textColor ? textColor : 'text-white'
      } py-[15px] px-[31px] font-bold text-base hover:bg-opacity-80`}
    >
      {text}
    </button>
  )
}

export default Button
