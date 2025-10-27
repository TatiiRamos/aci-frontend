import { InterfacePrice } from '../types/interfacePrice'
import { InterfaceRooms } from '../types/interfaceRooms'

interface MapRoomsArgs {
  rooms: InterfaceRooms[]
  prices: InterfacePrice[]
}

export const mapRooms = ({ rooms, prices }: MapRoomsArgs) => {
  const mappedRooms = rooms
    .filter(({ nRoomsAvailable }) => nRoomsAvailable! > 0)
    .map((room) => {
      const newPrice = prices.find((price) => price.id === room.price_id)

      return {
        id: room.id,
        name_es: room.name_es || '-',
        name_en: room.name_en || '-',
        description_es: room.description_es || '-',
        description_en: room.description_en || '-',
        nRooms: room.nRooms || 0,
        nRoomsAvailable: room.nRoomsAvailable || 0,
        type_bed: room.type_bed || 'N/A',
        type_room: room.type_room || 'N/A',
        stars: room.stars || 0,
        breakfast: room.breakfast || false,
        private_bathroom: room.private_bathroom || false,
        wifi: room.wifi || false,
        price: newPrice?.price,
        currency: newPrice?.currency,
        stay_id: room.stay_id // <--- aquí agregas stay_id
      }
    })

  return mappedRooms
}
