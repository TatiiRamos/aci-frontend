import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { InterfacePrice } from '../../types/interfacePrice'
import { BASE_URL } from '../../api'

interface PricesState {
  prices: InterfacePrice[]
  error: string | null
  loading: boolean
}

const initialState: PricesState = {
  prices: [],
  error: null,
  loading: false
}

export const getPrices = createAsyncThunk('prices/getPrices', async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/prices`)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const createPrice = createAsyncThunk(
  'prices/createPrice',
  async (newPrice: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/prices`, newPrice)
      return data.price
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

export const deletePrice = createAsyncThunk(
  'prices/deletePrice',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/prices/${id}`)
      return id
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

const PricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrices.fulfilled, (state, action) => {
        state.prices = action.payload
      })
      .addCase(createPrice.fulfilled, (state, action) => {
        state.prices.push(action.payload)
      })
      .addCase(deletePrice.fulfilled, (state, action) => {
        state.prices = state.prices.filter(
          (price) => price.id !== action.payload
        )
      })
  }
})

export default PricesSlice.reducer
