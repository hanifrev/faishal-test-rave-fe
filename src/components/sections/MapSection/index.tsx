import { ChevronDown } from 'assets'
import MapZoom from 'components/modules/MapZoom'
import { LegendMap } from 'constants/Map'
import { useGetTourSummaryQuery } from 'lib/services/api'
import { useState } from 'react'

const MapSection = () => {
  const { data, isLoading, isError } = useGetTourSummaryQuery()
  const [expandLegend, setExpandLegend] = useState(false)

  return (
    <div
      className={`flex flex-col  ${
        expandLegend ? 'py-6 md:py-12' : ' pt-6 pb-0 md:pt-12 md:pb-0'
      }`}
    >
      <div className="font-bold font-serifs text-[22px] md:text-[28px] lg:text-[32px] text-center pb-5 md:pb-6 lg:pb-8">
        {isLoading
          ? 'Loading...'
          : data?.mapItineraryTitle || 'No title available, check CMS'}
        {isError && <>Error fetching data...</>}
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
          <MapZoom />
        </div>
        <div className="md:basis-[100%] lg:basis-[60%] xl:basis-[45%] md:px-4 md:py-8">
          <div className="md:hidden">
            <button
              onClick={() => setExpandLegend(!expandLegend)}
              className="flex flex-row items-center justify-between w-full"
            >
              <p className="font-bold text-base p-2">LEGEND</p>
              <img
                src={ChevronDown}
                alt="Chevron"
                className={`transition-transform w-4 mr-2 ${
                  expandLegend ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandLegend && (
              <div className="flex flex-row flex-wrap justify-between items-center gap-y-3 pt-2">
                {LegendMap.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row gap-3 w-[50%] pr-8"
                    >
                      <img src={item.icon} className="w-6" />
                      <span className="font-bold text-base">{item.title}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <div className="hidden md:flex flex-col items-start">
            <div className="text-base font-semibold pl-4 h-[43px]">Legend</div>
            <div className="flex flex-col gap-2 xl:gap-4">
              {LegendMap.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row gap-6">
                    <img src={item.icon} className="w-4" />
                    <span className="font-bold text-base">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapSection
