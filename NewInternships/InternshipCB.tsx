import InfoInternships from '../../components/InternshipACI/InfoInternships'
import { CallToAction } from '../../components/CallToAction/CallToAction'
import HeroNewInternships from '../../components/Heros/IntershipHero/HeroNewInternships'
import React, { useState, useContext } from 'react'
import MenuLateral from '../../components/InternshipACI/MenuLateral'
import InfoMenuCB from '../../components/InternshipACI/InfoMenuCB'
import Prácticas from '../../components/InternshipACI/Prácticas'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'

const InternshipCB: React.FC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const [selectedOption, setSelectedOption] = useState('opcion1')

  const handleMenuSelect = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <section className="min-w-[340px]">
      <HeroNewInternships
        title={content?.newInternships[language].tituloCB}
        subtitle={content?.newInternships[language].subTituloCB}
        btn={content?.newInternships[language].btnReservar}
      />
      {selectedOption === 'opcion5' ? (
        <Prácticas
          image="https://r2.awaqinternship.org/Internships/about-internship.png"
          title={content?.newInternships[language].tituloCB}
          Info1={
            content?.newInternships[language].internship2.seccion5.practicaInfo1
          }
          Info2={
            content?.newInternships[language].internship2.seccion5.practicaInfo2
          }
          btn={content?.newInternships[language].btnReservar}
        />
      ) : (
        ''
      )}
      <div
        className="2xl:w-[70rem] justify-between mx-auto flex 
          sm:flex-col md:flex-col sm:mt-24"
      >
        <MenuLateral
          onSelectMenuItem={handleMenuSelect}
          selectedOption={selectedOption}
          menuItems={content?.newInternships[language].menuItems ?? []}
        />
        <InfoMenuCB option={selectedOption} />
      </div>
      <InfoInternships />
      <CallToAction />
    </section>
  )
}

export default InternshipCB
