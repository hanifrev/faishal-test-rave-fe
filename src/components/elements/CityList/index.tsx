import { SeparatorIcon } from 'assets'
import React from 'react'

interface CityProp {
  cities: string[]
  classNames?: string
}

const CityList: React.FC<CityProp> = ({ cities, classNames }) => {
  return (
    <span className={`text-secondary text-sm ${classNames}`}>
      {cities.map((city, index) => (
        <React.Fragment key={index}>
          {city || ''}
          {index < cities.length - 1 && (
            <img
              src={SeparatorIcon}
              alt="separator"
              className="inline mx-1 w-4"
            />
          )}
        </React.Fragment>
      ))}
    </span>
  )
}

export default CityList
