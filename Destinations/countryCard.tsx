import React from 'react'
import { InterfaceCountry } from '../../types/interfaceCountry'
import Button from '../../components/Buttons/Button'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from '../../Context/TranslationContext'

export type countryCardProp = {
  country: InterfaceCountry
}

const CountryCard: React.FC<countryCardProp> = ({ country }) => {
  const { content, language } = useTranslation()
  const { name } = useParams()
  const hiddenCountry =
    name === (country.name_es || country.name_en) ? 'hidden' : ''

  return (
    <div
      className={`flex sm:flex-col-reverse md:mt-6 lg:mt-6 ${hiddenCountry}`}
    >
      <div className="w-7/12 sm:w-full sm:text-center m-auto">
        <h2 className="font-bold text-primary-blue sm:text-3xl text-[38px]">
          {language === 'es' ? country.name_es : country.name_en}
        </h2>
        <p className="text-3xl sm:text-2xl text-primary-blue">
          {language === 'es' ? country.subtitle_es : country.subtitle_en}
        </p>
        <p className="text-base mb-6 mt-3">
          {language === 'es' ? country.description_es : country.description_en}
        </p>
        <Link to={`/destinations/${country.name_es || country.name_en}`}>
          <Button
            title="Explorar"
            textColor="mx-0 sm:mx-auto sm:text-lg md:text-base lg:text-base"
          />
        </Link>
      </div>
      <div className="w-5/12 sm:w-full">
        <img src={country.image_url} alt={country.name_es} />
      </div>
    </div>
  )
}

export default CountryCard
