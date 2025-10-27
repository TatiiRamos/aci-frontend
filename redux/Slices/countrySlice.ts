import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InterfaceCountry } from '../../types/interfaceCountry'
import axios from 'axios'
import { BASE_URL } from '../../api'
import { LanguageType } from '../../types/interfaceContext'

interface CountryState {
  country: InterfaceCountry | null
  countries: InterfaceCountry[]
  languageCountries: LanguageType
  error: string | null
  loading: boolean
}

const initialState: CountryState = {
  country: null,
  countries: [],
  languageCountries: 'es',
  error: null,
  loading: false
}

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/countries`)
      return data
    } catch (error: any) {
      console.error('Error fetching countries:', error)
      return rejectWithValue(`Error fetching countries: ${error.message}`)
    }
  }
)

export const getCountryById = createAsyncThunk(
  'countries/getCountryById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/countries/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching country:', error)
      return rejectWithValue(`Error fetching country: ${error.message}`)
    }
  }
)

export const createCountry = createAsyncThunk(
  'country/createCountry',
  async (newCountry: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/countries`, newCountry)
      return data.country as InterfaceCountry
    } catch (error: any) {
      console.error('Error creating country:', error)
      return rejectWithValue(`Error creating country: ${error.message}`)
    }
  }
)

export const deleteCountry = createAsyncThunk(
  'country/deleteCountry',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/countries/${id}`)
      return id
    } catch (error: any) {
      console.error('Error deleting country:', error)
      return rejectWithValue(`Error deleting country: ${error.message}`)
    }
  }
)

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setLanguageCountries: (state, action: PayloadAction<LanguageType>) => {
      state.languageCountries = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getCountries.fulfilled,
        (state, action: PayloadAction<InterfaceCountry[]>) => {
          state.countries = action.payload
          state.error = null
        }
      )
      .addCase(getCountries.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        getCountryById.fulfilled,
        (state, action: PayloadAction<InterfaceCountry>) => {
          state.country = action.payload
          state.error = null
        }
      )
      .addCase(getCountryById.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        createCountry.fulfilled,
        (state, action: PayloadAction<InterfaceCountry>) => {
          state.countries.push(action.payload)
          state.error = null
        }
      )
      .addCase(createCountry.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(
        deleteCountry.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.countries = state.countries.filter(
            (country) => country.id !== action.payload
          )
          state.error = null
        }
      )
      .addCase(deleteCountry.rejected, (state, action) => {
        state.error = action.payload as string
      })
  }
})

export const { setLanguageCountries } = countrySlice.actions
export default countrySlice.reducer
