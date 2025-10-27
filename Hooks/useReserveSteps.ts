import { useContext, useEffect, useState } from 'react'
import { TranslationContext } from '../Context/TranslationContext'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store/store'

type Step = 'internship' | 'destiny' | 'station' | 'date' | 'hotel'
interface BaseOption {
  id: string
}
export interface HotelOption extends BaseOption {
  name_en?: string
  name_es?: string
  price?: string
  stay_id?: number | null
}
export interface InternshipOption extends BaseOption {
  name_en?: string
  name_es?: string
}
export interface DefaultOption {
  name: string
}

type OptionByStep =
  | { step: 'hotel'; option: HotelOption | null }
  | { step: 'internship'; option: InternshipOption | null }
  | {
      step: Exclude<Step, 'hotel' | 'internship'>
      option: DefaultOption | null
    }

export const useReserveSteps = () => {
  const { language } = useContext(TranslationContext)

  const stations = useSelector(({ stations }: RootState) => stations.stations)
  const countries = useSelector(
    ({ countries }: RootState) => countries.countries
  )

  const [steps, setSteps] = useState({
    internship: true,
    date: false,
    hotel: false
  })

  const [dataSteps, setDataSteps] = useState({
    internship: { id: '', name: '' },
    destiny: '',
    station: '',
    date: '',
    hotel: {
      id: '',
      name: '',
      price: '',
      stay_id: null as number | null // ✅ lo declaramos number | null
    }
  })

  const updateCompletedSteps = () => {
    const newCompletedSteps = { ...steps }
    newCompletedSteps.date = dataSteps.internship.name !== ''
    newCompletedSteps.hotel = dataSteps.date !== ''
    setSteps(newCompletedSteps)
  }

  useEffect(updateCompletedSteps, [dataSteps.internship.name, dataSteps.date])

  const handleSaveHotel = (props: {
    id: string
    name: string
    price: string
    stay_id?: number
  }) => {
    const hotel = {
      id: props.id,
      name: props.name,
      price: props.price,
      stay_id: props.stay_id ?? 0
    }
    setDataSteps((prevDataSteps) => ({ ...prevDataSteps, hotel }))
  }

  const handleSaveInternship = (props: {
    id: string
    name: string
    option?: any
  }) => {
    const { id, name, option } = props

    let countryName = ''
    let stationName = ''

    if (option?.country) {
      countryName =
        language === 'en'
          ? option.country.name_en || ''
          : option.country.name_es || ''
    } else {
      const foundCountry = countries.find(
        (country) => country.id === option?.country_id || country.id === id
      )
      countryName = foundCountry
        ? language === 'en'
          ? foundCountry.name_en
          : foundCountry.name_es
        : ''
    }

    if (option?.station) {
      stationName =
        language === 'en'
          ? option.station.name_en || ''
          : option.station.name_es || ''
    } else {
      const foundStation = stations.find(
        (station) => station.id === option?.station_id || station.id === id
      )
      stationName = foundStation
        ? language === 'en'
          ? foundStation.name_en
          : foundStation.name_es
        : ''
    }

    setDataSteps((prevDataSteps) => ({
      ...prevDataSteps,
      internship: { id, name },
      destiny: countryName,
      station: stationName
    }))
  }

  const handleSaveDefaultOption = (name: string, step: Step) => {
    setDataSteps((prevDataSteps) => ({
      ...prevDataSteps,
      [step]: name
    }))
  }

  const handleSaveOption = ({ option, step }: OptionByStep) => {
    if (!option) {
      if (step === 'internship') {
        setDataSteps((prevDataSteps) => ({
          ...prevDataSteps,
          internship: { id: '', name: '' },
          destiny: '',
          station: ''
        }))
      } else if (step === 'hotel') {
        setDataSteps((prevDataSteps) => ({
          ...prevDataSteps,
          hotel: { id: '', name: '', price: '', stay_id: 0 }
        }))
      } else if (step === 'date') {
        setDataSteps((prevDataSteps) => ({
          ...prevDataSteps,
          date: ''
        }))
      }
    } else {
      if (step === 'hotel') {
        const hotelOption = option as HotelOption

        const id = hotelOption.id || ''
        const name_es = hotelOption.name_es || ''
        const name_en = hotelOption.name_en || ''
        const price = hotelOption.price || ''
        const hotelName = language === 'en' ? name_en : name_es
        const stay_id = hotelOption.stay_id ?? 0
        handleSaveHotel({ id, price, name: hotelName, stay_id })
      } else if (step === 'internship') {
        const internshipOption = option as InternshipOption
        const id = internshipOption.id || ''
        const name_en = internshipOption.name_en || (option as any).name || ''
        const name_es = internshipOption.name_es || (option as any).name || ''
        const internshipName = language === 'en' ? name_en : name_es

        handleSaveInternship({ id, name: internshipName, option })
      } else if (step === 'date') {
        const dateOption = option as any
        const name = dateOption.name || ''
        handleSaveDefaultOption(name, step)
      } else {
        const defaultOption = option as DefaultOption
        const name = defaultOption.name || ''
        handleSaveDefaultOption(name, step)
      }
    }

    setSteps((prevCompletedSteps) => {
      const newCompletedSteps = { ...prevCompletedSteps }

      if (!option && step === 'internship') {
        newCompletedSteps.date = false
        newCompletedSteps.hotel = false
      } else if (!option && step === 'date') {
        newCompletedSteps.hotel = false
      }

      return newCompletedSteps
    })
  }

  return { steps, setSteps, dataSteps, handleSaveOption }
}
