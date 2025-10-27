import CheckSVG from './CheckSVG'
import { useTranslation } from 'react-i18next'

const BeAHero = () => {
  const { t } = useTranslation('home')

  return (
    <section
      data-aos="fade-up"
      className="w-full sm:mx-auto flex flex-col items-center pt-24 sm:pt-10 relative font-Montserrat"
    >
      <div
        className="flex justify-center items-center
        sm:flex-col md:flex-col lg:flex-col sm:w-11/12
        sm:gap-5 md:gap-5 lg:gap-5"
      >
        <div className="flex flex-col items-start">
          {/* Titulo */}
          <h2 className="font-bold text-[40px] sm:text-[30px]">
            {t('beAHero.title1')}
            <span className="text-primary-green">
              {t('beAHero.spanTitle')}
            </span>{' '}
            {t('beAHero.title2')}
          </h2>

          {/* Subtitulo */}
          <h3 className="font-thin text-[28px] w-[548px] sm:w-full">
            {t('beAHero.titleH3')}
          </h3>

          {/* Info */}
          <div>
            <div className="flex justify-center mt-8">
              <CheckSVG className="w-fit me-3" />
              <p className="text-[16px] h-auto max-w-[450px] sm:w-full text-left">
                {t('beAHero.check1')}
                <span className="font-bold">{t('beAHero.check1Span')}</span>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <CheckSVG className="w-fit me-3" />
              <p className="text-[16px] h-auto max-w-[450px] sm:w-full text-left">
                {t('beAHero.check2')}
                <span className="font-bold">{t('beAHero.check2Span')}</span>
                {t('beAHero.check2AfterSpan')}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <CheckSVG className="w-fit me-3" />
              <p className="text-[16px] h-auto max-w-[450px] sm:w-full text-left">
                <span className="font-bold">{t('beAHero.check3Span')}</span>
                {t('beAHero.check3')}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <CheckSVG className="w-fit me-3" />
              <p className="text-[16px] h-auto max-w-[450px] sm:w-full text-left">
                {t('beAHero.check4')}
              </p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex items-center mt-6 justify-center">
          <img
            src="https://r2.awaqinternship.org/Home/world.png"
            alt="World"
            className="w-[512px] h-[512px] sm:w-[369px] sm:h-[369px] sm:object-contain"
          />
          {/* <VideoFrameSVG className="absolute sm:hidden" /> */}
        </div>
      </div>
      <img
        src="https://r2.awaqinternship.org/Home/background-beahero.png"
        className="w-full xl:-mt-4 2xl:-mt-12"
      />
    </section>
  )
}

export default BeAHero
