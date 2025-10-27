import { useTranslation } from 'react-i18next'

export const InfoProjects3 = () => {
  const { t } = useTranslation('projects')

  return (
    <div>
      <p className="mx-20 my-6">{t('project5.section1.fulldescription')}</p>
      <div className="flex items-center">
        <div className="flex-1 border-t border-gray-300 mr-4"></div>
        <p className="font-semibold text-zinc-500">{t('project5.whyandhow')}</p>
        <div className="flex-1 border-t border-gray-300 ml-4"></div>
      </div>
      <div
        data-aos="zoom-in"
        className="relative w-full flex flex-row sm:flex sm:flex-col sm:p-2 p-20 px-32"
      >
        <div className="sm:basis-1/2 basis-1/2 w-full mr-10">
          <h3
            data-aos="zoom-in"
            className="text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8"
          >
            {t('project5.section1.ul1.titleul')}
          </h3>
          <p className="mb-4">{t('project5.section3.subsection1')}</p>
          <ul className="list-decimal ml-4">
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li1')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li2')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li3')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li4')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li5')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li6')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li7')}
            </li>
            <li className=" items-center my-4">
              {t('project5.section3.subsection1.ol.li8')}
            </li>
          </ul>
        </div>

        <div
          data-aos="zoom-in"
          className="sm:basis-1/2 basis-1/2 flex-col ml-10"
        >
          <h3
            data-aos="zoom-in"
            className="text-3xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8"
          >
            {t('project5.section1.ul2.titleul')}
          </h3>
          <p>{t('project5.section3.subsection2')}</p>
          <p>{t('project5.section3.subsection2')}</p>
        </div>
      </div>
    </div>
  )
}
