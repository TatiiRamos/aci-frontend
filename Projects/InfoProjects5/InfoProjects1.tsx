import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa' // Importa el icono de flecha de Font Awesome

export const InfoProjects1 = () => {
  const { t } = useTranslation('projects')

  return (
    <div data-aos="zoom-in">
      <div data-aos="zoom-in" className="flex items-center mt-4">
        <div className="flex-1 border-t border-gray-300 mr-4"></div>
        <p className="font-semibold text-zinc-500">{t('project1.whyandhow')}</p>
        <div className="flex-1 border-t border-gray-300 ml-4"></div>
      </div>
      <div
        data-aos="zoom-in"
        className="relative w-full flex flex-col sm:flex sm:flex-col sm:p-2 p-20 px-32"
      >
        <div className=" w-full mr-10 ">
          <ul>
            <h3 className=" text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8">
              {t('project5.section1.ul1.titleul')}
            </h3>
            <li className="flex font-semibold items-center my-4">
              <FaArrowRight className="mr-2 h-10 w-8" />{' '}
              {/* Icono de flecha a la izquierda */}
              {t('project5.section1.ul1.li1')}
            </li>
          </ul>
        </div>

        <div className=" flex-col">
          <ul>
            <h3 className=" text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8">
              {t('project5.section1.ul2.titleul')}
            </h3>
            <li className="flex font-semibold items-center my-4">
              <FaArrowRight className="mr-2 h-10 w-8" />
              {t('project5.section1.ul2.li1')}
            </li>
          </ul>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex items-center ml-36 my-8 sm:ml-4">
        <p className=" text-zinc-500 font-semibold">
          {t('project5.section1.ul3.titleul')}
        </p>
        <div className="flex-1 border-y h-[2.8px] border-gray-300 ml-4 mr-40 sm:hidden"></div>
      </div>
      <div data-aos="zoom-in" className="flex items-center sm:px-2 px-32 pb-28">
        <ul className="flex items-center ">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {t('project5.section1.ul3.li1')}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {t('project5.section1.ul3.li2')}
          </li>
          <li className="flex items-center px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {t('project5.section1.ul3.li3')}
          </li>
        </ul>
      </div>
    </div>
  )
}
