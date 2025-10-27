import AboutACI from './AboutACI/AboutACI'
import ECOSOC from './ECOSOC/ECOSOC'
import WhosAimedAt from './WhosAimedAt/WhosAimedAt'
import MoreInterships from '../Destinations/MoreInterships'
import OtherStations from '../Stations/OtherStations/OtherStations'
//import FormSearch from "../../components/Form/Form";
import { CallToAction } from '../../components/CallToAction/CallToAction'
import Hero from '../../components/Heros/HomeHero/Hero'
import InfoInternships from '../../components/InternshipACI/InfoInternships'
import BeAHero from './BeAHero/BeAHero'
import { useEffect } from 'react'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'

const Home = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  useEffect(() => {
    const paymentSuccess = sessionStorage.getItem('paymentSuccess')
    if (paymentSuccess) {
      setTimeout(() => {
        sessionStorage.removeItem('paymentSuccess')
      }, 200)
    }
  }, [])

  return (
    <main className="text-primary-blue font-Montserrat-Regular">
      <Hero />
      {/* <FormSearch /> */}
      <AboutACI />
      <WhosAimedAt />
      <BeAHero />
      <MoreInterships />
      <OtherStations
        isHome={true}
        title={content?.estaciones.stationCard[language].section1Home}
        background="https://r2.awaqinternship.org/Internships/Illustration.png"
      />
      <InfoInternships />
      <CallToAction />
      <ECOSOC />
    </main>
  )
}

export default Home
