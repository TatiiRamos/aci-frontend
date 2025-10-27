import { BASE_URL } from '../api'

export interface UserModel {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  country: string
  city: string
  telUser: string
  telContact: string
  nameContact: string
}

export interface CountryModel {
  language: string
  name: string
  subtitle: string
  description: string
  image: string[]
}

export interface InstructorModel {
  language: string
  name: string
  linkedin: string
  description: string
  image: string
  station: string
  internship: string
}

export interface InternshipModel {
  language: string
  name: string
  subtitle: string
  state: string
  description: string
  image: string[]
  pdf: string
  stations: string[]
}

export interface RoomModel {
  modelType: string
  language: string
  name: string
  stay: string
  subtitle: string
  description: string
  prices: {
    price: number
    currency: string
  }
  bookable: boolean
  state: string
  image: string[]
}

export interface StationModel {
  language: string
  name: string
  state: boolean
  subtitle: string
  description: string
  country: string
  responsable: string
  mailResponsale: string
  telResponsable: string
  location: {
    gps: string
    address: string
  }
  image: string[]
}

export interface StayModel {
  language: string
  name: string
  hotelStars: number
  description: string
  type: string
  location: {
    gps: string
    address: string
  }
  station: string
  image: string[]
}

const userModel: UserModel = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: '',
  country: '',
  city: '',
  telUser: '',
  telContact: '',
  nameContact: ''
}

const countryModel: CountryModel = {
  language: '',
  name: '',
  subtitle: '',
  description: '',
  image: []
}

const instructorModel: InstructorModel = {
  language: '',
  name: '',
  linkedin: '',
  description: '',
  image: '',
  station: '',
  internship: ''
}

const internshipModel: InternshipModel = {
  language: '',
  name: '',
  subtitle: '',
  state: 'Disabled',
  description: '',
  image: [],
  pdf: '',
  stations: []
}

const roomModel: RoomModel = {
  modelType: 'room',
  language: '',
  name: '',
  stay: '',
  subtitle: '',
  description: '',
  prices: {
    price: 0,
    currency: ''
  },
  bookable: true,
  state: 'Occupied',
  image: []
}

const stationModel: StationModel = {
  language: '',
  name: '',
  state: false,
  subtitle: '',
  description: '',
  country: '',
  responsable: '',
  mailResponsale: '',
  telResponsable: '',
  location: { gps: '', address: '' },
  image: []
}

const stayModel: StayModel = {
  language: '',
  name: '',
  hotelStars: 1,
  description: '',
  type: 'Hotel',
  location: { gps: '', address: '' },
  station: '',
  image: []
}

export type ModelName =
  | 'countries'
  | 'instructors'
  | 'internships'
  | 'rooms'
  | 'stations'
  | 'stays'
  | 'newUser'

export interface ModelMap {
  [key: string]: {
    endpoint: string
    model: any
  }
}

export const modelsMap: ModelMap = {
  countries: {
    endpoint: `${BASE_URL}/country`,
    model: countryModel
  },
  instructors: {
    endpoint: `${BASE_URL}/instructors`,
    model: instructorModel
  },
  internships: {
    endpoint: `${BASE_URL}/internships`,
    model: internshipModel
  },
  rooms: {
    endpoint: `${BASE_URL}/rooms`,
    model: roomModel
  },
  stations: {
    endpoint: `${BASE_URL}/stations`,
    model: stationModel
  },
  stays: {
    endpoint: `${BASE_URL}/stays`,
    model: stayModel
  },
  newUser: {
    endpoint: `${BASE_URL}/country`,
    model: userModel
  }
}
