import { Link } from 'react-router-dom'
import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import Button from '../../../components/Buttons/Button'
import { FaArrowLeft } from 'react-icons/fa6'

export const BtnGoBackPrograms = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="sm:mx-auto md:mx-auto lg:mx-auto mt-8">
      <Link
        to={language === 'es' ? '/team#pmo-section' : '/team#pmo-section'}
        className="uppercase font-bold flex flex-row flex-nowrap"
      >
        <Button
          title={content?.team[language].buttonBackToPrograms}
          fontSize="text-[22px] font-[800]"
        >
          <FaArrowLeft className="me-2" />
        </Button>
      </Link>
    </div>
  )
}
