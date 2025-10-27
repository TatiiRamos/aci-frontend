import { InternshipsInterface } from './interfaceInternship'
import { InterfaceCountry } from './interfaceCountry'
import { InstructorInterface } from './interfaceInstructor'
import { InterfaceLocation } from './interfaceLocation'

export interface InterfaceStay {
  id: string
  type: string
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  internship: InternshipsInterface
  country: InterfaceCountry
  instructor: InstructorInterface
  location: InterfaceLocation
}
