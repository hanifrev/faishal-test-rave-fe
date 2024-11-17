import React from 'react'
import { CarouselProps } from 'react-multi-carousel'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface CarouselBtnProps extends CarouselProps {
  next: () => void
  previous: () => void
  carouselState: {
    currentSlide: number
    totalItems: number
    slidesToShow: number
  }
}

const CarouselBtn: React.FC<CarouselBtnProps> = ({
  next,
  previous,
  carouselState
}) => {
  const { currentSlide, totalItems, slidesToShow } = carouselState

  const isNextDisabled = currentSlide + slidesToShow >= totalItems
  const isPrevDisabled = currentSlide === 0

  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-4">
      <button
        onClick={previous}
        disabled={isPrevDisabled}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#e6e6e6] ${
          isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
      >
        <FaChevronLeft color="black" />
      </button>
      <button
        onClick={next}
        disabled={isNextDisabled}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#e6e6e6] ${
          isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
      >
        <FaChevronRight color="black" />
      </button>
    </div>
  )
}

export default CarouselBtn
