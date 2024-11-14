import HeaderSection from './sections/HeaderSection'
import ItinerarySection from './sections/ItinerarySection'
import TopTourSection from './sections/TopTourSection'

const App = () => {
  return (
    <div className="the-container relative">
      <HeaderSection />
      <TopTourSection />
      <ItinerarySection />
    </div>
  )
}

export default App
