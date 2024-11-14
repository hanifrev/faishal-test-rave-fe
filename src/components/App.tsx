import AboutHeader from './elements/AboutHeader'
import FAQSection from './sections/FAQSection'
import HeaderSection from './sections/HeaderSection'
import ItinerarySection from './sections/ItinerarySection'
import SightseeingHighlightSection from './sections/SightseeingHighlightSection'
import TopTourSection from './sections/TopTourSection'
import TravelHighlightSection from './sections/TravelHighlightSection'

const App = () => {
  return (
    <div className="the-container relative">
      <HeaderSection />
      <TopTourSection />
      <ItinerarySection />
      <AboutHeader />
      <SightseeingHighlightSection />
      <TravelHighlightSection />
      <FAQSection />
    </div>
  )
}

export default App
