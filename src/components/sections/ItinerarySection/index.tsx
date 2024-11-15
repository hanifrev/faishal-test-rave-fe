import { ArrivalIcon, ChevronDown, SeparatorIcon, WelcomeIcon } from 'assets'
import TagHighlight from 'components/elements/TagHighlight'
import { ItineraryData } from 'constants/Itinerarty'
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
      <div>
        <span>Download</span>
        <span>Expand</span>
      </div>
      <div className="flex flex-col md:gap-4">
        {ItineraryData.map((item, index) => (
          <div
            className="relative flex flex-col py-4 md:py-0 md:pr-4 md:border-[0.5px] md:border-[#e6e6e6] md:rounded-md h-auto"
            key={index}
          >
            {/* this is <md border top */}
            <div className="absolute inset-x-0 top-0 border-t border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden" />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                {/* main image */}
                <img
                  className="hidden md:block w-[200px] h-full object-cover"
                  src={item.image}
                />
                {/* itinerary summary */}
                <div className="flex flex-col md:py-[20.8px] md:px-6">
                  <span className="text-secondary text-xs md:text-base mb-[10px]">
                    Day {index + 1}
                    {item.highlightTag && (
                      <TagHighlight text={item.highlightTag} />
                    )}
                  </span>
                  <span className="text-base md:text-base mb-[10px] font-bold">
                    {item.title}
                  </span>

                  <span className="text-secondary text-sm">
                    {item.city.map((city, cityIndex) => (
                      <React.Fragment key={city}>
                        {city}
                        {cityIndex < item.city.length - 1 && (
                          <img
                            src={SeparatorIcon}
                            alt="separator"
                            className="inline mx-1 w-4"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </span>

                  {/* optiona transfer info */}
                  <div className="flex flex-row gap-4 pt-1 md:pt-2">
                    {item.transferInfo?.map((item, index) => {
                      return (
                        <div
                          className={`${
                            item.title === 'Welcome' ||
                            item.title === 'Transfer'
                              ? 'flex flex-row gap-3 items-center'
                              : 'hidden'
                          }`}
                          key={index}
                        >
                          <img
                            src={
                              item.title === 'Welcome'
                                ? WelcomeIcon
                                : item.title === 'Transfer'
                                  ? ArrivalIcon
                                  : undefined
                            }
                            alt={item.title}
                            className="w-6"
                          />
                          <p className="text-sm">{item.title}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              {/* chevron down */}
              <div className="flex flex-row items-center gap-2">
                <span className="text-base font-bold hidden md:block">
                  See More
                </span>
                <img src={ChevronDown} className="w-4" />
              </div>
            </div>

            {/* <div>expand</div> */}

            {/* this is <md border bottom */}
            <div className="absolute inset-x-0 bottom-0 border-b border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItinerarySection
