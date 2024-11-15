import React from 'react'

interface Card {
  image?: string
  title: string
  desc: string
  tag?: string
  optionalExp?: {}
}

interface ModalCarouselProps {
  card: Card
  onClose: () => void
}

const ModalCarousel: React.FC<ModalCarouselProps> = ({ card, onClose }) => {
  return (
    <div className="fixed !z-[9999999] inset-0 bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full !h-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 text-lg font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-bold">{card.title}</h2>
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[300px] object-cover my-4 rounded-md"
        />
        <p className="text-sm text-gray-700">{card.desc}</p>
      </div>
    </div>
  )
}

export default ModalCarousel
