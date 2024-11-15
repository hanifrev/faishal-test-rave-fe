type TransferInfoType = {
  title: 'Transfer' | 'Accommodation' | 'Welcome' | 'Meals'
  desc?: string
}

interface ItineraryType {
  day: string
  title: string
  highlightTag?: string
  city: string[]
  transferInfo?: TransferInfoType[]
  image: string
  description: string
  carousel: {
    image: string
    title: string
    desc: string
    marker: string
    included: boolean
  }[]
}

export const ItineraryData: ItineraryType[] = [
  {
    day: '1',
    title: 'Welcome to Rome',
    highlightTag: 'Start of Journey',
    city: ['Rome', 'Turin', 'Milan'],
    transferInfo: [
      { title: 'Transfer', desc: 'Transfer from airport to hotel' },
      { title: 'Welcome', desc: 'Meet and greet at the airport' },
      { title: 'Accommodation', desc: 'Check into your hotel' },
      { title: 'Meals', desc: 'Welcome dinner at the hotel' }
    ],
    image: 'rome-welcome.jpg',
    description: 'Experience the beauty of Rome from day one.',
    carousel: [
      {
        image: 'colosseum.jpg',
        title: 'Colosseum Tour',
        desc: 'Visit the historic Colosseum.',
        marker: 'Activity',
        included: true
      },
      {
        image: 'vatican.jpg',
        title: 'Vatican Museums',
        desc: 'Explore the Vatican Museums and Sistine Chapel.',
        marker: 'Activity',
        included: false
      }
    ]
  },
  {
    day: '2',
    title: 'Exploring Turin',
    // highlightTag: 'Day Trip',
    city: ['Turin'],
    transferInfo: [
      {
        title: 'Transfer',
        desc: 'Take a scenic train ride from Rome to Turin.'
      },
      { title: 'Accommodation', desc: "Stay at Turin's historic hotel." }
    ],
    image: 'turin-city.jpg',
    description: 'Discover the charm of Turin with a guided tour.',
    carousel: [
      {
        image: 'mole-antonelliana.jpg',
        title: 'Mole Antonelliana',
        desc: 'Visit the iconic Mole Antonelliana building.',
        marker: 'Landmark',
        included: true
      }
    ]
  }
]
