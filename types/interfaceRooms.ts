import { InterfacePrice } from './interfacePrice'
import { InterfaceStay } from './interfaceStay'

export interface InterfaceRooms {
  id: string
  name_es: string
  name_en: string
  description_es: string
  description_en: string
  images?: string[]
  nRooms: number
  nRoomsAvailable: number
  type_bed: string
  type_room: string
  stars: number
  breakfast: boolean
  private_bathroom: boolean
  wifi: boolean
  stay?: InterfaceStay
  price?: InterfacePrice
  price_id?: string
  stay_id?: number
}

// type StateRoom = "Occupied" | "Available" | "Reserved" | "Maintenance";
