import { CheckmarkIcon } from 'assets'
import React from 'react'

interface TravelProps {
  text?: string
}

const TravelHighCard: React.FC<TravelProps> = ({ text }) => {
  return (
    <div className="flex flex-row width-list-sight">
      <img src={CheckmarkIcon} className="w-10 mr-6" />
      <p className="text-sm">{text}</p>
    </div>
  )
}

export default TravelHighCard
