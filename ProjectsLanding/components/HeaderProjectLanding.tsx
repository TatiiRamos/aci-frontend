import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export const HeaderProjectLanding = ({
  image,
  title,
  description,
  imageClass,
  url,
  labelUrl
}: any) => {
  return (
    <div
      className="m-auto h-screen flex flex-row flex-nowrap content-center items-center justify-center
        sm:flex-col sm:m-auto sm:flex-column
        md:flex-col md:m-auto md:flex-column
        lg:flex-col lg:m-auto lg:flex-column"
    >
      <div
        className="m-auto h-screen flex flex-row flex-nowrap content-center items-center justify-center w-11/12
          sm:flex-col sm:m-auto sm:flex-column
          md:flex-col md:m-auto md:flex-column
          lg:flex-col lg:m-auto lg:flex-column"
      >
        {/* Background */}
        <img
          src={image}
          className={`-z-10 absolute h-screen object-cover w-screen ${imageClass}`}
        />
        {/* Titulo */}
        <h1
          data-aos="fade-right"
          className="w-1/2 sm:w-full md:w-full lg:w-full lg:text-6xl text-5xl
            sm:mb-10 md:mb-10 lg:mb-10 text-center font-bold text-white"
        >
          {title}
        </h1>
        {/* Descripción */}
        <p
          data-aos="zoom-in"
          className="w-1/2 sm:w-full md:w-full lg:w-10/12 text-white lg:text-2xl text-left
            sm:mt-10 md:mt-10 lg:mt-10 sm:px-[0px] px-[4rem] text-[16px]"
        >
          {description}
        </p>
      </div>
      {url !== '' ? (
        <div className="fixed right-8 bottom-8 z-40">
          <Link
            to={`${url}`}
            className="text-primary-blue font-semibold bg-primary-green px-4 py-2 rounded-3xl hover:shadow-md flex"
          >
            <FaArrowLeft className="my-auto me-2" /> {labelUrl}
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
