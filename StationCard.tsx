import Button from '../../../components/Buttons/Button'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'

import { StationInterface } from '../../../types/interfaceStation'
import { Link, useParams } from 'react-router-dom'

type StationCardProps = {
  station: StationInterface
}

const StationCard: React.FC<StationCardProps> = ({ station }) => {
  const { t, i18n } = useTranslation('stations')

  const { name } = useParams()
  const hiddenStation = name === station.country ? 'hidden' : ''

  return (
    <article
      className={`max-w-[360px] h-auto shadow-xl rounded-[12px] mx-auto pb-4 bg-white z-20`}
    >
      <img
        src={station.image_url}
        alt={i18n.language === 'es' ? station.name_es : station.name_en}
        className="w-[360px] h-[248px] object-cover rounded-3xl rounded-bl-none"
      />
      <div className="w-11/12 mx-auto mt-2">
        <h2 className="font-extrabold text-[20px] pt-1">
          {i18n.language === 'es' ? station.name_es : station.name_en}
        </h2>
        <h2 className="mb-5 text-[16px]">
          {i18n.language === 'es' ? station.subtitle_es : station.subtitle_en}
        </h2>
        <p className="mb-5 line-clamp-3 text-[16px] sm:text-[14px] text-left">
          {i18n.language === 'es'
            ? station.description_es
            : station.description_en}
        </p>
        <Link to="/stations/Andes">
          <Button
            title={t('stationCard.section11')}
            fontSize="text-[16px] sm:text-[16px]"
          />
        </Link>
      </div>
    </article>
  )
}

export default StationCard
