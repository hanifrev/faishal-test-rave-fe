import CTAHero from 'components/elements/CTAHero'
import DescriptionCard from 'components/elements/DescriptionCard'
import MarketingMessage from 'components/elements/MarketingMessage'
import TripYearSelector from 'components/elements/TripYearSelector'
import TileHero from 'components/modules/TileHero'
import { useGetTourSummaryQuery } from 'lib/services/api'
import { urlFor } from 'lib/sanityClient'

const TopTourSection = () => {
  const { data, isLoading, isError } = useGetTourSummaryQuery()

  return (
    <div className="relative pb-6">
      <div className="relative flex flex-col md:flex-row md:justify-end h-auto md:h-[1000px] lg:h-[900px] xl:h-[830px] xl2:h-[775px]">
        {/* Image section */}
        <div
          className=" h-auto md:h-[1000px] lg:h-[900px] xl:h-[830px] xl2:h-[775px] -mx-4 md:-mx-0 w-screen md:w-[calc(50%-2.25rem)] md:-left-6 md:max-w-none md:overflow-hidden md:absolute xl:left-[-3vw] xl:w-[48vw] xl2:left-[-220px] xl2:w-[850px]
       "
        >
          <img
            src={
              data?.heroImage ? urlFor(data.heroImage.asset._ref) : undefined
            }
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Summary section */}
        <div className="relative z-10 flex flex-col justify-center pt-4 pb-6 bg-white md:w-1/2">
          <TripYearSelector />
          {isError && <>Error fetching data</>}
          <h1 className="text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-[125%] tracking-[-0.4px] pb-4 xl:pb-7">
            {isLoading
              ? 'Loading...'
              : data?.heroTitle || 'No title availabe, check CMS'}
          </h1>
          <p className="text-sm md:text-base leading-[150%] md:leading-[170%] md:tracking-[-0.1px]">
            {isLoading
              ? 'Loading...'
              : data?.heroDescription || 'No description availabe, check CMS'}
          </p>
          <div className="card-grid pt-4 sm:pt-6">
            {isLoading && <>Loading...</>}
            {data?.cardDescription.map((data, index) => {
              return <DescriptionCard index={index} key={index} data={data} />
            })}
            {!data?.cardDescription.length && <>No data availabe</>}
          </div>
          {data?.heroCTA && <CTAHero data={data.heroCTA} />}
          <div className="text-sm md:text-base border-b md:border-none h-[39px] md:h-0 ">
            <b>Trip Code:</b> {data?.tripCode}
          </div>
        </div>
      </div>
      <TileHero data={data?.tileHero || []} />
      <MarketingMessage data={data?.marketingMessage || []} />
    </div>
  )
}

export default TopTourSection
