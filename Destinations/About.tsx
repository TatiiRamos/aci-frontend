// TODO: cambiar la imagen por la de azure. Investigar

interface CountryProps {
  name: string | undefined
  title: string | undefined
  subtitle: string | undefined
  description: string | undefined
}

const About: React.FC<CountryProps> = ({
  name,
  title,
  subtitle,
  description
}) => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-delay="300"
      className="relative md:px-10 bg-[#F8F8F9]
        lg:px-8 lg:py-8 md:py-0
        xl:py-12 font-Montserrat
        py-16 sm:py-0 flex flex-col justify-center sm:bg-none"
    >
      <div className="flex flex-row mx-auto sm:flex-col">
        <div className="lg:my-auto sm:mt-10 sm:w-10/12 md:w-10/12 md:mx-auto lg:w-1/2 xl:w-1/2 sm:mx-auto w-[538px] 2xl:h-[518px] sm:h-fit">
          <img
            src="https://r2.awaqinternship.org/Destinos/img-destinos.png"
            alt="Parrots"
            className="sm:pb-10 w-[538px] sm:w-[fit] md:w-10/12 md:mx-auto 2xl:h-[500px] sm:h-fit object-contain"
          />
        </div>
        <div
          className="
              lg:gap-16
              ml-8 sm:mx-auto gap-32 relative my-auto w-[500px] sm:w-11/12 lg:w-1/2"
        >
          {/* Titulo */}
          <h2
            className="
                  sm:text-3xl sm:mb-3
                  md:text-3xl md:mb-3
                  lg:text-3xl
                  xl:text-3xl
                  font-extrabold text-[38px] text-primary-blue"
          >
            {title}
            <span>{name}</span>
          </h2>

          {/* Subtitulo */}
          <p className="text-[18px] font-[500] xl:w-11/12 text-left text-primary-blue">
            {subtitle}
          </p>

          {/* Descripción */}
          <p className="text-[16px] mt-[20px] xl:w-11/12 text-left text-primary-blue">
            {description}
          </p>
        </div>
      </div>

      {/* Imagenes
      <div className="grid sm:grid-cols-1 grid-cols-3 2xl:w-[65rem] mt-8 2xl:mt-[80px] mx-auto w-11/12 xl:w-10/12 gap-[19px]">
        <img src={img1} className="mx-auto" />
        <img src={img2} className="mx-auto" />
        <img src={img3} className="mx-auto" />
      </div> */}
    </section>
  )
}

export default About
