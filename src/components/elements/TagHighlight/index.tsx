import React from 'react'

interface TagProp {
  text: string
}

const TagHighlight: React.FC<TagProp> = ({ text }) => {
  return (
    <span className="text-[10px] text-white bg-[#503454] px-2 py-1 rounded-[5px] text-center font-bold ml-5">
      {text}
    </span>
  )
}

export default TagHighlight
