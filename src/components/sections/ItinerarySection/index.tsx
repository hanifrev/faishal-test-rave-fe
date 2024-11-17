import {
  AccommodationIcon,
  ArrivalIcon,
  ChevronDown,
  DownloadIcon,
  MealsIcon,
  PrintIcon,
  WelcomeIcon
} from 'assets'
import CityList from 'components/elements/CityList'
import PortableTextReact from 'components/elements/PortableTextReact'
import TagHighlight from 'components/elements/TagHighlight'
import Carousel from 'components/modules/Carousel'
import { urlFor } from 'lib/sanityImage'
import { useGetItineraryQuery } from 'lib/services/api'
import { useEffect, useState } from 'react'

const ItinerarySection = () => {
  const { data, isLoading, isError } = useGetItineraryQuery()

  const itineraryList = data?.list || []

  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    itineraryList.map(() => false)
  )

  useEffect(() => {
    if (itineraryList.length > 0) {
      setExpandedItems(itineraryList.map(() => false))
    }
  }, [itineraryList])

  const allExpanded = expandedItems.every((item) => item)

  const toggleAll = (expand: boolean) => {
    setExpandedItems(itineraryList.map(() => expand))
  }

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    )
  }

  const getIcon = (title: string): string | null | any => {
    switch (title) {
      case 'Welcome':
        return WelcomeIcon
      case 'Transfer':
        return ArrivalIcon
      case 'Accommodation':
        return AccommodationIcon
      case 'Included Meals':
        return MealsIcon
      default:
        return null
    }
  }

  return (
    <div className="relative pt-2 xl:pt-12 flex flex-col" id="itinerary">
      <div className="flex flex-col pt-6 text-center md:text-left">
        <span className="font-bold text-[22px] md:text-[28px] xl:text-[32px] mb-2 leading-[125%]">
          {isLoading
            ? 'Loading...'
            : data?.mainTitle || 'No title availabe, check CMS'}
        </span>
        <span className="text-sm leading-[150%] tracking-[-0.1px] mb-5">
          {isLoading
            ? 'Loading...'
            : data?.mainDescription || 'No description availabe, check CMS'}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center pb-6 md:pt-2">
        <div className="flex flex-row gap-4">
          <span className="flex gap-2 cursor-pointer">
            <img className="w-3 lg:w-5" src={DownloadIcon} />
            <p className="font-bold text-sm md:text-base text-[#2d5a7b]">
              Download Itinerary
            </p>
          </span>
          <span className="hidden md:flex gap-2 cursor-pointer">
            <img className="w-4 lg:w-6" src={PrintIcon} />
            <p className=" font-bold text-sm  md:text-base  text-[#2d5a7b]">
              Print Itinerary
            </p>
          </span>
        </div>
        <button
          onClick={() => toggleAll(!allExpanded)}
          className="flex flex-row gap-2 items-center font-bold text-sm  md:text-base cursor-pointer  "
        >
          <p className="border-dotted border-b border-b-[#e02044] max-w-fit">
            {allExpanded ? 'Collapse all days' : 'Expand all days'}
          </p>
          <img
            src={ChevronDown}
            alt="Chevron"
            className={`transition-transform w-4 ${
              allExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
      <div className="flex flex-col md:gap-4">
        {isError && <>Error fetching data</>}
        {itineraryList.map((item, index) => (
          <div
            className="relative flex flex-col py-4 md:py-0 md:pr-0 md:border-[0.5px] md:border-[#e6e6e6] md:rounded-md h-auto"
            key={index}
          >
            <div className="absolute inset-x-0 top-0 border-t border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden z-[-1]" />

            <div
              className={`flex flex-row cursor-pointer justify-between z-[9999] relative ${
                expandedItems[index] && 'md:bg-[#f5f5f5] '
              }`}
              onClick={() => toggleItem(index)}
            >
              <div
                className={`absolute inset-x-0 top-[-15px] z-[-1] bg-[#f5f5f5] w-screen height-fill mb-[-5px] left-1/2 -translate-x-1/2 md:hidden ${
                  expandedItems[index] ? 'block' : 'hidden'
                }`}
              />
              <div className="flex flex-row transition-all">
                {/* main image */}
                <img
                  className={`hidden md:block w-[200px] h-full object-cover  ${
                    expandedItems[index] && 'md:hidden'
                  }`}
                  // data?.heroImage ? urlFor(data.heroImage.asset._ref) : undefined
                  src={urlFor(item.image.asset._ref)}
                />
                {/* itinerary summary */}
                <div className="flex flex-col md:py-[20.8px] md:px-6">
                  <span className="text-secondary text-xs md:text-base mb-[10px]">
                    Day {index + 1}
                    {item.highlightTag && (
                      <TagHighlight text={item.highlightTag} />
                    )}
                  </span>
                  <span className="flex items-center gap-3 text-base md:text-base mb-[10px] font-bold">
                    {item.title}
                    <CityList
                      cities={item.city}
                      classNames="hidden lg:block font-normal"
                    />
                  </span>

                  <CityList cities={item.city} classNames="lg:hidden" />

                  {/* optiona transfer info */}
                  <div className="flex flex-row gap-4 pt-1 md:pt-2">
                    {item.facilities?.map((item, index) => {
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
              <button
                className="flex flex-row items-center gap-2 md:pr-4"
                // onClick={(() => toggleItem(index), console.log('test'))}
              >
                <span className="text-base font-bold hidden md:block">
                  See More
                </span>
                <img
                  src={ChevronDown}
                  alt="Chevron"
                  className={`transition-transform w-4 ${
                    expandedItems[index] ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {expandedItems[index] && (
              <div className="pt-6 pb-10 flex flex-col gap-4 px-2 md:px-10 transition-all">
                <div className="flex flex-col md:flex-row-reverse md:justify-between">
                  <img
                    src={urlFor(item.image.asset._ref)}
                    className="w-auto h-auto pb-3 rounded-md sm:h-full md:w-full max-w-[1600px] md:max-h-[190px] lg:max-h-[230px] xl:max-h-[283px] xl2:max-h-[324px] object-cover"
                  />
                  <div className="flex flex-col gap-4 md:basis-full md:pr-10">
                    {/* <span className="text-base pb-2">Day {index + 1}</span> */}
                    <span className="text-lg md:text-2xl xl:text-[28px] font-bold">
                      {item.title}
                    </span>
                    <span className="text-sm md:text-base text-secondary leading-[150%] tracking-[0.1px]">
                      <PortableTextReact data={item.description} />
                    </span>
                    <div className="flex flex-col gap-4 lg:gap-6 pt-2 md:pt-3">
                      {item.facilities?.map((item, index) => {
                        return (
                          <div className="flex flex-row gap-2" key={index}>
                            {getIcon(item.title) && (
                              <img
                                src={getIcon(item.title)}
                                alt="zxc"
                                className="w-[48px] h-auto px-[10.5px]"
                              />
                            )}
                            <span className="text-sm md:text-base">
                              <b>{item.title}</b> {item.desc}
                              {item.note && (
                                <>
                                  <br />
                                  <span className=" text-secondary text-[10px] md:text-xs">
                                    {item.note}
                                  </span>
                                </>
                              )}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="px-0 py-4">
                  <div className="font-bold text-[22px] text-center md:text-left pb-6">
                    Included and optional experiences
                  </div>

                  <Carousel cards={item.carousel} />
                </div>
              </div>
            )}
            {/* border bottom  */}
            <div className="absolute inset-x-0 bottom-0 border-b border-gray-300 w-screen h-full left-1/2 -translate-x-1/2 md:hidden z-[-1]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItinerarySection
