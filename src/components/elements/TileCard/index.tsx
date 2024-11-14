import { Tile1 } from 'assets'
import React from 'react'

interface TileProps {
  img: any
  text: string
}

const TileCard: React.FC<TileProps> = ({ img, text }) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="bg-[#f2f2f2] rounded-full p-4 flex items-center justify-center">
        <img src={img} className="w-6 h-6" alt="Question icon" />
      </div>
      <div className="font-bold text-xs">{text}</div>
    </div>
  )
}

export default TileCard
