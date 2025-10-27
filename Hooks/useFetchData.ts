import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getInternship } from '../redux/Slices/IntershipSlice'
import { AppDispatch } from '../redux/Store/store'
import { getCountries } from '../redux/Slices/countrySlice'
import { getStations } from '../redux/Slices/stationSlice'
import { getStays } from '../redux/Slices/staySlice'

export const useFetchData = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getInternship())
    dispatch(getCountries())
    dispatch(getStations())
    dispatch(getStays())
  }, [dispatch])
}
