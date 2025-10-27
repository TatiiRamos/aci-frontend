import { useEffect } from 'react'
import { InternshipsInterface } from '../types/interfaceInternship'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store/store'
import { getStationById } from '../redux/Slices/stationSlice'

interface Props {
  internship: InternshipsInterface
}

export const useStation = ({ internship }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const station = useSelector((state: RootState) => state.stations.station!)

  useEffect(() => {
    if (!internship) return
    dispatch(getStationById(internship?.station_id))
  }, [internship?.id])

  return {
    station
  }
}
