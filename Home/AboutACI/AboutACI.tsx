import CheckSVG from '../BeAHero/CheckSVG'
// TODO: investigar como cambiar por azure
import { useTranslation } from 'react-i18next'
import { TranslationContext } from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { ScrollContext } from '../../../Context/ScrollContext'

interface AboutACIItem {
  title: string
  content: string
}

const AboutACI = () => {
  const { t } = useTranslation('home')
  const { language } = useContext(TranslationContext)

  const scrollContext = useContext(ScrollContext)

  if (!scrollContext) {
    throw new Error('ScrollContext must be used within a ScrollProvider')
  }

  const { aboutACIRef } = scrollContext

  return (
    <section
      data-aos="fade-up"
      ref={aboutACIRef}
      className="flex flex-col px-6 mx-auto py-14 lg:my-20 2xl:w-[70rem]"
    >
      <h2 className="text-[38px] sm:text-[30px] font-Montserrat font-bold md:-mb-2 text-center">
        {t('aboutACI.title')}
      </h2>
      <div className="flex mx-auto gap-[32px] pt-7 justify-center md:flex-col-reverse sm:flex-col-reverse">
        <div
          className="flex items-start w-5/12 2xl:w-[546px] 2xl:h-[553px] 
            sm:w-11/12 sm:mx-auto md:w-8/12 md:mx-auto"
        >
          <img
            src="https://r2.awaqinternship.org/Home/GroupACI.png"
            alt="GroupACI"
            className="me-20 sm:me-0 md:me-0 lg:me-10"
          />
        </div>
        <div className="w-6/12 sm:w-full md:w-9/12 lg:w-6/12 md:mx-auto">
          <div className="font-Montserrat">
            <br />
            {(
              t('aboutACI.items', { returnObjects: true }) as AboutACIItem[]
            ).map((item: AboutACIItem, index: number) => (
              <div className="mb-4 flex" key={index}>
                <CheckSVG className="w-fit" />
                <div className="w-full justify-start">
                  <p className="font-bold ms-1">
                    {item.title}
                    <span className="font-normal ms-1">{item.content}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutACI
