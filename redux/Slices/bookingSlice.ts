import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../api'
import { LanguageType } from '../../types/interfaceContext'
import {
  InterfaceBooking,
  InterfaceCreateBookingAction,
  InterfaceCreateBookingBody
} from '../../types/interfaceBooking'

interface BookingState {
  booking: InterfaceBooking | null
  newBooking: InterfaceBooking | null
  bookings: InterfaceBooking[]
  languageBookings: LanguageType
  error: string | null
  loading: boolean
}

const initialState: BookingState = {
  booking: null,
  newBooking: null,
  bookings: [],
  languageBookings: 'es',
  error: null,
  loading: false
}

export const getBookingByUserId = createAsyncThunk(
  'bookings/getBookingByUserId',
  async (userId: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/bookings/user/${userId}`)
      return data
    } catch (error: any) {
      console.error('Error fetching bookings:', error)
      return rejectWithValue(`Error fetching bookings: ${error.message}`)
    }
  }
)

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/bookings`)
      return data
    } catch (error: any) {
      console.error('Error fetching bookings:', error)
      return rejectWithValue(`Error fetching bookings: ${error.message}`)
    }
  }
)

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (props: InterfaceCreateBookingAction, { rejectWithValue }) => {
    const {
      stayId,
      userId,
      internshipId,
      hotelRoomId,
      price,
      startDate,
      endDate
    } = props

    const requestBody: InterfaceCreateBookingBody = {
      bookingData: {
        start_date: new Date(startDate.trim()).toISOString(),
        end_date: new Date(endDate.trim()).toISOString(),
        rooms_reserved: 1,
        status: true,
        duration: 2,
        total_price: price,
        payment_status: 'pending',
        payment_reference: 'payment_reference',
        pdf_itinerary: 'https://example.com/files/itinerary.pdf',
        stay_id: Number(stayId),
        user_id: userId,
        internship_id: internshipId!
      },
      roomsData: [{ room_id: hotelRoomId!, quantity: 1 }]
    }

    try {
      const { data } = await axios.post(`${BASE_URL}/bookings`, requestBody)
      return data.booking as InterfaceBooking
    } catch (error: any) {
      console.error('Error creating booking:', error)
      return rejectWithValue(`Error creating booking: ${error.message}`)
    }
  }
)

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setLanguageBookings: (state, action: PayloadAction<LanguageType>) => {
      state.languageBookings = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getBookingByUserId.fulfilled,
        (state, action: PayloadAction<InterfaceBooking>) => {
          state.booking = action.payload
        }
      )
      .addCase(getBookingByUserId.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        getBookings.fulfilled,
        (state, action: PayloadAction<InterfaceBooking[]>) => {
          state.bookings = action.payload
          state.error = null
        }
      )
      .addCase(getBookings.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        createBooking.fulfilled,
        (state, action: PayloadAction<InterfaceBooking>) => {
          state.newBooking = action.payload
          state.error = null
        }
      )
      .addCase(createBooking.rejected, (state, action) => {
        state.error = action.payload as string
      })
  }
})

export const { setLanguageBookings } = bookingSlice.actions
export default bookingSlice.reducer
