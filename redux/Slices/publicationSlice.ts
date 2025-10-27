import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UUID } from 'crypto'
import { http } from '../../services/http'
import { AppDispatch } from '../Store/store'

interface Publication {
  id: UUID
  title: string
  description: string
  image: string
  date: Date
}

interface PublicationState {
  publications: Publication[]
  filteredPublications: Publication[]
}

const initialState: PublicationState = {
  publications: [],
  filteredPublications: []
}

const PublicationSlice = createSlice({
  name: 'publication',
  initialState,
  reducers: {
    getPublications: (state, action: PayloadAction<Publication[]>) => {
      state.publications = action.payload
    },
    postPublications: (state, action: PayloadAction<Publication>) => {
      state.publications.push(action.payload)
    },
    putPublications: (state, action: PayloadAction<Publication>) => {
      const index = state.publications.findIndex(
        (pub) => pub.id === action.payload.id
      )
      if (index !== -1) {
        state.publications[index] = action.payload
      }
    },
    deletePublications: (state, action: PayloadAction<string>) => {
      state.publications = state.publications.filter(
        (pub) => pub.id !== action.payload
      )
    }
  }
})

export const {
  getPublications,
  postPublications,
  putPublications,
  deletePublications
} = PublicationSlice.actions

export const createPublication =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
      const response = await http.post<Publication>(
        'publications/create',
        formData,
        {
          'Content-Type': 'multipart/form-data'
        }
      )
      dispatch(postPublications(response))
    } catch (error) {
      console.error('Error creating publication:', error)
      throw new Error('Failed to create publication')
    }
  }

export default PublicationSlice.reducer
