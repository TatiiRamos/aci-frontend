import { useEffect } from 'react'
import { InternshipsInterface } from '../types/interfaceInternship'
import { AppDispatch, RootState } from '../redux/Store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getCountryById } from '../redux/Slices/countrySlice'

interface Props {
  internship?: InternshipsInterface
}

export const useCountryProfile = ({ internship }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const country = useSelector(({ countries }: RootState) => countries.country!)

  useEffect(() => {
    if (!internship) return
    dispatch(getCountryById(internship!.country_id))
  }, [internship])

  return {
    country
  }
}
