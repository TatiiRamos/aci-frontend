import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../api'
import { InterfaceLocation } from '../../types/interfaceLocation'
import { LocationData } from '../../types/super-admin/forms'

interface LocationState {
  locations: InterfaceLocation[] // lista
  location: InterfaceLocation | null // uno solo
  error: string | null
  loading: boolean
}

const initialState: LocationState = {
  locations: [],
  location: null,
  error: null,
  loading: false
}
export const getLocations = createAsyncThunk(
  'directors/getLocations',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/locations`)
      console.log('axios locaciones')
      console.log(data)
      return data
    } catch (error: any) {
      console.error('Error fetching countries:', error)
      return rejectWithValue(`Error fetching countries: ${error.message}`)
    }
  }
)

export const createLocation = createAsyncThunk(
  'location/createLocation',
  async (newLocation: LocationData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/locations`, newLocation)
      return data.location as InterfaceLocation
    } catch (error: any) {
      console.error('Error creating country:', error)
      return rejectWithValue(`Error creating country: ${error.message}`)
    }
  }
)
const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getLocations
      .addCase(getLocations.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.loading = false
        state.locations = action.payload
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // createLocation
      .addCase(createLocation.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.loading = false
        state.location = action.payload
        state.locations.push(action.payload) // 👈 opcional: agregamos a la lista
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export default locationSlice.reducer
