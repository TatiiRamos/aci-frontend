// TODO: cambiar la imagen por la de azure. Investigar
import Button from '../../../components/Buttons/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface AboutStationProps {
  titulo: string | undefined
  subtitulo: string | undefined
  texto: string | undefined
  description: string | undefined
}

const AboutTheStation: React.FC<AboutStationProps> = ({
  titulo,
  subtitulo,
  texto
}) => {
  const { t } = useTranslation('stations')

  return (
    <section
      className="flex flex-col justify-center items-center w-full relative pb-5 mb-20
        bg-gradient-to-b from-white from-40% to-[#c8e7e78a]"
    >
      <div
        className="2xl:w-[70rem] flex items-center justify-center sm:mt-[34px] mt-[64px]
        md:flex-col-reverse sm:flex-col-reverse mx-auto"
      >
        {/* Imagen */}
        <img
          src="https://r2.awaqinternship.org/Estaciones/SobreLaEstacion/img-station.png"
          alt="Parrots"
          className="max-w-[570px] 2xl:w-[560px] sm:w-[300px] md:w-[500px] lg:w-[400px] xl:w-[500px]
            sm:mt-12 md:mt-12 pb-16 sm:pb-6 lg:ms-4"
        />
        <div
          className="2xl:w-[584px] w-11/12 sm:ms-0 md:ms-0 ms-[32px] lg:mx-10 xl:mx-10
          sm:flex sm:flex-col
          md:flex md:flex-col"
        >
          {/* Titulo */}
          <h2
            className="text-[38px] sm:text-[30px] md:text-[30px] lg:text-[30px]
              leading-[40px] sm:leading-[35px] md:leading-[35px] lg:leading-[35px] font-[700]"
          >
            {titulo}
          </h2>

          {/* Subtitulo */}
          <h2
            className="text-[28px] sm:text-[23px] md:text-[23px] lg:text-[23px]
              leading-[44px] sm:leading-[30px] md:leading-[30px] lg:leading-[30px] font-[300] mb-[24px]"
          >
            {subtitulo}
          </h2>

          {/* Descripción */}
          <p className="font-[400] text-[14px] leading-[20px] mb-[32px] text-left">
            {texto}
          </p>

          {/* Botón */}
          <Link to="/internships">
            <Button title={t('aboutTheStation.section4')} />
          </Link>
        </div>
      </div>

      {/* Ellipse */}
      <img
        src="https://r2.awaqinternship.org/Home/Ellipse-whoisaimedat.png"
        className="relative top-[23px] w-screen"
      />
    </section>
  )
}

export default AboutTheStation
