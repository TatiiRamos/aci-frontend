import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { InstructorInterface } from '../../types/interfaceInstructor'
import axios from 'axios'
import { BASE_URL } from '../../api'

export const getInstructors = createAsyncThunk(
  'station/getInstructors',
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/instructors`)

      return data
    } catch (error: any) {
      console.error('Error fetching instructors:', error)
      throw new Error(`Error fetching instructors: ${error.message}`)
    }
  }
)

export const createInstructors = createAsyncThunk(
  'station/createInstructors',
  async (newInstructor: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/instructors`,
        newInstructor
      )

      return data.instructor as InstructorInterface
    } catch (error: any) {
      console.error('Error creating country:', error)
      return rejectWithValue(`Error creating country: ${error.message}`)
    }
  }
)

interface InstructorState {
  data: InstructorInterface[]
  loading: boolean
  error: string | null
}

const initialState: InstructorState = {
  data: [],
  loading: false,
  error: null
}

export const instructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInstructors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getInstructors.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(getInstructors.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Error fetching instructors'
      })
  }
})

export default instructorsSlice.reducer
