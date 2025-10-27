import OurInternships from '../Stations/OurInternships/OurInternships'
import InfoInternships from '../../components/InternshipACI/InfoInternships'
import { CallToAction } from '../../components/CallToAction/CallToAction'
import HeroComponent from '../../components/Heros/HeroComponent'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'

const Internship = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <section>
      {/* <FormSearch /> */}
      <HeroComponent
        title={content?.estaciones.ourInternships[language].section1}
        subtitle={content?.estaciones.ourInternships[language].section2}
        background="bg-gradient-to-b from-[#e5f8f8] to-white"
        fontWeight="font-[700]"
      />
      <OurInternships />
      <InfoInternships />
      <CallToAction />
    </section>
  )
}

export default Internship
