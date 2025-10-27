import { useTranslation } from 'react-i18next'

export const InfoProjects2 = () => {
  const { t } = useTranslation('projects')

  return (
    <div data-aos="zoom-in">
      <div className=" sm:hidden mx-40">
        <div className=" flex items-center mt-10 ">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.spanstate')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div className=" text-center">{t('project5.section2.state')}</div>
        <div className=" flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.spanstart')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
          <p>{t('project5.section2.spanend')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div className=" flex items-center my-5">
          <div className="flex-1  border-gray-300 -mr-12"></div>
          <p>{t('project5.section2.start')}</p>
          <div className="flex-1  border-gray-300 ml-4"></div>
          <p className="">{t('project5.section2.end')}</p>
          <div className="flex-1  border-gray-300 mr-12"></div>
        </div>
        <div className=" flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.spancountry')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
          <p>{t('project5.section2.spanzone')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div className=" flex items-center my-5">
          <div className="flex-1  border-gray-300 -mr-4"></div>
          <p>{t('project5.section2.country')}</p>
          <div className="flex-1  border-gray-300 -ml-4"></div>
          <p className="">{t('project5.section2.zone')}</p>
          <div className="flex-1  border-gray-300 ml-4"></div>
        </div>
        <div className=" flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.spanobjective')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
          <p>{t('project5.section2.spanfulldescription')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div className=" flex items-center my-5">
          <div className="flex-1  border-gray-300 -mr-4"></div>
          <p className=" mr-5">{t('project5.section2.objective')}</p>
          <div className="flex-1  border-gray-300 -ml-4"></div>
          <p className=" ml-5">{t('project5.section2.fulldescription')}</p>
          <div className="flex-1  border-gray-300 ml-4"></div>
        </div>
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.aimedsectorspan.titleul')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <ul className="flex justify-center my-5">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {t('project5.section2.aimedsectorspan.li1')}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {t('project5.section2.aimedsectorspan.li2')}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {t('project5.section2.aimedsectorspan.li3')}
          </li>
        </ul>
      </div>
      <div className=" hidden sm:block">
        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spanstate')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.state')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spanstart')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.start')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spanend')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.end')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spancountry')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.country')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spanzone')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.zone')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">{t('project5.section2.spanobjective')}</p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.objective')}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {t('project5.section2.spanfulldescription')}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {t('project5.section2.fulldescription')}
          </div>
        </div>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{t('project5.section2.spanaimedsectorspan')}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <ul className="flex justify-center my-5 text-center">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {t('project5.section2.aimedsectorspan.li1')}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {t('project5.section2.aimedsectorspan.li2')}
          </li>
          <li className="flex items-center  px-2 font-extrabold text-[#6A961F] text-ss">
            {t('project5.section2.aimedsectorspan.li3')}
          </li>
          {/* No existen li4 li5
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {t('project5.section2.aimedsectorspan.li4')}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {t('project5.section2.aimedsectorspan.li5')}
          </li> */}
        </ul>
      </div>
    </div>
  )
}
