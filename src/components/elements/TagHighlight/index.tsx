import React from 'react'

interface TagProp {
  text: string | undefined
  optional?: {} | string
  className?: string
}

const TagHighlight: React.FC<TagProp> = ({ text, optional, className }) => {
  return (
    <span
      className={`text-[10px] text-white bg-[#503454] px-2 py-1 rounded-[5px] text-center font-bold ml-5 max-w-fit ${
        optional && '!bg-[#f5f5f5] !text-black !border'
      } ${className}`}
    >
      {text}
    </span>
  )
}

export default TagHighlight
