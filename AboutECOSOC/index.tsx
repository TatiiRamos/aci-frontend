import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'
import HeroAboutECOSOC from './Components/HeroAboutECOSOC'
import BodyAboutECOSOC from './Components/BodyAboutECOSOC'
import FooterAboutECOSOC from './Components/FooterAboutECOSOC'

const AboutECOSOC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="font-Montserrat sm:mt-[50px] md:mt-[50px]">
      <HeroAboutECOSOC />
      <BodyAboutECOSOC />
      <FooterAboutECOSOC />
    </div>
  )
}

export default AboutECOSOC
