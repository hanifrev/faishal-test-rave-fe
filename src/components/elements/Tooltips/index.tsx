import React from 'react'

interface TooltipProps {
  content: string | boolean | undefined
}

const Tooltips: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div className="flex bg-white flex-col py-4 px-4 md:px-4 box-border border border-[#dedee5] text-xs w-[200px] md:w-[316px] xl:w-[444px] h-max leading-[135%] tracking-[-0.1px]">
      {content}
    </div>
  )
}

export default Tooltips
