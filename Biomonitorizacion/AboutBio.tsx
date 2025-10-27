import { useContext } from 'react'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import Button from '../../components/Buttons/Button'

interface AboutBioInterface {
  name: string | undefined
  description: string | undefined
  image: string | undefined
}

const AboutBio: React.FC<AboutBioInterface> = ({
  name,
  description,
  image
}) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <div className="grid m-auto sm:hidden md:hidden">
        <img
          className=" rounded-full rounded-bl-none"
          src={image}
          alt="image-about"
        />
      </div>
      <div className="grid m-auto">
        <h1
          className="m-3
                sm:text-3xl sm:mb-3
                md:text-3xl md:mb-3
                2xl:text-4xl
                font-Montserrat-ExtraBold font-bold"
        >
          {`${content?.bioInternship[language].aboutBioTitle} ${name} ?`}
        </h1>
        <h2
          className=" 
                sm:text-base
                md:text-lg
                lg:text-base
                xl:text-xl
                2xl:text-xl 
                font-Montserrat-Regular flex flex-col items-center m-auto"
        >
          <p className="m-3 text-md">{description}</p>
        </h2>
        <div className="m-autos m-3">
          <Button title={content?.colombia[language].butonView} />
        </div>
      </div>
      <div className="hidden m-auto sm:grid md:grid">
        <img
          src="https://r2.awaqinternship.org/Biomonitorizacion%2FImage.png"
          alt="image-about"
        />
      </div>
    </div>
  )
}

export default AboutBio
