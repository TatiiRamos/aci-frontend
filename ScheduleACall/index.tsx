import { useTranslation } from 'react-i18next'
import PaypalHero from '../../components/Heros/PaypalHero/PaypalHero'
import StepsSecondary from '../../components/Steps/StepsSecondary'
import BigButton from '../../components/Buttons/BigButton'
import Call from '../../components/Buttons/buttonIcons/Call'
import { URL_CONFIG } from '../../config/urls'

const ScheduleACall = () => {
  const { t } = useTranslation('scheduleACall')
  const { t: tStations } = useTranslation('stations')

  const images = [
    'https://r2.awaqinternship.org/ScheduleACall/step1.png',
    'https://r2.awaqinternship.org/ScheduleACall/step2.png',
    'https://r2.awaqinternship.org/ScheduleACall/step3.png',
    'https://r2.awaqinternship.org/ScheduleACall/step4.png'
  ]

  const steps = t('steps', { returnObjects: true }) as string[]

  return (
    <section>
      <PaypalHero
        title={t('title')}
        subtitle={t('subtitle')}
        background="bg-[#e5f8f8]"
        image={'https://r2.awaqinternship.org/ScheduleACall/hero.png'}
        fontWeight="font-[700]"
      />

      <StepsSecondary
        images={images}
        steps={steps}
        psContainer="ps-[72px] sm:ps-[42px] md:ps-[42px]"
        psTitle="ps-[32px]"
      />

      {/* Call to action Section */}
      <div className="bg-[#e5f8f8] pt-14 pb-12 sm:pt-10 sm:pb-4 xl:pt-[134px] xl:pb-[109px] 2xl:pt-[134px] 2xl:pb-[109px]">
        <div
          data-aos="fade-up"
          className="flex 2xl:w-[70rem] sm:w-10/12 sm:flex-col md:flex-col lg:flex-col w-11/12 mx-auto 
            sm:text-left md:text-center lg:text-center font-Montserrat"
        >
          {/* Texto */}
          <div className="w-1/2 sm:w-full md:w-full lg:w-full flex flex-col justify-center">
            <h2 className="font-[700] sm:text-[30px] text-[38px] leading-[40px] mb-2">
              {t('CTATitle')}
            </h2>
            <p
              className="font-[300] md:text-[22px] lg:text-[22px] xl:text-[28px] 2xl:text-[28px] text-[20px] 
                leading-[28px] xl:leading-[44px] 2xl:leading-[44px] sm:w-full md:w-full lg:w-full w-[90%]"
            >
              {t('CTASubtitle')}
            </p>
          </div>

          {/* Botón */}
          <div
            className="w-1/2 sm:w-full md:w-full lg:w-full flex justify-center 
              sm:my-5 md:mt-10 lg:mx-auto lg:mt-10"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={URL_CONFIG.BOOKING}
              title={t('CTATitle')}
            >
              <BigButton
                title={t('CTATitle')}
                bgColor="bg-secondary-aqua my-0"
                fontSize="sm:text-[20px]"
                icon={<Call />}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleACall
