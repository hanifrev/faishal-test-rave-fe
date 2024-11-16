import TileCard from 'components/elements/TileCard'
import { TilesCards } from 'constants/TilesCards'

const TileHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-6 xl:gap-8 py-6 xl:py-12">
      {TilesCards.map((item, index) => {
        return <TileCard img={item.icon} text={item.title} key={index} />
      })}
    </div>
  )
}

export default TileHero
