import { useTranslation } from '../../../Context/TranslationContext'

export const InfoProjects4 = () => {
  const { language, content } = useTranslation()

  const partners = [
    'https://r2.awaqinternship.org/projects/project5/escotilla.jpg',
    'https://r2.awaqinternship.org/projects/project5/aguadas.png'
  ]

  return (
    <div className=" sm:mx-4 mx-20 my-20">
      <h3
        data-aos="zoom-in"
        className="sm:text-xl text-5xl font-extrabold underline underline-offset-8 
          decoration-4 decoration-[#6A961F] mb-8"
      >
        {content?.projects[language].project1.section4.titlesection2}
      </h3>
      <div className=" sm:flex-col flex justify-center  items-center">
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[0]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {content?.projects[language].project6.section4.alliance1}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {content?.projects[language].project6.section4.alliance1description}
          </p>
        </div>
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[1]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {content?.projects[language].project6.section4.alliance2}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {content?.projects[language].project6.section4.alliance2description}
          </p>
        </div>
      </div>
    </div>
  )
}
