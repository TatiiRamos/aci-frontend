const Menu4 = ({
  titlePais,
  titleRegion,
  titleMunicipio,
  infoPais,
  infoRegion,
  InfoMunicipio,
  titleDescriptivo,
  textoDescriptivo,
  imgMapa
}: any) => {
  return (
    <div className="font-Montserrat 2xl:w-full w-11/12 sm:mx-auto md:mx-auto sm:mt-10 md:mt-10">
      {/* País - Región - Municipio */}
      <div
        data-aos="zoom-in"
        className="flex justify-evenly text-center sm:flex-col
          sm:items-center md:flex-col md:items-center lg:gap-9 xl:gap-9 gap-[16px]"
      >
        <div className="flex flex-col items-center w-[600px] sm:my-5 sm:w-[200px] md:my-5 md:w-[200px]">
          <h4 className="font-[800] text-[20px] leading-[32px] text-primary-blue my-3">
            {titlePais}
          </h4>
          <ul className="text-[#072339] text-[16px] leading-[24px] text-center">
            <li>{infoPais}</li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-[600px] sm:my-5 sm:w-[200px] md:my-5 md:w-[200px]">
          <h4 className="font-[800] text-[20px] leading-[32px] text-primary-blue my-3">
            {titleRegion}
          </h4>
          <ul className="text-[#072339] text-[16px] leading-[24px] text-center">
            <li>{infoRegion}</li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-[600px] sm:my-5 sm:w-[200px] md:my-5 md:w-[200px]">
          <h4 className="font-[800] text-[20px] leading-[32px] text-primary-blue my-3">
            {titleMunicipio}
          </h4>
          <ul className=" text-[#072339] text-[16px] leading-[24px] text-center">
            <li>{InfoMunicipio}</li>
          </ul>
        </div>
      </div>

      {/* Mapa */}
      <div data-aos="fade-up" className="mt-10">
        <img
          src={imgMapa}
          className="w-[900px] h-[381px] sm:h-[250px] m-auto object-cover"
        ></img>
      </div>

      {/* Texto descriptivo */}
      <div className="mb-[63px]">
        <div data-aos="fade-up" className="my-10">
          <h3 className="text-primary-blue font-[800] text-[20px] xl:text-[24px] 2xl:text-[24px] leading-[27px]">
            {titleDescriptivo}
          </h3>
          <p className="text-primary-blue my-3 font-[400] text-[16px] leading-[24px] text-left">
            {textoDescriptivo}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu4
