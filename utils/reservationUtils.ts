export interface ReservationData {
  internship: {
    id: string
    name: string
  }
  destiny: string
  station: string
  date: string
  hotel: { id: string; name: string; price: string }
}

export const encodeReservationData = (data: ReservationData): string => {
  try {
    const jsonString = JSON.stringify(data)
    return encodeURIComponent(jsonString)
  } catch (error) {
    console.error('Error encoding reservation data:', error)
    return ''
  }
}

export const decodeReservationData = (
  encodedData: string
): ReservationData | null => {
  try {
    const jsonString = decodeURIComponent(encodedData)
    return JSON.parse(jsonString)
  } catch (error) {
    console.error('Error decoding reservation data:', error)
    return null
  }
}
