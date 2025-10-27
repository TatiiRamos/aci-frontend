import AboutBio from './AboutBio'
import InternshipBio from './IntershipBio'
import InfoInternships from '../../components/InternshipACI/InfoInternships'
import { Hero } from '../../components/Heros/BiomonitorizacionHero/Hero'
import PageSkeleton from '@/components/ui/PageSkeleton'
import { RootState, AppDispatch } from '../../redux/Store/store'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
//import FormSearch from "../../components/Form/Form";

import { CallToAction } from '../../components/CallToAction/CallToAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { getInternship } from '../../redux/Slices/IntershipSlice'
import NotFoundView from '../../components/NotFoundView/NotFoundView'

interface BiomonitorizacionProps {}

const Biomonitorizacion: React.FC<BiomonitorizacionProps> = () => {
  const { language } = useContext(TranslationContext)
  const { name } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const allInternships = useSelector(
    (state: RootState) => state.internships.internships
  )
  const loading = useSelector((state: RootState) => state.internships.loading)

  const internship = allInternships.find(
    (internship: any) =>
      internship.name_es === name || internship.name_en === name
  )

  useEffect(() => {
    dispatch(getInternship())
  }, [dispatch])

  if (loading) {
    return <PageSkeleton showHero={true} sectionsCount={3} />
  }

  if (!internship) {
    return (
      <main className="flex flex-col justify-center items-center">
        <NotFoundView />
      </main>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <Hero
        name={language === 'es' ? internship?.name_es : internship?.name_en}
        subtittle={
          language === 'es' ? internship?.subtitle_es : internship?.subtitle_en
        }
      />
      {/* <FormSearch /> */}
      <AboutBio
        name={language === 'es' ? internship?.name_es : internship?.name_en}
        description={
          language === 'es'
            ? internship?.description_es
            : internship?.description_en
        }
        image={internship?.image_url}
      />
      <InternshipBio
        name={language === 'es' ? internship?.name_es : internship?.name_en}
        description={
          language === 'es'
            ? internship?.description_es
            : internship?.description_en
        }
        image={internship?.image_url}
      />
      <InfoInternships />
      <CallToAction />
    </main>
  )
}

export default Biomonitorizacion
