import { CloseIcon } from 'assets'
import React from 'react'

interface Card {
  image?: string
  title: string
  desc: string
  tag?: string
  optionalExp?: {
    price?: string
    category?: string
    bookDesc?: string
  }
}

interface ModalCarouselProps {
  card: Card
  onClose: () => void
}

const ModalCarousel: React.FC<ModalCarouselProps> = ({ card, onClose }) => {
  return (
    <div
      className="fixed !z-[99999] inset-0 bg-[#0000007f] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 md:px-[116px] pt-0 rounded-lg  w-full xl:max-w-[1140px] !h-full md:!h-[92%] relative !z-[999999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center">
          <span
            className={`          
               h-[22px] font-bold text-lg md:absolute md:left-4 md:top-0`}
          >
            {card.optionalExp && 'Optional Experience'}
          </span>
          <button
            onClick={onClose}
            className="absolute pt-2 top-0 right-4 text-gray-700 text-lg "
          >
            <img src={CloseIcon} className="w-6" />
          </button>
        </div>
        <div
          className={`absolute inset-x-0 top-9 border-t border-gray-300 w-screen  left-1/2 -translate-x-1/2 md:hidden z-[999] h-[1px] ${
            card.optionalExp ? 'block' : 'hidden'
          } `}
        />
        <h2 className="pt-6 md:pt-10 font-bold text-base">{card.title}</h2>
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[300px] md:h-[395px] xl:h-[452px] object-cover my-4 rounded-md"
        />
        <div className="flex flex-col md:flex-row md:justify-between">
          <span className="flex flex-col md:pr-20 md:basis-[120%]">
            <h2 className="text-base font-bold pb-2">Experience Info</h2>
            <p className="text-sm">{card.desc}</p>
          </span>
          {card.optionalExp && (
            <div className="pt-4 md:pt-0">
              <span className="font-bold ">
                <h2 className="text-base font-bold">Pricing Info</h2>
                <p className="text-sm">{card.optionalExp.category}</p>
                <p className="text-sm">{card.optionalExp.price}</p>
              </span>
              <span>
                <h2 className="text-base font-bold pb-2 pt-4">How to book?</h2>
                <p className="text-sm">{card.optionalExp.bookDesc}</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalCarousel
