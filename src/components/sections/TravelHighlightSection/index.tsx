import Button from 'components/elements/Button'
import TravelHighCard from 'components/elements/TravelHighCard'
import React from 'react'

const TravelHighlightSection = () => {
  return (
    <div className="about-trip-class  pb-12">
      <div className="flex flex-col">
        <div className="text-[#a7282e] text-center md:text-left pb-4 font-bold text-2xl md:text-base lg:text-lg xl:text-2xl ">
          Travel highlights
        </div>
        <div className="text-sm mt-2 text-center md:text-left md:text-lef">
          Specific transfer information can be found here:
        </div>
        <div className="pt-4  mx-0 hidden md:block">
          <Button text="Airport Transfer" bgColor="bg-[#A7282E]" />
        </div>
      </div>

      <div className="pt-6 md:pt-0 flex flex-col md:flex-row md:flex-wrap gap-6">
        <TravelHighCard />
        <TravelHighCard />
        <TravelHighCard />
        <TravelHighCard />
      </div>
      <div className="pt-4 block mx-auto md:hidden">
        <Button text="Airport Transfer" bgColor="bg-[#A7282E]" />
      </div>
    </div>
  )
}

export default TravelHighlightSection
