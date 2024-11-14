import { CalendarIcon, MealsIcon, PinLocIcon, WalkIcon } from 'assets'

export const DescCards = [
  {
    title: 'Card Title 1',
    mainIcon: CalendarIcon,
    descLine1: {
      text: 'Description line 1 with icon',
      showIcon: true,
      id: '#',
      isClickable: false
    },
    descLine2: 'Additional description line 2.'
  },
  {
    title: 'Card Title 2',
    mainIcon: MealsIcon,
    descLine1: {
      text: 'Description line 1 without icon',
      showIcon: false,
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
      showIcon: true,
      id: '#',
      isClickable: false
    }
    // descLine2: 'Description line 2 with more details.'
  },
  {
    title: 'Card Title 4',
    mainIcon: PinLocIcon,
    descLine1: {
      text: 'View day-by-day trip itinerary',
      showIcon: true,
      id: '#101',
      isClickable: true
    },
    descLine2: null // No second line
  }
]
