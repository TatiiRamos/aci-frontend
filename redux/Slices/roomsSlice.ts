import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { InterfaceRooms } from '../../types/interfaceRooms'
import axios from 'axios'
import { BASE_URL } from '../../api'

interface RoomsState {
  room: InterfaceRooms | null
  rooms: InterfaceRooms[]
  error: string | null
  loading: boolean
}

const initialState: RoomsState = {
  room: null,
  rooms: [],
  error: null,
  loading: false
}

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/rooms`)
    console.log('redux rooms ', data)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const getRoomByStayId = createAsyncThunk(
  'rooms/getRoomByStayId',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/rooms/stay/${id}`)
      return data
    } catch (error: any) {
      console.error('Error fetching room:', error)
      return rejectWithValue(`Error fetching room: ${error.message}`)
    }
  }
)

export const createRoom = createAsyncThunk(
  'rooms/createRoom',
  async (newRoom: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/rooms`, newRoom)
      return data.room
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

export const deleteRoom = createAsyncThunk(
  'rooms/deleteRoom',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/rooms/${id}`)
      return id
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)

const RoomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.fulfilled, (state, action) => {
        state.rooms = action.payload
      })
      .addCase(getRoomByStayId.fulfilled, (state, action) => {
        state.room = action.payload
      })
      .addCase(getRoomByStayId.rejected, (state, action) => {
        state.error = action.payload as string
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.rooms.push(action.payload)
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.rooms = state.rooms.filter((room) => room.id !== action.payload)
      })
  }
})

export default RoomsSlice.reducer
