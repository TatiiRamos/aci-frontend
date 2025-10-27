import HeroAboutCountry from './components/Hero'
import { Link } from 'react-router-dom'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'

interface content {
  title: string
  paragraphs: {
    paragraph: string
    link?: string
    linkName?: string
  }[]
}

const HealthCountry = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="text-primary-blue text-left font-Montserrat">
      <HeroAboutCountry
        image="https://r2.awaqinternship.org/AboutColombia/medico-colombia.jpg"
        title={content?.aboutCountry[language]?.colombia.section3?.title}
      />
      <div>
        <div className="mx-auto pt-6 justify-center grid grid-cols-5 sm:flex-col sm:flex w-11/12 2xl:w-8/12">
          <Link
            to="/about-colombia/about"
            className="sm:mb-4 mx-auto text-primary-blue font-semibold w-full
              text-center hover:text-primary-green text-[16px]"
          >
            {content?.aboutCountry[language]?.colombia.section1?.title}
          </Link>
          <Link
            to="/about-colombia/weather"
            className="sm:mb-4 mx-auto text-primary-blue font-semibold w-full
              text-center hover:text-primary-green text-[16px]"
          >
            {content?.aboutCountry[language]?.colombia.section2?.title}
          </Link>
          <Link
            to="/about-colombia/health-and-vaccines"
            className="sm:mb-4 mx-auto text-primary-green font-semibold border-b-[3px] sm:w-8/12 w-full
              text-center border-primary-green sm:pb-2 pb-4 hover:text-primary-green text-[16px]"
          >
            {content?.aboutCountry[language]?.colombia.section3?.title}
          </Link>
          <Link
            to="/about-colombia/visa-and-embassies"
            className="sm:mb-4 mx-auto text-primary-blue font-semibold w-full
              text-center hover:text-primary-green text-[16px]"
          >
            {content?.aboutCountry[language]?.colombia.section4?.title}
          </Link>
          <Link
            to="/about-colombia/currency"
            className="sm:mb-4 mx-auto text-primary-blue font-semibold w-full
              text-center hover:text-primary-green text-[16px]"
          >
            {content?.aboutCountry[language]?.colombia.section5?.title}
          </Link>
        </div>
        <div className="2xl:w-8/12 w-11/12 mx-auto mt-10">
          {content?.aboutCountry[language]?.colombia.section3?.paragraphs.map(
            (item: any, index: number) => (
              <p className="mb-5 text-[16px] break-words" key={index}>
                {item.paragraph}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-primary-green font-bold hover:text-primary-green-60"
                    rel="noopener noreferrer"
                  >
                    {item.linkName}
                  </a>
                )}
              </p>
            )
          )}
          {content?.aboutCountry[language]?.colombia.section3?.content.map(
            (item: content, index: number) => (
              <div className="mb-10" key={index}>
                <p className="font-semibold text-[20px] xl:text-[24px] 2xl:text-[24px] mt-10">
                  {item.title}
                </p>
                {item.paragraphs.map((obj: any, index: number) => (
                  <p className="mb-4 text-[16px] break-words" key={index}>
                    {obj.paragraph}
                    {obj.link && (
                      <a
                        href={obj.link}
                        target="_blank"
                        className="text-primary-green font-bold hover:text-primary-green-60"
                        rel="noopener noreferrer"
                      >
                        {obj.linkName}
                      </a>
                    )}
                  </p>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default HealthCountry
