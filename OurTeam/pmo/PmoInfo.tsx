import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'

export const PmoInfo = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <>
      <div
        className="flex justify-between sm:flex-wrap font-Montserrat text-primary-blue
          sm:flex-col md:flex-col lg:flex-col mx-auto
          sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-[70rem]"
      >
        {/* TITULO Y DESCRIPCIÓN */}
        <div
          className="sm:text-center md:text-center lg:text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="w-11/12 sm:w-full md:w-11/12 lg:w-11/12 md:mx-auto lg:mx-auto text-primary-blue">
            {/* Titulo */}
            <p className="sm:text-[30px] md:text-[30px] text-[38px] sm:px-2 font-bold font-Montserrat">
              {content?.team[language].sectionPmo.titleSection}
            </p>
            {/* Descripción */}
            <p className="w-5/12 sm:w-10/12 sm:mx-auto md:w-full lg:w-full text-[16px] text-left">
              {content?.team[language].sectionPmo.descriptionSection}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="sm:mx-auto sm:text-center
            sm:w-10/12 md:w-full lg:w-full
            sm:mt-4 md:mt-2 lg:mt-4"
        >
          <div
            className="flex flex-col text-sm md:float-none lg:float-none float-right text-black sm:text-base
              md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12 md:mx-auto lg:mx-auto
              md:flex-row lg:flex-row"
          >
            {/* PROYECTO A */}
            <div className="mt-8 2xl:mt-4 md:w-1/3 lg:w-1/3 px-4">
              <p className="bg-[#f36c28] sm:mx-auto sm:w-10/12 md:w-full lg:w-full text-center w-fit px-3 py-1 rounded-md text-base font-semibold mb-2">
                {content?.team[language].sectionPmo.titleProyectA}
              </p>
              <p className="font-semibold">
                {content?.team[language].sectionPmo.proyectA[0].title}
              </p>
              <p className="mb-2 sm:w-9/12 mx-auto">
                {content?.team[language].sectionPmo.proyectA[0].function}
              </p>
              <p className="font-semibold">
                {content?.team[language].sectionPmo.proyectA[1].title}
              </p>
              <p className="sm:w-9/12 mx-auto">
                {content?.team[language].sectionPmo.proyectA[1].supplies}
              </p>
            </div>

            {/* PROYECTO B */}
            <div className="mt-8 md:w-1/3 lg:w-1/3 px-4">
              <p className="bg-[#299a48] sm:mx-auto sm:w-10/12 md:w-full lg:w-full text-center w-fit px-3 py-1 rounded-md text-base font-semibold mb-2">
                {content?.team[language].sectionPmo.titleProyectB}
              </p>
              <p className="font-semibold">
                {content?.team[language].sectionPmo.proyectB[0].title}
              </p>
              <p className="mb-2 sm:w-9/12 mx-auto">
                {content?.team[language].sectionPmo.proyectB[0].function}
              </p>
              <p className="font-semibold">
                {content?.team[language].sectionPmo.proyectB[1].title}
              </p>
              <p className="sm:w-9/12 mx-auto">
                {content?.team[language].sectionPmo.proyectB[1].supplies}
              </p>
            </div>

            {/* PROYECTO C */}
            <div className="mt-8 md:w-1/3 lg:w-1/3 px-4">
              <p className="bg-[#02afda] sm:mx-auto sm:w-10/12 md:w-full lg:w-full text-center w-fit px-3 py-1 rounded-md text-base font-semibold mb-2">
                {content?.team[language].sectionPmo.titleProyectC}
              </p>
              <p className="font-semibold">
                {content?.team[language].sectionPmo.proyectC[0].title}
              </p>
              <p className="sm:w-9/12 mx-auto">
                {content?.team[language].sectionPmo.proyectC[0].function}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
