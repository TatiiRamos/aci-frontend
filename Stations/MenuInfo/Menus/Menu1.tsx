const Menu1 = ({
  title,
  subTitle1,
  subTitle2,
  posterVideo,
  galeriaImg1,
  galeriaImg2,
  galeriaImg3,
  explanatoryTitle1,
  explanatoryText1,
  explanatoryTitle2,
  explanatoryText2
}: any) => {
  return (
    <div className="font-Montserrat 2xl:w-full w-11/12 sm:mx-auto md:mx-auto sm:mt-10 md:mt-10">
      <h2
        data-aos="zoom-in"
        className="text-[30px] xl:text-[38px] 2xl:text-[38px] mb-[40px] font-[700]
          sm:text-center leading-[40px] text-primary-blue"
      >
        {title}
      </h2>

      {/* Video */}
      <div data-aos="fade-up" className="mt-10">
        <h2
          className="text-primary-blue font-bold
            text-[30px] xl:text-[38px] 2xl:text-[38px] sm:text-center mb-3"
        >
          {subTitle1}
        </h2>
        <video
          src="https://r2.awaqinternship.org/Info/InfoAwaqAci.mp4"
          // poster={posterVideo}
          controls
          className="w-[900px] h-[381px] sm:h-[250px] m-auto object-cover rounded-[28px]"
        ></video>
      </div>

      {/* Galería */}
      <div data-aos="fade-up" className="mt-10 w-full">
        <h2
          className="text-primary-blue font-[700]
          text-[30px] xl:text-[38px] 2xl:text-[38px] sm:text-center mb-3"
        >
          {subTitle2}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-[8px] sm:w-full md:w-full">
          <img
            src={galeriaImg1}
            alt="img1"
            className="object-cover w-[269.33px] h-[224px] mx-1 sm:my-3 rounded-3xl
              sm:m-auto md:m-auto md:my-3 lg:w-[165px] lg:h-[170px] xl:w-[220px] xl:h-[200px]"
          />
          <img
            src={galeriaImg2}
            alt="img2"
            className="object-cover w-[269.33px] h-[224px] mx-1 sm:my-3 rounded-3xl
              sm:m-auto md:m-auto md:my-3 lg:w-[165px] lg:h-[170px] xl:w-[220px] xl:h-[200px]"
          />
          <img
            src={galeriaImg3}
            alt="img3"
            className="object-cover w-[269.33px] h-[224px] mx-1 sm:my-3 rounded-3xl
              sm:m-auto md:m-auto md:my-3 lg:w-[165px] lg:h-[170px] xl:w-[220px] xl:h-[200px]"
          />
        </div>
      </div>

      {/* Texto explicativo */}
      <div className="mb-[63px]">
        <div data-aos="fade-up" className="my-10">
          <h3 className="text-primary-blue font-[800] text-[20px] xl:text-[24px] 2xl:text-[24px] leading-[27px]">
            {explanatoryTitle1}
          </h3>
          <p className="text-primary-blue font-[400] text-[16px] leading-[24px] text-left">
            {explanatoryText1}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 className="text-primary-blue font-[800] text-[20px] xl:text-[24px] 2xl:text-[24px] leading-[27px]">
            {explanatoryTitle2}
          </h3>
          <p className="text-primary-blue font-[400] text-[16px] leading-[24px] text-left">
            {explanatoryText2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu1
