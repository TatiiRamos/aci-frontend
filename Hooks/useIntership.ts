import { useEffect } from 'react'
import { InterfaceBooking } from '../types/interfaceBooking'
import { AppDispatch, RootState } from '../redux/Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { getInternshipById } from '../redux/Slices/IntershipSlice'

interface Props {
  booking?: InterfaceBooking
}

export const useIntership = ({ booking }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const internship = useSelector(
    ({ internships }: RootState) => internships.internship!
  )

  useEffect(() => {
    if (!booking) return
    dispatch(getInternshipById(booking.internship_id))
  }, [booking])

  return {
    internship
  }
}
