import { useTranslation } from '../../../Context/TranslationContext'

export const InfoProjects3 = () => {
  const { language, content } = useTranslation()

  return (
    <div>
      <div className="sm:m-2 m-32 sm:mb-2 mb-10">
        <img
          data-aos="zoom-in"
          src="https://r2.awaqinternship.org/projects/project6/banner.jpg"
        />
      </div>
      <div className="flex items-center sm:px-2 px-32 pb-28">
        <ul data-aos="zoom-in" className="flex items-center">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li1}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li2}
          </li>
          <li className="flex items-center  px-2 font-extrabold text-[#6A961F] sm:text-ss text-lg">
            {content?.projects[language].project6.section1.impact.li3}
          </li>
        </ul>
      </div>
    </div>
  )
}
