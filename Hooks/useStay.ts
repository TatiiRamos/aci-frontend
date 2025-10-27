import { useEffect } from 'react'
import { InterfaceBooking } from '../types/interfaceBooking'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/Store/store'
import { useDispatch } from 'react-redux'
import { getStayById } from '../redux/Slices/staySlice'

interface Props {
  booking?: InterfaceBooking
}

export const useStay = ({ booking }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const stay = useSelector((state: RootState) => state.stays.stay!)

  useEffect(() => {
    if (!booking) return
    dispatch(getStayById(booking!.stay_id))
  }, [booking])

  return {
    stay
  }
}
