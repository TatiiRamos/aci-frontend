import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CardGuide } from './CardGuide'
import { ScrollContext } from '../../../Context/ScrollContext'
import { CardGuideProps } from '../../../types/interfaceHelpCenter'

export const CardsGuide = () => {
  const { t } = useTranslation('help')

  const guideData: CardGuideProps[] = t('guideCards', {
    returnObjects: true
  }) as CardGuideProps[]
  const scrollContext = useContext(ScrollContext)

  if (!scrollContext) {
    throw new Error('ScrollContext must be used within a ScrollProvider')
  }

  const { aboutACIRef } = scrollContext

  return (
    <article
      data-aos="fade-up"
      ref={aboutACIRef}
      className="mb-10 sm:mt-6 mt-14 2xl:w-[70rem] w-11/12 mx-auto"
    >
      <h2 className="text-[30px] xl:text-[38px] 2xl:text-[38px] lg:mb-6 text-left font-bold text-primary-blue">
        {' '}
        {t('guideTitle')}{' '}
      </h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 content-center mt-8">
        {guideData?.map((card: CardGuideProps, index) => (
          <CardGuide
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
            url={card.url}
            titleButton={card.titleButton}
          />
        ))}
      </div>
      {/* <div className="font-bold text-[20px] mb-2 text-right mt-4">
        <p>
          {" "}
          {content?.helpCenter[language].guideLink}{" "}
          <ArrowUpRightIcon className="w-4 h-4 inline-block" />
        </p>
      </div> */}
    </article>
  )
}
