import { ProgramsBar } from './ProgramsBar'
import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { ItemMember } from '../groupTeam/components/ItemMember'
import { TitleMember } from '../groupTeam/components/TitleMember'
import { BtnGoBackPrograms } from './BtnBackPrograms'

const InfoTEDI = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    // <div className="flex flex-row pt-28 pb-24 bg-gradient-to-tr from-[#546134] via-[#2b3c24] to-[#96822d]">
    <div className="flex flex-row xl:w-[70rem] 2xl:w-[70rem] mx-auto my-10 font-Montserrat">
      <section>
        <ProgramsBar />
      </section>
      <section
        data-aos="fade-right"
        className="flex justify-top flex-col w-5/6 gap-8 sm:w-auto md:w-auto lg:w-auto"
      >
        <div className="flex justify-center">
          <TitleMember
            title={content?.team[language].tedi.teamName}
            description={content?.team[language].tedi.description}
          />
        </div>
        <div className="flex justify-center flex-row flex-wrap">
          {content?.team[language].tedi.team.map(
            ({ name, position, img, linkedin }: any, index: number) => (
              <ItemMember
                key={index}
                img={img}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            )
          )}
        </div>
        <div className="flex items-end justify-end mr-4 sm:mt-14 md:mt-14">
          <BtnGoBackPrograms />
        </div>
      </section>
    </div>
  )
}

export default InfoTEDI
