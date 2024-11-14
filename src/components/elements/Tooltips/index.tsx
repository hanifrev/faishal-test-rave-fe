import React from 'react'

interface TooltipProps {
  content: string
}

const Tooltips: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div className="flex flex-col py-4 px-8 md:px-4 box-border border border-[#dedee5] text-xs w-[200px] md:w-[316px] xl:w-[444px] h-max leading-[135%] tracking-[-0.1px]">
      Typically feature 6.4+ km of walking on some days and may involve some
      steep hills.
    </div>
  )
}

export default Tooltips
