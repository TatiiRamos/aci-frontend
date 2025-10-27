import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import Button from '../../../components/Buttons/Button'

const FooterAboutECOSOC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="">
      {/* Text */}
      <div className="relative bg-footer-ecosoc">
        <p
          data-aos="fade-up"
          className="2xl:w-[543px] max-w-[543px] w-11/12 mx-auto text-[16px] leading-[24px] text-center relative top-0"
          dangerouslySetInnerHTML={{
            __html: content?.ecosoc[language].aboutEcosocFooter.text
          }}
        ></p>
      </div>

      {/* Text with button */}
      <div className="bg-primary-blue relative">
        <img
          src="https://r2.awaqinternship.org/ECOSOC/bg-footer.jpg"
          className="opacity-25 sm:h-[400px]"
        />

        {/* Content */}
        <div
          data-aos="fade-up"
          className="mx-auto 2xl:w-[721px] w-11/12 max-w-[721px] absolute top-0 bottom-0 left-0 right-0 justify-center flex-col flex"
        >
          {/* Title */}
          <p
            className="text-white font-[700] text-[36px] sm:text-[30px] md:text-[30px] 
              leading-[44px] sm:leading-[35px] md:leading-[35px] text-center"
          >
            {content?.ecosoc[language].aboutEcosocFooter.textFooter1}
          </p>
          <p
            className="text-white mb-[24px] font-[700] text-[36px] sm:text-[30px] md:text-[30px] 
              leading-[44px] sm:leading-[35px] md:leading-[35px] text-center"
          >
            {content?.ecosoc[language].aboutEcosocFooter.textFooter2}
            <span className="text-primary-green">
              {content?.ecosoc[language].aboutEcosocFooter.textFooter3}
            </span>
            <span>
              {content?.ecosoc[language].aboutEcosocFooter.textFooter4}
            </span>
          </p>
          <a
            target="_blank"
            href={'https://r2.awaqinternship.org/ECOSOC/Accreditation.pdf'}
          >
            <Button
              title={content?.ecosoc[language].button1}
              bgColor="bg-secondary-aqua mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterAboutECOSOC
