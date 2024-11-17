export interface ItinerarySectionsType {
  mainTitle: string
  mainDescription: string
  list: ItineraryType[]
}

export interface ItineraryType {
  day: string
  title: string
  highlightTag?: string
  city: string[]
  facilities?: facilitiesType[]
  image: {
    asset: {
      _ref: string
    }
  }
  description: string
  carousel: {
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
  }[]
}

interface facilitiesType {
  title: 'Transfer' | 'Accommodation' | 'Welcome' | 'Included Meals'
  desc?: string
  note?: string
}
