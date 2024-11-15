import { CheckBlackIcon } from 'assets'
import ModalCarousel from 'components/elements/ModalCarousel'
import TagHighlight from 'components/elements/TagHighlight'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface Card {
  image?: string
  title: string
  desc: string
  tag?: string
  optionalExp?: {}
}

interface CarouselProps {
  cards: Card[]
}

const Carousels: React.FC<CarouselProps> = ({ cards }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  }

  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const handleOpenModal = (card: Card) => {
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots
        infinite={false}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="carousel-item-padding"
        renderDotsOutside
        customTransition="all 0.5s"
        transitionDuration={500}
        slidesToSlide={2}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[311px] w-full md:w-[300px] lg:w-[405px] xl:w-[411px] flex flex-col border border-[#e6e6e6] rounded-md relative cursor-pointer "
          >
            <TagHighlight
              text={
                card.optionalExp ? 'Optional Experience' : 'Iconic Experience'
              }
              optional={card.optionalExp}
              className="absolute top-2 left-[-5px]"
            />
            <img
              src={card.image}
              className="h-[166px] sm:h-[220px] object-cover z-[-1]"
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-sm md:text-base xl:text-lg font-bold">
                {card.title}
              </h3>
              <p className="text-sm xl:text-base">
                {card.desc.slice(0, 123)}...
              </p>
              <span
                onClick={() => handleOpenModal(card)}
                className="text-sm md:text-base cursor-pointer font-bold border-dotted border-b border-b-[#e02044] max-w-fit z-50"
              >
                See more
              </span>
            </div>
            <div className="px-4 pb-4 gap-2 flex items-center">
              <img src={CheckBlackIcon} className="w-6" />
              <p className="text-xs">Included With Trip</p>
            </div>
          </div>
        ))}
      </Carousel>
      {selectedCard && (
        <ModalCarousel card={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Carousels
