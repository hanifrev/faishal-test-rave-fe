import TileCard from 'components/elements/TileCard'
import React from 'react'
import { Tile1, Tile2, Tile3 } from 'assets'

interface TileProps {
  data: string[]
}

const TileHero: React.FC<TileProps> = ({ data }) => {
  const icons = [Tile1, Tile2, Tile3]
  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-6 xl:gap-8 py-6 xl:py-12">
      {data.slice(0, 3).map((item, index) => {
        return <TileCard img={icons[index]} text={item} key={index} />
      })}
    </div>
  )
}

export default TileHero
