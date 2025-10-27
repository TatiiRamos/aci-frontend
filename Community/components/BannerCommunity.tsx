import { useTranslation } from 'react-i18next'

export const BannerCommunity = () => {
  const { t } = useTranslation('community')

  return (
    <div>
      <header className="h-[500px] w-full relative font-Montserrat text-white">
        <img
          src="https://r2.awaqinternship.org/Community/bg-hero-community.jpg"
          className="h-full w-full object-cover"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="300"
          className="flex absolute justify-center top-0 bottom-0 left-0 right-0 place-items-center mx-auto"
        >
          <div className="flex flex-col text-center justify-center">
            <div className="mb-[24px]">
              <p
                className="text-[40px] font-[800] leading-[50px] 
                  sm:text-[30px] sm:leading-[37px] md:text-[30px] md:leading-[37px]"
              >
                {t('banner.title')}
              </p>
            </div>
            <p
              className="font-Marck-Script mx-auto sm:w-11/12 w-[550px] text-[40px] leading-[44px] 
                sm:text-[25px] sm:leading-[28px] md:text-[25px] md:leading-[28px]"
            >
              {t('subtitle')}
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default BannerCommunity
