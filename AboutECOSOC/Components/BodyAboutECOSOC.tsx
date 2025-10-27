import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'

const BodyAboutECOSOC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div>
      <div
        className="items-center flex w-full justify-between font-Montserrat
          sm:pt-[35px] md:pt-[35px] lg:pt-[20px] pt-[70px] pb-[65px]"
      >
        {/* Contenido */}
        <div
          data-aos="fade-up"
          className="2xl:w-[70rem] w-11/12 flex mx-auto sm:flex-col md:flex-col"
        >
          {/* Imagen */}
          <div className="2xl:w-[526px] w-6/12 sm:w-full md:w-full">
            <img
              src="https://r2.awaqinternship.org/ECOSOC/about-ecosoc.png"
              className="w-[526px] h-[505px] sm:h-[300px] md:h-[300px] sm:my-12 md:my-12 mx-auto object-contain"
            />
          </div>

          <div
            className="w-6/12 sm:w-full md:w-full sm:ms-0 md:ms-0 ms-[32px] 2xl:ps-[32px]
              2xl:w-[445px] m-auto sm:text-center md:text-center"
          >
            {/* Title */}
            <h2
              className="font-[700] text-[38px] leading-[40px]
                sm:text-[30px] sm:leading-[35px] md:text-[30px] md:leading-[35px]"
            >
              {content?.ecosoc[language].aboutEcosocBody.title}
            </h2>

            {/* Text */}
            <p
              className="2xl:w-[540px] font-[400] text-[16px] leading-[24px] mt-[24px] text-left
                sm:leading-[24px] md:leading-[24px]"
            >
              {/* Link */}
              <span className="font-[500] underline">
                <a target="_blank" href="https://ecosoc.un.org/en">
                  {content?.ecosoc[language].aboutEcosocBody.link}
                </a>
              </span>
              {content?.ecosoc[language].aboutEcosocBody.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyAboutECOSOC
