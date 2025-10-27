import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import Button from '../../../components/Buttons/Button'

const HeroAboutECOSOC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="font-Montserrat sm:-mt-[50px] md:-mt-[50px]">
      <div
        className="items-center flex w-full justify-between 
          sm:pt-[35px] md:pt-[35px] lg:pt-[20px] pt-[70px] bg-ecosoc"
      >
        {/* Contenido */}
        <div
          data-aos="fade-up"
          className="2xl:w-[70rem] w-11/12 flex mx-auto sm:flex-col md:flex-col"
        >
          <div
            className="w-6/12 sm:w-full md:w-full sm:ms-0 md:ms-0 ms-[32px] 
              2xl:w-[445px] m-auto sm:text-center md:text-center"
          >
            <h2
              className="font-[700] text-[38px] leading-[40px] 
                sm:text-[30px] sm:leading-[35px] md:text-[30px] md:leading-[35px]"
            >
              {content?.ecosoc[language].title}
            </h2>
            <p
              className="font-[300] text-[28px] leading-[44px] mt-[24px] 
                sm:text-[20px] sm:leading-[32px] md:text-[20px] md:leading-[32px]"
            >
              {content?.ecosoc[language].text}
            </p>
            <div className="flex mt-[24px] gap-[16px] sm:justify-center md:justify-center">
              <a
                target="_blank"
                href={'https://r2.awaqinternship.org/ECOSOC/Accreditation.pdf'}
              >
                <Button
                  title={content?.ecosoc[language].button1}
                  bgColor="bg-secondary-aqua"
                />
              </a>
              <a target="_blank" href="https://ecosoc.un.org/en">
                <Button
                  title={content?.ecosoc[language].button3}
                  isOutlined={true}
                  bgColor="bg-transparent"
                />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="2xl:w-[527px] w-6/12 sm:w-full md:w-full">
            <img
              src="https://r2.awaqinternship.org/ECOSOC/ECOSOC.png"
              className="w-[527px] h-[505px] sm:h-[300px] md:h-[300px] sm:my-12 md:my-12 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
      <img
        src="https://r2.awaqinternship.org/ECOSOC/ellipse.png"
        className="w-full"
      />
    </div>
  )
}

export default HeroAboutECOSOC
