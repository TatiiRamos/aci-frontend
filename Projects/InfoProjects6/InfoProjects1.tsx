import { useTranslation } from '../../../Context/TranslationContext'
import { FaArrowRight } from 'react-icons/fa' // Importa el icono de flecha de Font Awesome

export const InfoProjects1 = () => {
  const { language, content } = useTranslation()

  return (
    <div>
      <p data-aos="zoom-in" className="mx-20 my-6 text-center">
        {content?.projects[language].project6.section1.fulldescription}
      </p>
      <div data-aos="zoom-in" className="flex items-center">
        <div className="flex-1 border-t border-gray-300 mr-4"></div>
        <p data-aos="zoom-in" className="font-semibold text-zinc-500">
          {content?.projects[language].project1.whyandhow}
        </p>
        <div className="flex-1 border-t border-gray-300 ml-4"></div>
      </div>
      <div className="relative w-full flex flex-row sm:flex sm:flex-col sm:p-2 p-20 px-32">
        <div
          data-aos="zoom-in"
          className="sm:basis-1/2 basis-1/2 w-full mr-10 "
        >
          <ul>
            <h3 className=" text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8">
              {content?.projects[language].project6.section1.ul1.titleul}
            </h3>
            <li className="flex items-center my-4 font-semibold text-lg">
              <FaArrowRight className="mr-2 h-10 w-8" />{' '}
              {/* Icono de flecha a la izquierda */}
              {content?.projects[language].project6.section1.ul1.li1}
            </li>
            <li className="flex items-center my-4 font-semibold text-lg">
              <FaArrowRight className="mr-2 h-10 w-8" />
              {content?.projects[language].project6.section1.ul1.li2}
            </li>
          </ul>
        </div>

        <div
          data-aos="zoom-in"
          className="sm:basis-1/2 basis-1/2 flex-col ml-10"
        >
          <ul>
            <h3 className=" text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8">
              {content?.projects[language].project6.section1.ul2.titleul}
            </h3>
            <li className="flex items-center my-4 font-semibold text-lg">
              <FaArrowRight className="mr-2 h-10 w-8" />{' '}
              {/* Icono de flecha a la izquierda */}
              {content?.projects[language].project6.section1.ul2.li1}
            </li>
            <li className="flex items-center my-4 font-semibold text-lg">
              <FaArrowRight className="mr-2 h-10 w-8" />{' '}
              {/* Icono de flecha a la izquierda */}
              {content?.projects[language].project6.section1.ul2.li2}
            </li>
            <li className="flex items-center my-4 font-semibold text-lg">
              <FaArrowRight className="mr-2 h-10 w-8" />{' '}
              {/* Icono de flecha a la izquierda */}
              {content?.projects[language].project6.section1.ul2.li3}
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="zoom-in" className=" sm:px-4 px-32">
        <ul>
          <h3
            data-aos="zoom-in"
            className=" text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8"
          >
            {content?.projects[language].project6.section1.ul3.titleul}
          </h3>
          <li className="flex items-center my-4 font-semibold text-lg">
            <FaArrowRight className="mr-2 h-10 w-8" />{' '}
            {/* Icono de flecha a la izquierda */}
            {content?.projects[language].project6.section1.ul3.li1}
          </li>
          <li className="flex items-center my-4 font-semibold text-lg">
            <FaArrowRight className="mr-2 h-10 w-8" />{' '}
            {/* Icono de flecha a la izquierda */}
            {content?.projects[language].project6.section1.ul3.li2}
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" className="flex items-center ml-36 my-8">
        <p className=" text-zinc-500 font-semibold">
          {content?.projects[language].project6.section1.impact.titleul}
        </p>
        <div className="flex-1 border-y h-[2.8px] border-gray-300 ml-4 mr-40"></div>
      </div>
      <div data-aos="zoom-in" className="flex items-center sm:px-2 px-32 pb-28">
        <ul className="flex items-center ">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li1}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li2}
          </li>
          <li className="flex items-center  px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li3}
          </li>
          {/* No existen li4 li5
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li4}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li5}
          </li> */}
        </ul>
      </div>
    </div>
  )
}
