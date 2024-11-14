import { ChevronRight } from 'assets'

const CTAHero = () => {
  return (
    <div className="cursor-pointer flex flex-row w-full justify-between items-center border border-[#e6e6e6] rounded-md p-4 mb-6">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-[18px] md:text-base xl:text-[18px] leading-[125%] tracking-[-0.4px]">
          Looking to book in a group of 15 or more?
        </div>
        <p className="text-sm leading-[150%] tracking-[-0.1px]">
          Deals, savings and exclusive private touring options available plus if
          you need a different date or itinerary change we can create a custom
          trip. Contact us for more details
        </p>
      </div>
      <img src={ChevronRight} className="w-8"></img>
    </div>
  )
}

export default CTAHero
