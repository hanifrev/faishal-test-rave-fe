import SightseeCard from 'components/elements/SightseeCard'
import { useGetAboutQuery } from 'lib/services/api'

const SightseeingHighlightSection = () => {
  const { data, isLoading, isError } = useGetAboutQuery()
  const theData = data?.sightseeingHighlight

  return (
    <div className=" border-b border-b-[#d9d9d9] pb-12 about-trip-class">
      <div className="text-[#4b6b35] text-center md:text-left pb-4 font-bold text-2xl md:text-base lg:text-lg xl:text-2xl font-serifs">
        {isLoading
          ? 'Loading...'
          : theData?.title || 'No title availabe, check CMS'}
      </div>
      <div className="pt-6 md:pt-0 flex flex-col md:flex-row md:flex-wrap gap-6 ">
        {isLoading && <span>Loading data....</span>}
        {theData?.list.map((item, index) => {
          return <SightseeCard text={item} key={index} />
        })}
        {isError && <span>Error fetching data</span>}
      </div>
    </div>
  )
}

export default SightseeingHighlightSection
