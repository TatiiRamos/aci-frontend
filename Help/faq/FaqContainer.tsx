import { useTranslation } from 'react-i18next'
import { Faq } from './Faq'
import { FaqProps } from '../../../types/interfaceHelpCenter'

export const FaqContainer = () => {
  const { t } = useTranslation('help')

  const faqData: FaqProps[] = (
    t('faqContent', { returnObjects: true }) as any[]
  ).map((faq: any) => ({
    question: faq.question,
    answer: {
      text: faq.answer[0].text,
      items: faq.answer[0].items,
      text2: faq.answer[0].text2
    }
  }))

  return (
    <article data-aos="fade-up" className="2xl:w-[70rem] my-14 mx-auto w-11/12">
      <h2 className="text-[30px] xl:text-[38px] 2xl:text-[38px] font-bold text-left mb-4 text-primary-blue">
        {t('faqTitle')}
      </h2>
      <section className="flex flex-col">
        {faqData?.map((faq: FaqProps, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </article>
  )
}
