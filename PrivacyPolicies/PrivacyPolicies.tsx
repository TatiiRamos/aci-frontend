import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'

const PrivacyPolicies = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="sm:w-11/12 md:w-10/12 lg:w-10/12 w-7/12 mx-auto mb-10">
      <main className="text-primary-blue text-left font-Montserrat">
        {/* TITULO Y DESCRIPCIÓN */}
        <div data-aos="fade-up" className="mt-4">
          <h2 className="text-[24px] xl:text-[30px] 2xl:text-[30px] flex font-bold">
            {content?.privacyPolicies[language].title}
          </h2>
          {content?.privacyPolicies[language].description?.map(
            (item: string, index: number) => (
              <p key={index} className="mt-2 text-[16px]">
                {item}
              </p>
            )
          )}
        </div>

        {/* CONTENIDO */}
        <div>
          {content?.privacyPolicies[language].sections.map(
            (
              item: { title: string; content: []; subContents: [] },
              index: number
            ) => (
              <div data-aos="fade-up" className="mt-8">
                <p className="font-bold text-[20px] xl:text-[24px] 2xl:text-[24px]">
                  {item.title}
                </p>
                {item.content.map((content: { item: string; list?: [] }) => (
                  <div>
                    <p className="mt-2">{content.item}</p>
                    {content.list?.map((list: string[], index: number) => (
                      <li className="my-4 sm:ms-0 ms-4">{list}</li>
                    ))}
                  </div>
                ))}
                {item.subContents?.map(
                  (subContents: { title: string; content: string }) => (
                    <div className="ps-6 mt-4">
                      <p className="font-bold text-[16px] xl:text-[20px] 2xl:text-[20px]">
                        {subContents.title}
                      </p>
                      <p className="text-[16px]">{subContents.content}</p>
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicies
