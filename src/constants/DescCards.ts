import { CalendarIcon, MealsIcon, PinLocIcon, WalkIcon } from 'assets'

export interface DescType {
  title: string
  mainIcon: any
  descLine1: {
    text: string
    id: string
    isClickable?: boolean
    tooltip?: boolean | string
  }
  descLine2?: string
}
;[]

export const DescCard: DescType[] = [
  {
    title: 'Card Title 1',
    mainIcon: CalendarIcon,
    descLine1: {
      text: 'Description line 1 with icon',
      id: '#',
      isClickable: false,
      tooltip:
        'Austria, Belgium, Czech, Slovakia, Sweden, Luxemburg, Germany, Swiss, Netherlands, Austria, Belgium, Czech, Slovakia, Sweden, Luxemburg, Germany, Swiss, Netherlands'
    },
    descLine2: 'Additional description line 2.'
  },
  {
    title: 'Card Title 2',
    mainIcon: MealsIcon,
    descLine1: {
      text: 'Description line 1 without icon',
      id: '#',
      isClickable: false
    },
    descLine2: 'Another description line 2.'
  },
  {
    title: 'Card Title 3',
    mainIcon: WalkIcon,
    descLine1: {
      text: 'Dynamic',
      id: '#',
      isClickable: false,
      tooltip: 'additional information'
    }
  },
  {
    title: 'Card Title 4',
    mainIcon: PinLocIcon,
    descLine1: {
      text: 'View day-by-day trip itinerary',
      id: '#itinerary',
      isClickable: true
    }
  }
]
