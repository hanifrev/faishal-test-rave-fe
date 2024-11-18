import { ChevronRight } from 'assets'

interface CtaProps {
  data: {
    title: string
    description: string
  }
}

const CTAHero: React.FC<CtaProps> = ({ data }) => {
  return (
    <div className="cursor-pointer flex flex-row w-full justify-between items-center border border-[#e6e6e6] rounded-md p-4 mb-6">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-[18px] md:text-base xl:text-[18px] leading-[125%] tracking-[-0.4px]">
          {data.title || ''}
        </div>
        <p className="text-sm leading-[150%] tracking-[-0.1px]">
          {data.description || ''}
        </p>
      </div>
      <img src={ChevronRight} className="w-8"></img>
    </div>
  )
}

export default CTAHero
