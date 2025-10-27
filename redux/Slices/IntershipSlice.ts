import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { InternshipsInterface } from '../../types/interfaceInternship'
import axios from 'axios'
import { LanguageType } from '../../types/interfaceContext'
import { BASE_URL } from '../../api'

interface InternshipState {
  // internship: InternshipsInterface | null

  internships: InternshipsInterface[]
  internship: InternshipsInterface | null
  languageInternships: LanguageType
  error: string | null
  loading: boolean
}

const initialState: InternshipState = {
  internship: null,
  internships: [],
  languageInternships: 'es',
  error: null,
  loading: false
}

export const getInternship = createAsyncThunk(
  'internships/getInternship',
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/internships`)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

export const getInternshipById = createAsyncThunk(
  'internships/getInternshipById',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/internships/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching bookings:', error)
      return rejectWithValue(`Error fetching bookings: ${error.message}`)
    }
  }
)

export const createInternship = createAsyncThunk(
  'internship/createInternship',
  async (newInternship: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/internships`,
        newInternship
      )
      return data.internship
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

export const deleteInternship = createAsyncThunk(
  'internship/deleteInternship',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/internships/${id}`)
      return id
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

const InternshipSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {
    setLanguageInternships: (state, action) => {
      state.languageInternships = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      //  .addCase(getInternshipById.fulfilled, (state, action) => {
      //   state.internship = action.payload
      //  })
      .addCase(getInternshipById.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(getInternship.pending, (state) => {
        state.loading = true
      })
      .addCase(getInternship.fulfilled, (state, action) => {
        state.loading = false
        state.internships = action.payload
      })
      .addCase(getInternship.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch internships'
      })
      .addCase(deleteInternship.fulfilled, (state, action) => {
        state.internships = state.internships.filter(
          (internship) => internship.id !== action.payload
        )
      })
      .addCase(createInternship.fulfilled, (state, action) => {
        state.internships.push(action.payload)
      })
  }
})

export const { setLanguageInternships } = InternshipSlice.actions
export default InternshipSlice.reducer
