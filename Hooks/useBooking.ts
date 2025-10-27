import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUser } from './useGetUsers'
import { getBookingByUserId } from '../redux/Slices/bookingSlice'
import { AppDispatch, RootState } from '../redux/Store/store'

export const useBooking = () => {
  const { data: user, get: getUser } = useUser()
  const dispatch = useDispatch<AppDispatch>()
  const booking = useSelector((state: RootState) => state.bookings.booking!)

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (!user) return
    dispatch(getBookingByUserId(user.id))
  }, [user])

  return {
    booking
  }
}
