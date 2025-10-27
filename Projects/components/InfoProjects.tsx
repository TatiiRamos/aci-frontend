import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { MdPermContactCalendar } from 'react-icons/md'

export const InfoProjects = ({ project, isFrame }: any) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const frame = isFrame

  interface ProjectItem {
    title: string
    a: string
    b: string
    c: string
  }

  interface ProjectImgs {
    img: string
  }

  interface ProjectVideos {
    video: string
  }

  return (
    <>
      <div
        className="relative sm:h-fit md:h-fit w-12/12 font-Montserrat 2xl:w-[70rem]
        sm:flex-col md:flex-col lg:flex-col mx-auto flex py-10 xl:px-10"
      >
        {/* INFO FECHA-ESTADO-LOCALIDAD-ETC */}
        <div
          data-aos="fade-up"
          className="flex relative text-lg md:text-center lg:text-center
            sm:flex-wrap md:flex-wrap lg:flex-wrap sm:justify-center
            sm:mx-auto md:mx-auto lg:mx-auto sm:text-center
            flex-col sm:flex-row md:flex-row lg:flex-row
            w-2/12 sm:w-11/12 md:w-11/12 lg:w-10/12"
        >
          {/* PAIS */}
          <div className="sm:w-10/12 md:w-4/12 lg:w-4/12">
            <p className="text-[16px]">
              {content?.projects[language]?.[project]?.spancountry}
            </p>
            <p
              className="text-primary-blue text-[16px] font-semibold border-black pb-6
                border-b-[1px] sm:border-none md:border-none lg:border-none"
            >
              {content?.projects[language]?.[project]?.country}
            </p>
          </div>

          {/* LOCALIDAD */}
          <div className="sm:w-10/12 md:w-4/12 lg:w-4/12">
            <p className="pt-6 sm:p-0 md:p-0 lg:p-0 text-[16px]">
              {content?.projects[language]?.[project]?.spanzone}
            </p>
            <p
              className="text-primary-blue text-[16px] font-semibold border-black pb-6
                border-b-[1px] sm:border-none md:border-none lg:border-none"
            >
              {content?.projects[language]?.[project]?.zone}
            </p>
          </div>

          {/* ESTADO */}
          <div className="sm:w-10/12 md:w-4/12 lg:w-4/12">
            <p className="pt-6 sm:p-0 md:p-0 lg:p-0 text-[16px]">
              {content?.projects[language]?.[project]?.spanstate}
            </p>
            <p
              className="text-primary-blue text-[16px] font-semibold border-black pb-6
                border-b-[1px] sm:border-none md:border-none lg:border-none"
            >
              {content?.projects[language]?.[project]?.state}
            </p>
          </div>

          {/* FECHA */}
          <div className="sm:w-10/12 md:w-6/12 lg:w-4/12">
            <p className="pt-6 sm:p-0 md:p-0 lg:p-0 text-[16px]">
              {content?.projects[language]?.[project]?.spandate}
            </p>
            <p className="text-primary-blue font-semibold pb-6 text-[16px]">
              {content?.projects[language]?.[project]?.date}
            </p>
          </div>

          {/* CONTACTO */}
          <div className="sm:w-10/12 md:w-6/12 lg:w-4/12 mt-10 sm:mt-6 md:mt-0 lg:mt-0">
            <p className="text-primary-blue text-[16px] font-bold md:hidden lg:hidden sm:justify-center md:justify-center sm:mb-4 flex items-center">
              <MdPermContactCalendar className="text-3xl -ms-1 me-2" />
              {content?.projects[language]?.[project]?.spancontact}
            </p>
            <p className="pt-4 sm:p-0 md:p-0 lg:p-0 text-[16px]">
              {content?.projects[language]?.[project]?.spancontactname}
            </p>
            <p
              className="text-primary-blue text-[16px] font-semibold border-black pb-6
                border-b-[1px] sm:border-none md:border-none lg:border-none"
            >
              {content?.projects[language]?.[project]?.contactname}
            </p>
          </div>

          <div className="sm:w-10/12 md:w-12/12 lg:w-4/12 md:mx-auto md:mb-10">
            <p className="pt-6 sm:p-0 md:p-0 lg:p-0 text-[16px]">
              {content?.projects[language]?.[project]?.spancontactemail}
            </p>
            <p
              className="text-green font-semibold text-[16px]
                sm:text-lg md:text-lg lg:text-lg text-base break-words"
            >
              {content?.projects[language]?.[project]?.contactemail}
            </p>
          </div>
        </div>

        {/* CONTENIDO PROYECTO */}
        <div className="w-10/12 sm:w-full md:w-full lg:w-full mx-auto sm:mt-6">
          <div className="sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-9/12 w-10/12 mx-auto text-left">
            <h2
              data-aos="fade-up"
              className="text-[30px] xl:text-[38px] 2xl:text-[38px] text-primary-green font-bold mb-8"
            >
              {content?.projects[language]?.[project]?.title}
            </h2>
            <p
              data-aos="fade-up"
              className="text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold text-primary-blue mb-1"
            >
              {content?.projects[language]?.[project]?.section1.title}
            </p>
            <p data-aos="fade-up" className="text-[16px] mb-6">
              {content?.projects[language]?.[project]?.section1.content}
            </p>
            <p
              data-aos="fade-up"
              className="text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold text-primary-blue mb-1"
            >
              {content?.projects[language]?.[project]?.section2.title}
            </p>
            <p data-aos="fade-up" className="text-[16px] mb-6">
              {content?.projects[language]?.[project]?.section2.content}
            </p>
            <p
              data-aos="fade-up"
              className="text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold text-primary-blue mb-1"
            >
              {content?.projects[language]?.[project]?.section3.title}
            </p>
            <p data-aos="fade-up" className="text-[16px] mb-6">
              {content?.projects[language]?.[project]?.section3.content}
            </p>
            <p
              data-aos="fade-up"
              className="text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold text-primary-blue mb-1"
            >
              {content?.projects[language]?.[project]?.section4.title}
            </p>
            <div data-aos="fade-up" className="text-lg mb-6">
              {content?.projects[language]?.[project]?.section4?.content?.map(
                (item: ProjectItem) => (
                  <div key={item.title} className="my-6">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2">{item.a}</p>
                    <p className="mt-2">{item.b}</p>
                    <p className="mt-2">{item.c}</p>
                  </div>
                )
              )}
            </div>
            <p
              data-aos="fade-up"
              className="text-[20px] xl:text-[24px] 2xl:text-[24px] font-bold text-primary-blue mb-1"
            >
              {content?.projects[language]?.[project]?.section5.title}
            </p>
            <p
              data-aos="fade-up"
              className="text-[16px] mb-6 flex-row flex flex-wrap sm:justify-center"
            >
              {content?.projects[language]?.[project]?.section5.videos &&
              frame === false
                ? content?.projects[language]?.[project]?.section5.videos.map(
                    (item: ProjectVideos) => (
                      <video
                        height="360"
                        className="mx-auto p-3 w-6/12 sm:w-full md:w-full"
                        controls
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    )
                  )
                : ''}
              {content?.projects[language]?.[project]?.section5.videos &&
              frame === true
                ? content?.projects[language]?.[project]?.section5.videos.map(
                    (item: ProjectVideos) => (
                      <iframe
                        height="315"
                        className="w-6/12 p-3 mx-auto"
                        src={item.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    )
                  )
                : ''}
              {content?.projects[language]?.[project]?.section5.images
                ? content?.projects[language]?.[project]?.section5.images.map(
                    (item: ProjectImgs) => (
                      <div className="sm:w-full w-6/12">
                        <img
                          src={item.img}
                          className="w-full object-cover p-3 h-[350px]"
                        />
                      </div>
                    )
                  )
                : ''}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
