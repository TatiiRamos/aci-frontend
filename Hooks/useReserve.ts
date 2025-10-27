import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useUser } from './useGetUsers'
import { AppDispatch, RootState } from '../redux/Store/store'
import { getCountries } from '../redux/Slices/countrySlice'
import { getInternship } from '../redux/Slices/IntershipSlice'
import { getStations } from '../redux/Slices/stationSlice'
import { getStays } from '../redux/Slices/staySlice'
import { getRooms } from '../redux/Slices/roomsSlice'
import { getPrices } from '../redux/Slices/pricesSlice'
import { createBooking } from '../redux/Slices/bookingSlice'
import { mapRooms } from '../utils/mapRooms'
import { TranslationContext } from '../Context/TranslationContext'

interface Props {
  dataSteps: {
    internship: { id: string; name: string }
    destiny: string
    station: string
    date: string
    hotel: {
      id: string
      name: string
      price: string
      stay_id: number | null
    }
  }
}
export const useReserve = (props: Props) => {
  const { dataSteps } = props
  const dispatch = useDispatch<AppDispatch>()
  const { language } = useContext(TranslationContext)
  const { data: user, get: getUser } = useUser()

  const reservedBooking = useSelector(({ bookings }) => bookings.newBooking)
  const internships = useSelector(
    (state: RootState) => state.internships.internships
  )
  const internshipsLoading = useSelector(
    (state: RootState) => state.internships.loading
  )
  const internshipsError = useSelector(
    (state: RootState) => state.internships.error
  )
  const prices = useSelector((state: RootState) => state.prices.prices)
  const stays = useSelector((state: RootState) => state.stays.stays)
  const rooms = useSelector((state: RootState) => state.rooms.rooms)
  console.log('sssssssaa', rooms)
  const mappedRooms = mapRooms({ prices, rooms })

  // ...existing code...

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getInternship())
    dispatch(getStations())
    dispatch(getStays())
    dispatch(getRooms())
    dispatch(getPrices())
    getUser()
  }, [dispatch])

  const findStay = (stayId: number) => {
    console.log('desde hook', stayId)
    console.log('stays', stays)
    return stays.find((stay) => Number(stay.id) === stayId)
    //return stays.find((stay) => stay.id === StayId)
  }
  const handleBooking = () => {
    const [startDate, endDate] = dataSteps.date.split('-')
    const { name: hotelName, id: hotelId } = { ...dataSteps.hotel }
    const internshipId = +dataSteps.internship.id
    const price = dataSteps.hotel.price

    const { id: stayId } = stays.find((stay) => {
      const foundStay =
        language === 'en'
          ? stay.name_en === hotelName
          : stay.name_es === hotelName
      return foundStay
    })!

    const actionBody = {
      startDate: new Date(startDate.trim()).toISOString(),
      endDate: new Date(endDate.trim()).toISOString(),
      hotelRoomId: +hotelId,
      internshipId,
      price,
      stayId: +stayId,
      userId: user.id
    }

    dispatch(createBooking(actionBody))
  }

  return {
    booking: reservedBooking,
    internships,
    internshipsLoading,
    internshipsError,
    rooms: mappedRooms,
    findStay,
    user,
    handleBooking
  }
}
