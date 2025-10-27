import { useTranslation } from 'react-i18next'

const TermsAndConditions = () => {
  const { t } = useTranslation('termsAndConditions')

  return (
    <div className="sm:w-11/12 md:w-10/12 lg:w-10/12 w-7/12 mx-auto mb-10">
      <main className="text-primary-blue text-left font-Montserrat">
        {/* TITULO Y DESCRIPCIÓN */}
        <div data-aos="fade-up" className="mt-4">
          <h2 className="text-[24px] xl:text-[30px] 2xl:text-[30px] flex font-bold">
            {t('title')}
          </h2>
          <p className="text-[16px]">{t('description')}</p>
        </div>

        {/* INDICE */}
        <div data-aos="fade-up">
          <p className="font-bold mt-6 text-[20px] xl:text-[24px] 2xl:text-[24px]">
            {t('titleTableOfContents')}
          </p>
          {/* {content?.termsAndConditions[language]?.tableOfContents.map(
            (
              item: { title: string; subContents?: string[] },
              index: number
            ) => (
              <div className="mt-1 text-[16px]" key={index}>
                <p>{item.title}</p>
                {item.subContents && (
                  <ul>
                    {item.subContents.map(
                      (subContent: string, subIndex: number) => (
                        <li key={subIndex} className="ms-3">
                          {subContent}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )
          {/* Temporal: migración compleja pendiente */}
        </div>

        {/* CONTENIDO */}
        {/* Temporal: migración compleja pendiente - se completará después */}
      </main>
    </div>
  )
}

export default TermsAndConditions
