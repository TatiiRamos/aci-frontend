import { useTranslation } from 'react-i18next'

export const InfoProjects4 = () => {
  const { t } = useTranslation('projects')

  const partners = [
    'https://r2.awaqinternship.org/projects/project5/aguadas.png',
    'https://r2.awaqinternship.org/projects/project5/escotilla.jpg',
    'https://r2.awaqinternship.org/projects/project5/cooabejorral.png',
    'https://r2.awaqinternship.org/projects/project5/club.jpg'
  ]

  return (
    <div className=" sm:mx-4 mx-20 my-20">
      <h3
        data-aos="zoom-in"
        className=" sm:text-xl text-5xl font-extrabold underline underline-offset-8 decoration-4 decoration-[#6A961F] mb-8"
      >
        {t('project5.section4.titlesection2')}
      </h3>
      <div className=" sm:flex-col flex justify-center  items-center">
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[0]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {t('project5.section4.alliance1')}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {t('project5.section4.alliance1description')}
          </p>
        </div>
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[1]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {t('project5.section4.alliance2')}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {t('project5.section4.alliance2description')}
          </p>
        </div>
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[2]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {t('project5.section4.alliance3')}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {t('project5.section4.alliance3description')}
          </p>
        </div>
        <div data-aos="zoom-in" className=" w-72 mx-4 my-2">
          <img src={partners[3]} className=" w-[20rem]" />
          <h3 className=" text-center text-2xl font-bold text-[#6A961F] pt-4">
            {' '}
            {t('project5.section4.alliance4')}
          </h3>
          <p className=" text-center text-lg text-zinc-500 pt-4">
            {' '}
            {t('project5.section4.alliance5')}
          </p>
        </div>
      </div>
    </div>
  )
}
