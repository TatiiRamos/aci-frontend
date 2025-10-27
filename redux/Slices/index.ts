import { combineReducers } from '@reduxjs/toolkit'
import InternshipSlice from './IntershipSlice'
import StaySlice from './staySlice'
import roomsSlice from './roomsSlice'
import countrySlice from './countrySlice'
import stationSlice from './stationSlice'
import instructorsSlice from './instructorsSlice'
import languagesSlice from './languagesSlice'
import pricesSlice from './pricesSlice'
import bookingSlice from './bookingSlice'
import directorsSlice from './directorSlice'
import locationsSlice from './locationsSlice'

// aca inician los Slices que luego son pasados por el store
const rootReducer = combineReducers({
  // Agrega más slices aquí
  bookings: bookingSlice,
  directors: directorsSlice,
  internships: InternshipSlice,
  stays: StaySlice,
  rooms: roomsSlice,
  countries: countrySlice,
  stations: stationSlice,
  instructors: instructorsSlice,
  languages: languagesSlice,
  prices: pricesSlice,
  locations: locationsSlice
})

export default rootReducer
