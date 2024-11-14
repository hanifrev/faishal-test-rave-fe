import { CalendarIcon } from 'assets'
import React, { useState } from 'react'

const TripYearSelector = () => {
  const [selectedYear, setSelectedYear] = useState(2024)
  const years = [2024, 2025, 2026]

  const handleYearSelect = (year: number) => {
    setSelectedYear(year)
  }
  return (
    <div className="flex flex-row w-[342px] justify-between items-center pb-8">
      <div className="flex flex-row gap-[10px]">
        <img src={CalendarIcon} className="w-[13.5px]" />
        <span className="text-base font-semibold">Trip Year</span>
      </div>
      <div>
        <fieldset className="flex border border-[#2d5a7b] rounded-[4px]">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => handleYearSelect(year)}
              className={`w-[70px] h-[30px] font-semibold ${
                selectedYear === year
                  ? 'bg-[#2d5a7b] text-white'
                  : 'bg-white text-[#2d5a7b]'
              } transition-colors duration-200 ease-in-out`}
            >
              {year}
            </button>
          ))}
        </fieldset>
      </div>
    </div>
  )
}

export default TripYearSelector
