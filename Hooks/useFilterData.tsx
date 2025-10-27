import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store/store'
import { getInternship } from '../redux/Slices/IntershipSlice'
import { getStations } from '../redux/Slices/stationSlice'
import { getCountries } from '../redux/Slices/countrySlice'

export interface InterfaceCountry {
  id: string
  name: string
  language: string
}

export interface InterfaceStation {
  id: string
  name: string
  language: string
}

export interface InterfaceInternship {
  id: string
  name: string
  language: string
}

const useFilteredData = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getInternship())
    dispatch(getStations())
    dispatch(getCountries())
  }, [dispatch])

  // COUNTRIES
  const allCountries = useSelector(
    (state: RootState) => state.countries.countries
  )

  // STATIONS
  const allStations = useSelector((state: RootState) => state.stations.stations)

  // INTERNSHIPS
  const allInternships = useSelector(
    (state: RootState) => state.internships.internships
  )

  return { allCountries, allStations, allInternships }
}

export default useFilteredData
