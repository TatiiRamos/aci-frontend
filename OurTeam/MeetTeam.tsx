import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { IoMdMale } from 'react-icons/io'
import { IoMdFemale } from 'react-icons/io'

export const MeetTeam = () => {
  let color = 'text-primary-blue'
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const ourteam = [
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/hungria.png',
      count: 3
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/argentina.png',
      count: 7
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/costarica.png',
      count: 2
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/uruguay.png',
      count: 2
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/grecia.png',
      count: 1
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/mexico.png',
      count: 3
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/colombia.png',
      count: 19
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/españa.png',
      count: 5
    },
    {
      country: 'https://r2.awaqinternship.org/Team/countrys/india.png',
      count: 1
    }
  ]

  const ourNationalities = [
    'https://r2.awaqinternship.org/Team/countrys/venezuela.png',
    'https://r2.awaqinternship.org/Team/countrys/argentina.png',
    'https://r2.awaqinternship.org/Team/countrys/costarica.png',
    'https://r2.awaqinternship.org/Team/countrys/uruguay.png',
    'https://r2.awaqinternship.org/Team/countrys/grecia.png',
    'https://r2.awaqinternship.org/Team/countrys/mexico.png',
    'https://r2.awaqinternship.org/Team/countrys/colombia.png',
    'https://r2.awaqinternship.org/Team/countrys/españa.png',
    'https://r2.awaqinternship.org/Team/countrys/india.png'
  ]

  return (
    <>
      <div
        data-aos="fade-up"
        className="w-[70rem] sm:w-full md:w-11/12 lg:w-11/12 m-auto mb-10 sm:mt-0 flex flex-col 
          gap-[5rem] font-Montserrat text-primary-blue"
      >
        {/* PAISES */}
        <div>
          {/* Title */}
          <h2
            className={`${color} font-bold text-center font-Montserrat text-primary-blue sm:text-[30px] md:text-[30px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] my-16`}
          >
            {content?.team[language].sectionMaps}
          </h2>
          {/* Body */}
          <div className="mx-auto my-3 relative justify-center flex">
            <img
              data-aos="zoom-in"
              src="https://r2.awaqinternship.org/Team/countrys/mapteam.png"
              className="mx-auto w-full m:h-fit sm:py-20 sm:object-contain"
            />
            <div
              data-aos="zoom-in"
              className="absolute m-auto grid grid-cols-5 gap-4 sm:grid-cols-4 md:grid-cols-3
                top-0 left-0 right-0 bottom-6 sm:w-10/12 w-8/12 h-fit flex-wrap"
            >
              {ourteam.map((item, index): any => (
                <div key={index} className="mx-auto relative">
                  <img src={item.country} className="flex" />
                  <div
                    className="bg-[#6e7149] h-12 w-12 flex rounded-full text-lg text-white 
                      text-center absolute top-0 right-3
                      sm:h-8 sm:w-8 sm:right-0
                      md:w-10 md:h-10 lg:w-10 lg:h-10 
                      md:right-0 lg:right-0 xl:right-0"
                  >
                    <p className="m-auto">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              data-aos="fade-right"
              className={`absolute ${color} bottom-0 left-20 sm:left-5 md:left-3 lg:left-5 sm:-top-[4rem]`}
            >
              <IoPersonSharp className="mx-auto text-6xl sm:text-4xl text-primary-blue" />
              <p className="flex justify-center text-4xl sm:text-2xl -top-2 relative text-primary-blue">
                42
              </p>
            </div>
            <p
              className={`absolute bottom-0 sm:-bottom-[4rem] md:-bottom-[8rem] ${color} text-[20px]`}
            >
              {content?.team[language].subtitleMaps}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2] mx-auto w-full py-10 font-Montserrat">
        {/* NACIONALIDADES */}
        <div
          className="mt-28 w-9/12 2xl:w-[70rem] sm:w-full md:w-11/12 lg:w-11/12 m-auto mb-32 sm:mb-10"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          {/* Body */}
          <div className="mx-auto my-3 relative justify-center flex sm:h-[55vh]">
            <img
              src="https://r2.awaqinternship.org/Team/countrys/mapteam.png"
              data-aos="zoom-in"
              className="mx-auto w-full sm:object-contain"
            />
            <div
              data-aos="zoom-in"
              className="absolute m-auto grid grid-cols-5 gap-6 top-[0] left-0 right-0 bottom-0 w-9/12 h-fit flex-wrap 
                  sm:w-10/12 md:w-9/12 lg:w-9/12 sm:grid-cols-4"
            >
              {ourNationalities.map((item, index): any => (
                <div key={index} className="mx-auto relative">
                  <img src={item} className="flex" />
                </div>
              ))}
            </div>
            {/* Generos */}
            <div
              data-aos="fade-down"
              className={`absolute ${color} top-0 left-0 sm:-top-14 sm:left-10`}
            >
              <IoMdMale className="mx-auto text-6xl text-primary-blue" />
              <p className="flex justify-center text-4xl -top-2 relative text-primary-blue">
                50%
              </p>
            </div>
            <div
              data-aos="fade-down"
              className={`absolute ${color} top-0 right-0 sm:-top-14 sm:right-10`}
            >
              <IoMdFemale className="mx-auto text-6xl text-primary-blue" />
              <p className="flex justify-center text-4xl -top-2 relative text-primary-blue">
                50%
              </p>
            </div>
            <p className={`absolute bottom-0 sm:bottom-2 ${color} text-[20px]`}>
              {content?.team[language].subtitleNationalities}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
