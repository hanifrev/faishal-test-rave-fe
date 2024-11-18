import { MapFullscreen, MapMinusIcon, MapPlusIcon } from 'assets'
import { urlFor } from 'lib/sanityClient'
import { useGetTourSummaryQuery } from 'lib/services/api'
import React, { useRef } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const MapZoom: React.FC = () => {
  const { data, isLoading, isError } = useGetTourSummaryQuery()
  const transformRef = useRef<any>(null)

  const handleZoomIn = () => {
    transformRef.current?.zoomIn()
  }

  const handleZoomOut = () => {
    transformRef.current?.zoomOut()
  }

  const handleFullScreen = () => {
    const element = document.getElementById('map-container')
    element?.requestFullscreen()
  }

  return (
    <div id="map-container" className="relative w-full h-full ">
      <TransformWrapper ref={transformRef}>
        {({ resetTransform }) => (
          <>
            <div className="absolute z-10 top-2 right-2 space-y-2 flex flex-col">
              {isLoading && <>Loading maps....</>}
              {isError && <>Error fetching data</>}
              <button onClick={handleZoomIn} className="map-btn">
                <img src={MapPlusIcon} className="w-3" />
              </button>
              <button onClick={handleZoomOut} className="map-btn">
                <img src={MapMinusIcon} className="w-3" />
              </button>
              <button onClick={handleFullScreen} className="map-btn">
                <img src={MapFullscreen} className="w-3" />
              </button>
            </div>
            <TransformComponent>
              <img
                src={
                  data?.mapImage ? urlFor(data.mapImage.asset._ref) : undefined
                }
                // src="https://www.trafalgar.com/media/qiba3kpe/map-best-italy-guided-tour-2024-1.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1824&height=1026&quality=80"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

export default MapZoom
