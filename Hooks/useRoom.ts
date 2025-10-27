import { useEffect } from 'react'
import { InterfaceBooking } from '../types/interfaceBooking'
import { AppDispatch, RootState } from '../redux/Store/store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRoomByStayId } from '../redux/Slices/roomsSlice'

interface Props {
  booking?: InterfaceBooking
}

export const useRoom = ({ booking }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const room = useSelector((state: RootState) => state.rooms.room!)

  useEffect(() => {
    if (!booking) return
    dispatch(getRoomByStayId(booking.stay_id))
  }, [booking])

  return {
    room
  }
}
