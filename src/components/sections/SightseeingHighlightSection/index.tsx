import SightseeCard from 'components/elements/SightseeCard'

const SightseeingHighlightSection = () => {
  return (
    <div className=" border-b border-b-[#d9d9d9] pb-12 about-trip-class">
      <div className="text-[#4b6b35] text-center md:text-left pb-4 font-bold text-2xl md:text-base lg:text-lg xl:text-2xl ">
        Sightseeing highlights
      </div>
      <div className="pt-6 md:pt-0 flex flex-col md:flex-row md:flex-wrap gap-6">
        <SightseeCard />
        <SightseeCard />
        <SightseeCard />
        <SightseeCard />
        <SightseeCard />
        <SightseeCard />
      </div>
    </div>
  )
}

export default SightseeingHighlightSection
