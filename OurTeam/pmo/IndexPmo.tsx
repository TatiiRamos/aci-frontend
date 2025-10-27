import { PmoPrograms } from './PmoPrograms'
import { PmoInfo } from './PmoInfo'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { TranslationContext } from '../../../Context/TranslationContext'
import { useContext } from 'react'

export const Pmo = () => {
  const { language } = useContext(TranslationContext)

  return (
    <div className="mx-auto mt-10 mb-20 flex flex-col sm:flex-col gap-[3rem] xl:gap-0 2xl:gap-0">
      <PmoInfo />
      <PmoPrograms />
      <div
        className={`flex justify-center items-center sm:items-start gap-1 text-[#24310D] 
          mt-[-2rem] mb-[3rem] xl:mb-[5rem] 2xl:mb-[6rem]`}
      >
        <FaRegCircleQuestion className="sm:mt-1" />
        <p className="font-Montserrat">
          {language === 'es'
            ? 'Haz click en nuestros programas para más información.'
            : 'Click on our programs for more information.'}
        </p>
      </div>
    </div>
  )
}
