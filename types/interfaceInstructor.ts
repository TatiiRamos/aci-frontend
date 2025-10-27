import { StationInterface } from './interfaceStation'

export interface InstructorInterface {
  id: string
  name_en: string
  name_es: string
  subtitle_en: string
  subtitle_es: string
  description_en: string
  description_es: string
  video_es: string
  video_en: string
  email: string
  phone: string
  linkedin: string
  image_url: string
  station: StationInterface
}
