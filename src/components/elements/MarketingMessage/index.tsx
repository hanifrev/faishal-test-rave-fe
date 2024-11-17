import React from 'react'
import PortableTextReact from '../PortableTextReact'

interface Props {
  data: any
}

const MarketingMessage: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-[#125a55] w-full rounded-md p-6">
      <span className="pt-4 sm:pt-0 flex flex-wrap justify-center text-center text-white leading-[150%] text-sm md:text-base">
        <PortableTextReact data={data || []} />
      </span>
    </div>
  )
}

export default MarketingMessage
