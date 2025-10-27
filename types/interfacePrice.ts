import { InterfaceRooms } from './interfaceRooms'

export interface InterfacePrice {
  id: string
  price?: number
  currency?: string
  nWeeks?: number
  room?: InterfaceRooms
}
