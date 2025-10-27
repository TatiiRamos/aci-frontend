import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../api'
import { InterfaceDirector } from '../../types/interfaceDirector'

interface DirectorState {
  directors: InterfaceDirector[] // lista
  director: InterfaceDirector | null // uno solo
  error: string | null
  loading: boolean
}

const initialState: DirectorState = {
  directors: [],
  director: null,
  error: null,
  loading: false
}

export const getDirectors = createAsyncThunk(
  'directors/getDirectors',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/directors`)
      console.log('axios directores')
      console.log(data)
      return data
    } catch (error: any) {
      console.error('Error fetching countries:', error)
      return rejectWithValue(`Error fetching countries: ${error.message}`)
    }
  }
)

export const createDirector = createAsyncThunk(
  'directors/createStation',
  async (newStation: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/directors`, newStation)
      return data.station as InterfaceDirector
    } catch (error: any) {
      console.error('Error creating station:', error)
      return rejectWithValue(`Error creating station: ${error.message}`)
    }
  }
)

export const getDirectorById = createAsyncThunk(
  'rooms/getDirectorById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/directors/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching director:', error)
      return rejectWithValue(`Error fetching director: ${error.message}`)
    }
  }
)

const DirectorsSlice = createSlice({
  name: 'directors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // lista completa
      .addCase(getDirectors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getDirectors.fulfilled, (state, action) => {
        state.loading = false
        state.directors = action.payload
      })
      .addCase(getDirectors.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // uno solo por id
      .addCase(getDirectorById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getDirectorById.fulfilled, (state, action) => {
        state.loading = false
        state.director = action.payload
      })
      .addCase(getDirectorById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export default DirectorsSlice.reducer
