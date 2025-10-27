import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

interface HeroProjectsProps {
  project: string
  img: any
  url: string
  labelUrl: string
}

export const HeroProjects: React.FC<HeroProjectsProps> = ({
  project,
  img,
  url
}) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <>
      <div className="relative sm:h-fit md:h-fit">
        {/* BACKGROUND DEL PROYECTO */}
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay brightness-50"
          src={img}
          alt={content?.projects[language]?.[project]?.title}
          loading="lazy"
        />

        {/* TITULO Y DESCRIPCIÓN DEL PROYECTO */}
        <div
          className="flex sm:flex-row flex-wrap mx-auto xl:flex-nowrap relative  
            xl:w-11/12 2xl:w-11/12 w-full xl:h-screen 2xl:h-screen
            pt-28 xl:pt-0 2xl:pt-0
            pb-16 xl:pb-0 2xl:pb-0"
        >
          <div
            className="flex flex-col relative mx-auto lg:px-28 justify-center
              w-11/12 xl:w-10/12 2xl:w-8/12"
          >
            <h1
              data-aos="zoom-in"
              className="text-center text-white font-bold mx-auto mt-0 sm:mt-4 font-Montserrat
                text-6xl sm:text-3xl xl:w-10/12 2xl:w-10/12"
            >
              {content?.projects[language]?.[project]?.title}
            </h1>
          </div>
        </div>
        {content?.projects[language]?.[project]?.labelUrl !== '' ? (
          <div className="fixed right-8 bottom-8 z-40 font-Montserrat">
            <Link
              to={`/projects/${url}`}
              className="text-primary-blue font-semibold bg-primary-green px-4 py-2 rounded-3xl hover:shadow-md flex"
            >
              <FaArrowLeft className="my-auto me-2" />
              {content?.projects[language]?.[project]?.labelUrl}
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
