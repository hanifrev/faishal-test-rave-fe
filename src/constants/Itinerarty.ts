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
    tag: string
    optionalExp?: {
      price?: string
      category?: string
      bookDesc?: string
    }
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
        image: 'https://dummyimage.com/300',
        title: ' 1 Tour',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Optional Experience',

        optionalExp: {
          price: '$53',
          bookDesc:
            'Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour.'
        }
      },
      {
        image: 'https://dummyimage.com/300',
        title: '2 Museums',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Activity'
      },
      {
        image: 'https://dummyimage.com/300',
        title: '3 Tour',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Activity',

        optionalExp: {
          price: '$53',
          bookDesc:
            'Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour.'
        }
      },
      {
        image: 'https://dummyimage.com/300',
        title: 'Vatican Museums',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Activity'
      },
      {
        image: 'https://dummyimage.com/300',
        title: 'Colosseum Tour',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Activity',

        optionalExp: {
          price: '$53',
          bookDesc:
            'Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour.'
        }
      },
      {
        image: 'https://dummyimage.com/300',
        title: 'Vatican Museums',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Activity'
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
        image: 'https://dummyimage.com/300',
        title: 'Mole Antonelliana',
        desc: 'Discover ancient treasures of Rome with a Local Specialist. See Circus Maximus and visit the mighty Colosseum, which bears witness to the limitless courage of the gladiators.',
        tag: 'Landmark'
        // optionalExp: {
        //   price: '$53',
        //   bookDesc:
        //     'Optional Experiences are enhancements to your tour and can be booked through your Travel Director while on tour.'
        // }
      }
    ]
  }
]
