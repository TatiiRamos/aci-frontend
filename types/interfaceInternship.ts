import { InterfaceCountry } from './interfaceCountry'
import { StationInterface } from './interfaceStation'

export interface InternshipsInterface {
  id: string
  name_es: string
  name_en: string
  description_es: string
  description_en: string
  subtitle_es: string
  subtitle_en: string
  image_url: string
  state: boolean
  station: StationInterface
  station_id: number
  country: InterfaceCountry
  country_id: number
}
