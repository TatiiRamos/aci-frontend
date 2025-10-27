import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { InterfaceStay } from '../../types/interfaceStay'
import { BASE_URL } from '../../api'

interface StayState {
  stay: InterfaceStay | null
  stays: InterfaceStay[]
  error: string | null
  loading: boolean
}

const initialState: StayState = {
  stay: null,
  stays: [],
  error: null,
  loading: false
}

export const getStays = createAsyncThunk('stays/getStays', async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/stays`)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const getStayById = createAsyncThunk(
  'stays/getStayById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/stays/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching stay:', error)
      return rejectWithValue(`Error fetching stay: ${error.message}`)
    }
  }
)

export const createStay = createAsyncThunk(
  'stays/createStay',
  async (newStay: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/stays`, newStay)
      return data.stay
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

export const deleteStay = createAsyncThunk(
  'stays/deleteStay',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/stays/${id}`)
      return id
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

const StaySlice = createSlice({
  name: 'stays',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStays.fulfilled, (state, action) => {
        state.stays = action.payload
      })
      .addCase(getStayById.fulfilled, (state, action) => {
        state.stay = action.payload
        state.error = null
      })
      .addCase(getStayById.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(createStay.fulfilled, (state, action) => {
        state.stays.push(action.payload)
      })
      .addCase(deleteStay.fulfilled, (state, action) => {
        state.stays = state.stays.filter((stay) => stay.id !== action.payload)
      })
  }
})

export default StaySlice.reducer
