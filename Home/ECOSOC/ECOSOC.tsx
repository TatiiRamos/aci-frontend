import Button from '../../../components/Buttons/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ECOSOC = () => {
  const { t } = useTranslation('ecosoc')

  return (
    <div className="font-Montserrat">
      <div
        className="items-center flex w-full justify-between h-[412px] 
          sm:h-auto md:h-auto lg:h-auto xl:h-auto
          sm:pt-[35px] md:pt-[35px] lg:pt-[20px] py-[27px] bg-ecosoc"
      >
        {/* Contenido */}
        <div
          data-aos="fade-up"
          className="2xl:w-[70rem] w-11/12 flex mx-auto sm:flex-col md:flex-col"
        >
          <div
            className="sm:w-full md:w-full sm:ms-0 md:ms-0 2xl:w-[690px]
              m-auto sm:text-center md:text-center"
          >
            <h2
              className="font-[800] text-[24px] leading-[27px] 
                sm:text-[30px] sm:leading-[35px] md:text-[30px] md:leading-[35px]"
            >
              {t('title')}
            </h2>
            <p
              className="font-[300] text-[20px] leading-[30px] mt-[13px] 
                sm:text-[20px] sm:leading-[32px] md:text-[20px] md:leading-[32px]"
            >
              {t('text')}
            </p>
            <div className="flex mt-[24px] gap-[16px] sm:justify-center md:justify-center">
              <a
                target="_blank"
                href={'https://r2.awaqinternship.org/ECOSOC/Accreditation.pdf'}
              >
                <Button title={t('button1')} bgColor="bg-secondary-aqua" />
              </a>
              <Link to="/about-ecosoc">
                <Button
                  title={t('button2')}
                  isOutlined={true}
                  bgColor="bg-transparent"
                />
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="sm:w-full md:w-full">
            <img
              src="https://r2.awaqinternship.org/ECOSOC/ecosoc-home.png"
              className="w-[527px] h-[205px] xl:h-[250px] 2xl:h-[387px] mt-8 sm:mt-12 sm:mb-6 md:my-12 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECOSOC
