import React from 'react'

const ItinerarySection = () => {
  return (
    <div className="relative pt-2 xl:pt-12 flex flex-col">
      <div className="flex flex-col pt-6 text-center md:text-left">
        <span className="font-bold text-[22px] md:text-[28px] xl:text-[32px] mb-2 leading-[125%]">
          Day by day itinerary
        </span>
        <span className="text-sm leading-[150%] tracking-[-0.1px] mb-5">
          13 days itinerary trip from <b>Rome to Rome</b> visiting 2 countries
          and 15 cities
        </span>
      </div>
    </div>
  )
}

export default ItinerarySection
