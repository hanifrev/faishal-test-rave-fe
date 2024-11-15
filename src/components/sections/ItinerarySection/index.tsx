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
      <div>
        {ItineraryData.map((item, index) => (
          <div className="relative flex flex-col py-4" key={index}>
            <div className="absolute inset-x-0 top-0 border-t border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden" />
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-secondary text-xs mb-[10px]">
                  Day {index + 1}
                  {item.highlightTag && (
                    <TagHighlight text={item.highlightTag} />
                  )}
                </span>
                <span className="text-base mb-[10px] font-bold">
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

                <div className="flex flex-row gap-4 pt-1">
                  {item.transferInfo?.map((item, index) => {
                    return (
                      <div
                        className={`${
                          item.title === 'Welcome' || item.title === 'Transfer'
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
              <img src={ChevronDown} className="w-4" />
            </div>

            {/* <div>expand</div> */}
            <div className="absolute inset-x-0 bottom-0 border-b border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItinerarySection
