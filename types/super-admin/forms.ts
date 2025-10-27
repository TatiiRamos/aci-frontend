export interface CountryData {
  //name: string
  //subtitle: string
  //description: string
  //language: string
  //image: string
  pdf: string
  name_es: string
  name_en: string
  description_es: string
  description_en: string
  subtitle_es: string
  subtitle_en: string
  image: FileList
}
export interface InternshipData {
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  subtitle_en: string
  subtitle_es: string
  image_url: FileList
  state: string
  station_id: string
  country_id: string
}

export interface StationData {
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  subtitle_en: string
  subtitle_es: string
  video_en: string
  video_es: string
  image_url: string
  director_id: string
  country_id: string
  location_id: string
  state: string
  /*language: string
  name: string
  description: string
  state: boolean
  subtitle: string
  responsable: string
  mailResponsale: string
  telResponsable: string
  location: string
  country: string
  pdf: string
  image: string*/
}

export interface StayData {
  language: string
  name: string
  hotelStars: string
  description: string
  type: string
  location: string
  station: string
  pdf: string
  image: string
}

export interface InstructorData {
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
  station_id: string
}

export interface LocationData {
  city: string
  gps: string
  address: string
}
export interface DirectorData {
  director_name: string
  director_email: string
  director_phone: string
  video_es: string
  video_en: string
  image_url: string
}
