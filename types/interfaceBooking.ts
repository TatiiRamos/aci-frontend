export interface InterfaceBooking {
  id: number
  start_date: Date
  end_date: Date
  rooms_reserved: number
  status: boolean
  duration: number
  total_price: string
  payment_status: string
  payment_reference: string
  pdf_itinerary: string
  stay_id: number
  user_id: number
  internship_id: string
  created_at: Date
  updated_at: Date
}

export interface InterfaceCreateBookingBody {
  bookingData: BookingData
  roomsData: RoomsData[]
}

export interface InterfaceCreateBookingAction {
  stayId: number
  userId: number
  internshipId: number
  hotelRoomId: number
  price: string
  startDate: string
  endDate: string
}

export interface BookingData {
  start_date: string
  end_date: string
  rooms_reserved: number
  status: boolean
  duration: number
  total_price: string
  payment_status: string
  payment_reference: string
  pdf_itinerary: string
  stay_id: number
  user_id: number
  internship_id: number
}

export interface RoomsData {
  room_id: number
  quantity: number
}
