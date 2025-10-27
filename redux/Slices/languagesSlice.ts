import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../api'

export const getLanguages = createAsyncThunk(
  'languages/getLanguages',
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/all`)

      const languagesSet = new Set<string>()
      data.forEach((country: any) => {
        if (country.languages) {
          Object.values(country.languages).forEach((language: any) => {
            languagesSet.add(language)
          })
        }
      })

      const listOfLanguages = Array.from(languagesSet).sort()
      return listOfLanguages
    } catch (error: any) {
      console.error('Error fetching languages:', error)
      throw new Error(`Error fetching languages: ${error.message}`)
    }
  }
)

const initialState: string[] = []

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.fulfilled, (_state, action) => {
      return action.payload
    })
  }
})

export default languagesSlice.reducer
