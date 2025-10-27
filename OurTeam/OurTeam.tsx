import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { useContext } from 'react'
import { Directors } from './groupTeam/Directors'
import { Management } from './groupTeam/Management'

export const OurTeam = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <>
      <div className="w-12/102 m-auto flex flex-col gap-[2rem] font-Montserrat text-primary-blue">
        <Directors
          boardOfDirectors={content?.team[language].boardOfDirectors}
        />
        <Management management={content?.team[language].management} />
      </div>
    </>
  )
}
