import { useContext } from 'react'
import PaypalHero from '../../components/Heros/PaypalHero/PaypalHero'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { Link } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import Steps from '../../components/Steps/Steps'

const Paypal = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  const images = [
    'https://r2.awaqinternship.org/Paypal/paypal1.png',
    'https://r2.awaqinternship.org/Paypal/paypal2.png',
    'https://r2.awaqinternship.org/Paypal/paypal3.png',
    'https://r2.awaqinternship.org/Paypal/paypal4.png'
  ]

  const steps = content?.paypal?.[language]?.steps || []

  return (
    <section className="font-Montserrat">
      <PaypalHero
        title={content?.paypal[language].title}
        subtitle={content?.paypal[language].subtitle}
        background="xl:bg-[#EEF8F8] 2xl:bg-[#EEF8F8]"
        image="https://r2.awaqinternship.org/Paypal/hero-paypal.png"
        isButton={true}
      />

      <Steps
        images={images}
        steps={steps}
        isRowReverse={true}
        height="h-fit my-[64px]"
        margin="my-auto"
        titleWidth="2xl:w-[584px]"
        psContainer="ps-0"
        psTitle="ps-0"
      />

      {/* Pasos */}
      <div data-aos="fade-up" className="bg-[#F8F8F9] py-[92px]">
        <div className="2xl:w-[70rem] w-11/12 mx-auto sm:mb-8">
          {/* Titulos */}
          <div className="text-center">
            <h2 className="font-[700] text-[40px] sm:text-[30px] leading-[45px] sm:leading-[35px] mb-[23px]">
              {content?.paypal[language].pay.title}
              <span className="text-[#06BBCE]">
                {content?.paypal[language].pay.titleSpan}
              </span>
            </h2>
            <p className="font-[300] sm:text-[18px] text-[28px] leading-[35px]">
              {content?.paypal[language].pay.subtitle1}
            </p>
            <p className="font-[300] sm:text-[18px] text-[28px] leading-[35px]">
              {content?.paypal[language].pay.subtitle2}
            </p>
          </div>

          <div className="flex justify-center mx-auto sm:mt-0 md:mt-0 mt-[55px] gap-[25px] sm:flex-col-reverse md:flex-col-reverse">
            {/* Pasos */}
            <div>
              <div className="xl:w-[548px] 2xl:w-[548px]">
                {content?.paypal[language].pay.steps.map(
                  (item: { title: string; content: string }, index: number) => (
                    <div key={index} className="mb-[17px]">
                      <p className="font-[800] text-[24px] leading-[27px]">
                        {item.title}
                      </p>
                      <p className="font-[400] text-[16px] leading-[24px] text-left">
                        {item.content}
                      </p>
                    </div>
                  )
                )}
              </div>
              <p className="font-[400] text-[16px] leading-[24px] my-[23px]">
                {content?.paypal[language].pay.subtitlePay}
                <span>
                  <Link to="/reservations" className="underline">
                    {content?.paypal[language].pay.subtitleButton}
                  </Link>
                </span>
              </p>
              <p className="font-[300] text-[28px] leading-[35px] my-[23px]">
                {content?.paypal[language].pay.span}
              </p>
              <div className="flex gap-[16px]">
                <Button
                  title={content?.paypal[language].pay.buttonPaypal}
                  bgColor="bg-[#06BBCE]"
                  fontSize="text-[16px] text-white leading-[24px]"
                />
                <Button
                  title={content?.paypal[language].pay.buttonKnowMore}
                  isOutlined={true}
                  bgColor="bg-transparent"
                  fontSize="text-[16px]"
                />
              </div>
            </div>

            {/* Imagen */}
            <div className="my-auto sm:w-full md:w-full sm:h-fit mx-auto w-[491px] h-[397px]">
              <img
                src="https://r2.awaqinternship.org/Paypal/pay.png"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        data-aos="fade-up"
        className="2xl:w-[70rem] w-11/12 mx-auto text-center mt-[67px]"
      >
        <div>
          <h2 className="font-[700] text-[36px] sm:text-[30px] sm:leading-[35px] leading-[44px] xl:w-[829px] 2xl:w-[829px] mx-auto">
            {content?.paypal[language].footer.title}
          </h2>
          <div className="mt-[32px] font-[300] sm:text-[22px] text-[28px] sm:leading-[35px] leading-[44px]">
            <p>{content?.paypal[language].footer.subtitle1}</p>
            <p>
              {content?.paypal[language].footer.subtitle2}
              <span>
                <Link to="/contact" className="underline font-[600]">
                  {content?.paypal[language].footer.linkSpan}
                </Link>
              </span>
              {content?.paypal[language].footer.subtitle3}
            </p>
          </div>
        </div>
        <div className="mt-[20px]">
          <img src="https://r2.awaqinternship.org/Paypal/footer-paypal.png" />
        </div>
      </div>

      {/* <CallToAction /> */}
    </section>
  )
}

export default Paypal
