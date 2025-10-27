import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'
import { FaArrowDown } from 'react-icons/fa6'

export const HeaderTeams = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <>
      <div className="relative font-Montserrat">
        <img
          data-aos="fade-zoom-in"
          data-aos-delay="300"
          className="w-full h-screen object-cover absolute mix-blend-overlay"
          src="https://r2.awaqinternship.org/Team/hero-team.jpg"
        />
        <div className="absolute z-10 text-white top-[90%] left-1/2 transform -translate-x-1/2">
          <FaArrowDown
            data-aos="fade-up"
            data-aos-duration="1000"
            className="sm:text-4xl text-5xl animate-bounce transform"
          />
        </div>
        <div className="flex items-center">
          <div
            className="flex flex-row items-center flex-nowrap mx-10 w-full h-screen 
              sm:flex sm:flex-col sm:items-center sm:justify-center sm:flex-nowrap md:flex md:flex-col md:items-center md:justify-center md:flex-nowrap"
          >
            <h2
              data-aos="zoom-in-right"
              className="text-white flex font-bold justify-center whitespace-nowrap ml-20 text-7xl text-center w-1/4
              sm:m-0 m-5 sm:ml-0 sm:text-5xl sm:w-none sm:w-auto font-Montserrat"
            >
              {content?.team[language].header}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
