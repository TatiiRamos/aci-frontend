import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StationInterface } from '../types/interfaceStation'
import { AppDispatch, RootState } from '../redux/Store/store'
import { getDirectorById } from '../redux/Slices/directorSlice'

interface Props {
  station?: StationInterface
}

export const useDirector = ({ station }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const director = useSelector(
    ({ directors }: RootState) => directors.director!
  )

  useEffect(() => {
    if (!station) return
    dispatch(getDirectorById(station.director_id!))
  }, [station])

  return {
    director
  }
}
