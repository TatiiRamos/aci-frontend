import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StationInterface } from '../../types/interfaceStation'
import axios from 'axios'
import { LanguageType } from '../../types/interfaceContext'
import { BASE_URL } from '../../api'

interface StationState {
  station: StationInterface | null
  stations: StationInterface[]
  languageStations: LanguageType
  error: string | null
  loading: boolean
}

const initialState: StationState = {
  station: null,
  stations: [],
  languageStations: 'es',
  error: null,
  loading: false
}

export const getStations = createAsyncThunk(
  'stations/getStations',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/stations`)
      return data
    } catch (error: any) {
      console.error('Error fetching stations:', error)
      return rejectWithValue(`Error fetching stations: ${error.message}`)
    }
  }
)
export const getStationById = createAsyncThunk(
  'stations/getStationById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/stations/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching stations:', error)
      return rejectWithValue(`Error fetching station: ${error.message}`)
    }
  }
)

export const createStation = createAsyncThunk(
  'station/createStation',
  async (newStation: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/stations`, newStation)
      return data.station as StationInterface
    } catch (error: any) {
      console.error('Error creating station:', error)
      return rejectWithValue(`Error creating station: ${error.message}`)
    }
  }
)

export const deleteStation = createAsyncThunk(
  'station/deleteStation',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/stations/${id}`)
      return id
    } catch (error: any) {
      console.error('Error deleting station:', error)
      return rejectWithValue(`Error deleting station: ${error.message}`)
    }
  }
)

export const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    setLanguageStations: (state, action: PayloadAction<LanguageType>) => {
      state.languageStations = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStations.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        getStations.fulfilled,
        (state, action: PayloadAction<StationInterface[]>) => {
          state.loading = false
          state.stations = action.payload
          state.error = null
        }
      )
      .addCase(getStations.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(getStationById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        getStationById.fulfilled,
        (state, action: PayloadAction<StationInterface>) => {
          state.loading = false
          state.station = action.payload
          state.error = null
        }
      )
      .addCase(getStationById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(
        createStation.fulfilled,
        (state, action: PayloadAction<StationInterface>) => {
          state.stations.push(action.payload)
          state.error = null
        }
      )
      .addCase(createStation.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        deleteStation.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.stations = state.stations.filter(
            (station) => station.id !== action.payload
          )
          state.error = null
        }
      )
      .addCase(deleteStation.rejected, (state, action) => {
        state.error = action.payload as string
      })
  }
})

export const { setLanguageStations } = stationSlice.actions
export default stationSlice.reducer
