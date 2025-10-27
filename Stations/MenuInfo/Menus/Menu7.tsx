import { Link } from 'react-router-dom'
import Button from '../../../../components/Buttons/Button'

const Menu7 = ({
  title1,
  title2,
  title3,
  title4,
  infoAbout1,
  infoAbout2,
  nameContact,
  titleContact,
  btnContact,
  posterVideo,
  image
}: any) => {
  return (
    <div
      className="font-Montserrat md:mt-10
        sm:w-11/12 sm:mx-auto md:w-11/12 md:mx-auto lg:w-11/12 xl:w-11/12 2xl:w-full "
    >
      <div data-aos="fade-up">
        {/* Subtitulo */}
        <h3
          className="text-[#072339] text-[28px] xl:text-[32px] 2xl:text-[32px]
            sm:text-center leading-[36px] font-[500] mb-[20px]"
        >
          {title1}
        </h3>

        {/* Video */}
        <video
          src="https://somosawaqblob.blob.core.windows.net/somosawaq/Estaciones%20Biologicas.mp4"
          // poster={posterVideo}
          controls
          className="w-full h-[389px] sm:h-[250px] object-cover rounded-[28px]"
        ></video>

        {/* Información */}
        <div data-aos="fade-up" className="my-10">
          <h3
            className="text-primary-blue font-[500]
              text-[28px] sm:text-[23px] xl:text-[32px] 2xl:text-[32px] leading-[36px] mb-[11px]"
          >
            {title2}
          </h3>
          <p className="text-primary-blue text-[14px] font-[400] leading-[20px] text-left">
            {infoAbout1}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3
            className="text-primary-blue font-[500]
              text-[28px] sm:text-[23px] xl:text-[32px] 2xl:text-[32px] leading-[36px] mb-[11px]"
          >
            {title3}
          </h3>
          <p className="text-primary-blue text-[14px] font-[400] leading-[20px] text-left">
            {infoAbout2}
          </p>
        </div>

        {/* Información de contacto */}
        <div data-aos="fade-up" className="mt-16">
          {/* Titulo */}
          <h3
            className="text-primary-blue font-[800] text-[24px]
              leading-[27px] mb-[30px] sm:text-center"
          >
            {title4}
          </h3>
          <div
            className="flex w-[350px] items-center sm:items-start sm:flex-col sm:w-[240px] sm:mx-auto
              md:w-[480px] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] mb-[60px]"
          >
            {/* Imagen */}
            <img
              src={image}
              alt="contacto_img"
              className="min-w-[200px] h-[200px] object-cover rounded-[80px_80px_0px_80px] sm:mx-auto"
            />

            {/* Info Contacto */}
            <div className="ml-[25px] sm:m-10 sm:ml-0 sm:w-full sm:text-center">
              <h3 className="font-[800] leading-[24px] mb-[10px] text-[#072339] text-[20px] sm:text-lg">
                {nameContact}
              </h3>
              <h3 className="mb-[10px] font-[500] text-[#072339] text-[20px] leading-[30px] sm:text-lg">
                {titleContact}
              </h3>
              <Link to="/contact">
                <Button
                  title={btnContact}
                  fontSize="text-[16px] sm:text-[16px] sm:mx-auto sm:mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu7
