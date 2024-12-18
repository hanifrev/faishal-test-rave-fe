import React, { useState } from 'react'
import Tooltips from '../Tooltips'
import {
  CalendarIcon,
  MealsIcon,
  WalkIcon,
  PinLocIcon,
  QuestionIcon
} from 'assets'
import { DescType } from 'constants/TourSummary'

interface CardProps {
  data: DescType
  index: number
}

const DescriptionCard: React.FC<CardProps> = ({ data, index }) => {
  const [showTooltip, setShowTooltip] = useState<number | null>(null)

  const tooltipHover = (index: number) => {
    setShowTooltip(index)
  }

  const tooltipLeave = () => {
    setShowTooltip(null)
  }

  const getIcon = (index: number): number | null | any => {
    switch (index) {
      case 0:
        return CalendarIcon
      case 1:
        return MealsIcon
      case 2:
        return WalkIcon
      case 3:
        return PinLocIcon
      default:
        return null
    }
  }

  return (
    <div className="bg-white">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">
          <img src={getIcon(index)} className="w-4" />
        </span>
        <h2 className="text-base font-bold">{data.title}</h2>
      </div>

      <div className="flex items-center ">
        <p
          className={`text-sm md:text-base flex flex-row relative ${
            data.descLine1.isClickable == true && 'hidden'
          }`}
        >
          {data.descLine1.text}
          {data.descLine1.tooltip && (
            <img
              src={QuestionIcon}
              className="pl-1 w-4 lg:w-5 cursor-pointer"
              onMouseEnter={() => tooltipHover(index)}
              onMouseLeave={tooltipLeave}
            />
          )}
          {showTooltip == index && (
            <div className="absolute top-3 md:top-6  z-50">
              <Tooltips content={data.descLine1.tooltip} />
            </div>
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
