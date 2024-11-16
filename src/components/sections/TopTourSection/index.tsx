import CTAHero from 'components/elements/CTAHero'
import DescriptionCard from 'components/elements/DescriptionCard'
import MarketingMessage from 'components/elements/MarketingMessage'
import TripYearSelector from 'components/elements/TripYearSelector'
import TileHero from 'components/modules/TileHero'
import { DescCard } from 'constants/DescCards'

const TopTourSection = () => {
  return (
    <div className="relative pb-6">
      <div className="relative flex flex-col md:flex-row md:justify-end h-auto md:h-[1000px] lg:h-[900px] xl:h-[830px] xl2:h-[775px]">
        {/* Image section */}
        <div
          className=" h-auto md:h-[1000px] lg:h-[900px] xl:h-[830px] xl2:h-[775px] -mx-4 md:-mx-0 w-screen md:w-[calc(50%-2.25rem)] md:-left-6 md:max-w-none md:overflow-hidden md:absolute xl:left-[-3vw] xl:w-[48vw] xl2:left-[-220px] xl2:w-[850px]
       "
        >
          <img
            src="https://www.trafalgar.com/media/x0th5lxn/best-italy-guided-tour-2.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=1200&quality=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Summary section */}
        <div className="relative z-10 flex flex-col justify-center pt-4 pb-6 bg-white md:w-1/2">
          <TripYearSelector />
          <h1 className="text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-[125%] tracking-[-0.4px] pb-4 xl:pb-7">
            13-Day Italy Sightseeing Tour of Rome, Lake Como and Sorrento
          </h1>
          <p className="text-sm md:text-base leading-[150%] md:leading-[170%] md:tracking-[-0.1px]">
            Discover the Best of Italy, from the ancient treasures of Rome to
            Renaissance Florence and everything in between. Imagine staying
            overnight in a renovated Franciscan monastery in Assisi, lapping up
            the chic lifestyle on Capri, and taking a private guided visit to
            Pompeii to see a Roman city frozen in time.
          </p>
          <div className="card-grid pt-4 sm:pt-6">
            {DescCard.map((data, index) => {
              return <DescriptionCard index={index} key={index} data={data} />
            })}
          </div>
          <CTAHero />
          <div className="text-sm md:text-base border-b md:border-none h-[39px] md:h-0 ">
            <b>Trip Code:</b> ITBO
          </div>
        </div>
      </div>
      <TileHero />
      <MarketingMessage />
    </div>
  )
}

export default TopTourSection
