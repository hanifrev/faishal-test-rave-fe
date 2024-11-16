import { LocationIcon } from 'assets'
import React from 'react'

interface SightProps {
  text?: string
}

const SightseeCard: React.FC<SightProps> = ({ text }) => {
  return (
    <div className="flex flex-row items-center width-list-sight">
      <img src={LocationIcon} className="w-10 mr-6" />
      <p className="text-sm">
        {/* make the first word bold */}
        Explore Rome, Pompeii, Capri, Assisi and Florence{' '}
      </p>
    </div>
  )
}

export default SightseeCard
