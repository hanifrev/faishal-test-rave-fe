import Button from 'components/elements/Button'
import TravelHighCard from 'components/elements/TravelHighCard'
import { useGetAboutQuery } from 'lib/services/api'

const TravelHighlightSection = () => {
  const { data, isLoading, isError } = useGetAboutQuery()
  const theData = data?.travelHighlight

  return (
    <div className="about-trip-class  pb-12">
      <div className="flex flex-col">
        <div className="text-[#a7282e] text-center md:text-left pb-4 font-bold text-2xl md:text-base lg:text-lg xl:text-2xl ">
          {isLoading
            ? 'Loading...'
            : theData?.title || 'No title availabe, check CMS'}
        </div>
        <div className="text-sm mt-2 text-center md:text-left md:text-lef">
          {isLoading
            ? 'Loading...'
            : theData?.description || 'No description available, check CMS'}
        </div>
        <div className="pt-4  mx-0 hidden md:block">
          <Button text={theData?.CTA} bgColor="bg-[#A7282E]" />
        </div>
        {isError && <span>Error fetching data</span>}
      </div>

      <div className="pt-6 md:pt-0 flex flex-col md:flex-row md:flex-wrap gap-6">
        {isLoading && <span>Loading data....</span>}
        {theData?.list.map((item, index) => (
          <TravelHighCard key={index} text={item} />
        ))}
        {isError && <span>Error fetching data</span>}
      </div>
      <div className="pt-4 block mx-auto md:hidden">
        <Button text="Airport Transfer" bgColor="bg-[#A7282E]" />
      </div>
    </div>
  )
}

export default TravelHighlightSection
