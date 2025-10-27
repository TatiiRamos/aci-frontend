import { InterfaceLocation } from './interfaceLocation'
import { InterfaceDirector } from './interfaceDirector'
import { InterfaceCountry } from './interfaceCountry'

export interface StationInterface {
  id: string
  state: boolean
  name_en: string
  name_es: string
  description_en?: string
  description_es?: string
  subtitle_en?: string
  subtitle_es?: string
  video_es: string
  video_en: string
  image_url: string
  country?: InterfaceCountry
  location?: InterfaceLocation
  director?: InterfaceDirector
  director_id?: number
  country_id?: string
}
