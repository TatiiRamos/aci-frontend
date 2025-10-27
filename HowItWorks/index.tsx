import { useContext } from 'react'
import { CallToAction } from '../../components/CallToAction/CallToAction'
import HeroComponent from '../../components/Heros/HeroComponent'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import Steps from '../../components/Steps/Steps'

const HowItWorks = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  // Imagenes a utilizar en cada paso
  const images = [
    'https://r2.awaqinternship.org/HowItWorks/step1.png',
    'https://r2.awaqinternship.org/HowItWorks/step2.png',
    'https://r2.awaqinternship.org/HowItWorks/step3.png',
    'https://r2.awaqinternship.org/HowItWorks/step4.png',
    'https://r2.awaqinternship.org/HowItWorks/step5.png'
  ]

  const steps = content?.howItWors?.[language]?.steps || []

  return (
    <section>
      <HeroComponent
        title={content?.howItWors[language].title}
        subtitle={content?.howItWors[language].subtitle}
        background="bg-gradient-to-b from-[#e5f8f8] to-white"
        fontWeight="font-[700]"
      />

      <Steps
        images={images}
        steps={steps}
        isDots={true}
        height="h-[560px] sm:h-fit md:h-fit lg:h-fit"
        psContainer="ps-[52px] sm:ps-[42px] md:ps-[42px]"
        psTitle="ps-[32px]"
      />

      <CallToAction />
    </section>
  )
}

export default HowItWorks
