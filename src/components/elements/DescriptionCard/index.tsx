import { QuestionIcon } from 'assets'
import React from 'react'

interface DescCardProps {
  title: string
  mainIcon: string | any
  descLine1: {
    text: string
    showIcon?: boolean
    id?: string
    isClickable?: boolean
  }
  descLine2?: string | null
}

interface CardProps {
  data: DescCardProps
}

const DescriptionCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-white">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">
          <img src={data.mainIcon} className="w-3" />
        </span>
        <h2 className="text-base font-bold">{data.title}</h2>
      </div>

      <div className="flex items-center">
        <p
          className={`text-sm md:text-base flex flex-row ${
            data.descLine1.isClickable == true && 'hidden'
          }`}
        >
          {data.descLine1.text}
          {data.descLine1.showIcon && (
            <img src={QuestionIcon} className="pl-1 w-4" />
          )}
        </p>

        {data.descLine1.isClickable == true && (
          <a
            href={data.descLine1.id}
            className="text-[#6b6b6b] font-semibold text-sm md:text-base underline"
          >
            {data.descLine1.text}
          </a>
        )}
      </div>

      {data.descLine2 && (
        <p className="text-sm md:text-base mt-2">{data.descLine2}</p>
      )}
    </div>
  )
}

export default DescriptionCard
