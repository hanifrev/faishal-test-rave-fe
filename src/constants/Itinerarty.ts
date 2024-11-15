type facilitiesType = {
  title: 'Transfer' | 'Accomodation' | 'Welcome' | 'Meals'
  desc?: string
  note?: string
}

interface ItineraryType {
  day: string
  title: string
  highlightTag?: string
  city: string[]
  facilities?: facilitiesType[]
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
    facilities: [
      { title: 'Transfer', desc: 'Transfer from airport to hotel' },
      { title: 'Welcome', desc: 'Meet and greet at the airport' },
      { title: 'Accomodation', desc: 'Check into your hotel' },
      { title: 'Meals', desc: 'Welcome dinner at the hotel' }
    ],
    image:
      'https://lp-cms-production.imgix.net/2024-07/AdobeStock40207802.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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
    facilities: [
      {
        title: 'Transfer',
        desc: 'Take a scenic train ride from Rome to Turin.',
        note: 'this is small notes thath yntkts'
      },
      { title: 'Accomodation', desc: "Stay at Turin's historic hotel." }
    ],
    image:
      'https://lp-cms-production.imgix.net/2024-07/AdobeStock40207802.jpeg',
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
