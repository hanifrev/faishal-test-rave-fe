import { CheckBlackIcon, QuestionIcon } from 'assets'
import ModalCarousel from 'components/elements/ModalCarousel'
import TagHighlight from 'components/elements/TagHighlight'
import Tooltips from 'components/elements/Tooltips'
import { urlFor } from 'lib/sanityClient'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface Card {
  image: {
    asset: {
      _ref: string
    }
  }
  title: string
  desc: string
  tag?: string
  optionalExp?: {
    price?: string
    category?: string
    bookDesc?: string
    addCost?: string
  }
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

  const [showTooltip, setShowTooltip] = useState<number | null>(null)

  const tooltipHover = (index: number) => {
    setShowTooltip(index)
  }

  const tooltipLeave = () => {
    setShowTooltip(null)
  }

  return (
    <div className="gd-carousel-wrapper">
      <Carousel
        responsive={responsive}
        showDots
        infinite={false}
        keyBoardControl
        containerClass="gd-carousel"
        itemClass="carousel-item-padding"
        renderDotsOutside
        customTransition="all 0.5s"
        transitionDuration={500}
        slidesToSlide={1}
        // arrows
        renderButtonGroupOutside
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
              className="absolute top-2 left-[-5px] !text-sm"
            />
            <img
              src={urlFor(card.image.asset._ref)}
              className="h-[166px] sm:h-[220px] object-cover z-[-1]"
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-sm md:text-base xl:text-lg font-bold font-serifs">
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
            {card.optionalExp ? (
              <div className="px-4 pb-4 gap-2 flex justify-between items-center relative">
                <p className="text-xs md:text-sm font-bold">
                  Additional Cost Applies
                </p>
                <img
                  src={QuestionIcon}
                  className="w-4 md:w-6"
                  onMouseEnter={() => tooltipHover(index)}
                  onMouseLeave={tooltipLeave}
                />
                {showTooltip == index && (
                  <div className="absolute top-[-32px] right-11 md:-top-4 z-50">
                    <Tooltips content={card.optionalExp.addCost} />
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 pb-4 gap-2 flex items-center">
                <img src={CheckBlackIcon} className="w-6" />
                <p className="text-xs md:text-sm font-bold">
                  Included With Trip
                </p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      {/* <div className="font-bold text-center pt-7">
        {} of {cards.length}
      </div> */}
      {selectedCard && (
        <ModalCarousel card={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Carousels
