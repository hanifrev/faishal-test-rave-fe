export interface TourSumSectionType {
  heroImage: string
  heroTitle: string
  heroDescription: string
  cardDescription: {
    title: string
    mainIcon: any
    descLine1: {
      text: string
      id: string
      isClickable?: boolean
      tooltip?: boolean | string
    }
    descLine2?: string
  }[]
  heroCTA: {
    title: string
    description: string
  }
  tripCode: string
  tileHero: string[]
  marketingMessage: string
}
