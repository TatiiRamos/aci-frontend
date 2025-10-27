import { FaRegSadCry } from 'react-icons/fa'
import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { HeaderProjectLanding } from '../components/HeaderProjectLanding'
import { ProjectsSection } from '../components/ProjectsSection'
import { FilterBtn } from '../components/FilterBtn'

const EveryProjectLayout = ({ projectSection, imageBg, url }: any) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="mb-[3rem] font-Montserrat">
      <HeaderProjectLanding
        image={imageBg}
        title={content?.projectLan[language][projectSection].title}
        description={content?.projectLan[language][projectSection].subtitle}
        imageClass="brightness-75"
        url="https://www.somosawaq.org/somos"
        labelUrl={content?.projectLan[language].labelUrl}
      />
      <div
        data-aos="fade-down"
        className="2xl:w-[70rem] w-11/12 mx-auto flex justify-center text-primary-blue 
          text-5xl sm:text-4xl font-extrabold pt-14 mb-10"
      >
        <h2>{content?.projectLan[language].projectsTitle}</h2>
      </div>
      <div className="flex flex-col 2xl:w-[70rem] mx-auto w-11/12">
        {content?.projectLan[language][projectSection].projects.length === 0 ? (
          <div
            data-aos="fade-right"
            className="flex justify-center items-center gap-2 text-3xl p-8"
          >
            <FaRegSadCry />
            {content?.projectLan[language].aintProjects}
          </div>
        ) : (
          <>
            <div className="flex justify-end sm:px-4 md:px-8 mb-14">
              <FilterBtn />
            </div>
            {content?.projectLan[language][projectSection].projects.map(
              (_project: any, index: number) => (
                <ProjectsSection
                  url={url}
                  section={projectSection}
                  indexOfProject={index}
                  key={index}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default EveryProjectLayout
