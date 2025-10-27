import About from './About'
import Internships from '../Stations/OurInternships/OurInternships'
import Hero from '../../components/Heros/HeroDestiny/Hero'
import {
  TranslationContext,
  useTranslation
} from '../../Context/TranslationContext'
import { CallToAction } from '../../components/CallToAction/CallToAction'
import { useDispatch, useSelector } from 'react-redux'
import PageSkeleton from '@/components/ui/PageSkeleton'
import { RootState, AppDispatch } from '../../redux/Store/store'
import { getCountries } from '../../redux/Slices/countrySlice'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import HeroAboutCountry from '../../components/AboutCountry/HeroAboutCountry'
import OtherStations from '../Stations/OtherStations/OtherStations'
//import FormSearch from "../../components/Form/Form";
import NotFoundView from '../../components/NotFoundView/NotFoundView'
interface CountryProps {}

const Country: React.FC<CountryProps> = ({}) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const { name } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const allCountries = useSelector(
    (state: RootState) => state.countries.countries
  )
  const isLoading = useSelector((state: RootState) => state.countries.loading)

  const country = allCountries.find(
    (country: any) => country.name_es === name || country.name_en === name
  )

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  if (isLoading) {
    return <PageSkeleton showHero={true} sectionsCount={3} />
  }

  if (!country) {
    return (
      <main className="flex flex-col justify-center items-center">
        <NotFoundView />
      </main>
    )
  }
  return (
    <section className="font-Montserrat text-primary-blue">
      {/* <Hero name={country?.name} /> */}
      <Hero name={name} />
      {/* <FormSearch/> */}
      <About
        title={content?.colombia[language].aboutTitle}
        name={language === 'es' ? country?.name_es : country?.name_en}
        subtitle={
          language === 'es' ? country?.subtitle_es : country?.subtitle_en
        }
        description={
          language === 'es' ? country?.description_es : country?.description_en
        }
      />
      <OtherStations
        country={country?.id}
        title={
          language === 'es'
            ? `Estaciones Biológicas de ACI en ${country?.name_es}`
            : `ACI Biological Stations in ${country?.name_en}`
        }
        background="https://r2.awaqinternship.org/Internships/Illustration-white.png"
      />
      <Internships
        title={
          content?.colombia[language].outInternshipsTitle +
          (language === 'es' ? country?.name_es : country?.name_en)
        }
        subtitle={content?.colombia[language].outInternshipsSubtitle}
      />
      <HeroAboutCountry />
      <CallToAction />
    </section>
  )
}

export default Country
