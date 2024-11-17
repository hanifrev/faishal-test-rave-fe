import TagHighlight from 'components/elements/TagHighlight'
import Carousels from '../Carousel'
import CityList from 'components/elements/CityList'
import {
  AccommodationIcon,
  ArrivalIcon,
  ChevronDown,
  MealsIcon,
  WelcomeIcon
} from 'assets'

const ItineraryCard = ({
  item,
  index,
  isExpanded,
  toggleItem
}: {
  item: any
  index: number
  isExpanded: boolean
  toggleItem: (index: number) => void
}) => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Welcome':
        return WelcomeIcon
      case 'Transfer':
        return ArrivalIcon
      case 'Accommodation':
        return AccommodationIcon
      case 'Meals':
        return MealsIcon
      default:
        return null
    }
  }

  return (
    <div
      className="relative flex flex-col py-4 md:py-0 md:pr-0 md:border-[0.5px] md:border-[#e6e6e6] md:rounded-md h-auto"
      key={index}
    >
      {/* Card Header */}
      <div
        className={`flex flex-row cursor-pointer justify-between relative ${
          isExpanded && 'md:bg-[#f5f5f5]'
        }`}
        onClick={() => toggleItem(index)}
      >
        <div className="flex flex-row transition-all">
          <img
            className={`hidden md:block w-[200px] h-full object-cover ${
              isExpanded && 'md:hidden'
            }`}
            src={item.image}
          />
          <div className="flex flex-col md:py-[20.8px] md:px-6">
            <span className="text-secondary text-xs md:text-base mb-[10px]">
              Day {index + 1}
              {item.highlightTag && <TagHighlight text={item.highlightTag} />}
            </span>
            <span className="flex items-center gap-3 text-base md:text-base mb-[10px] font-bold">
              {item.title}
              <CityList
                cities={item.city}
                classNames="hidden lg:block font-normal"
              />
            </span>
            <CityList cities={item.city} classNames="lg:hidden" />
          </div>
        </div>
        <button className="flex flex-row items-center gap-2 md:pr-4">
          <span className="text-base font-bold hidden md:block">See More</span>
          <img
            src={ChevronDown}
            alt="Chevron"
            className={`transition-transform w-4 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
      {/* Card Details */}
      {isExpanded && (
        <div className="pt-6 pb-10 flex flex-col gap-4 px-2 md:px-10">
          <div className="flex flex-col md:flex-row-reverse md:justify-between">
            <img
              src={item.image}
              className="w-auto h-auto pb-3 rounded-md sm:h-full md:w-full"
            />
            <div className="flex flex-col gap-4 md:basis-full md:pr-10">
              <span className="text-lg md:text-2xl xl:text-[28px] font-bold">
                {item.title}
              </span>
              <span className="text-sm md:text-base text-secondary leading-[150%]">
                {item.description}
              </span>
            </div>
          </div>
          <Carousels cards={item.carousel} />
        </div>
      )}
    </div>
  )
}

export default ItineraryCard
