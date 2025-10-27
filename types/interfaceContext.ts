export interface ChildrenPropsType {
  children: JSX.Element | JSX.Element[]
}

export type LanguageType = 'es' | 'en'

// tipado para el contenido
export interface ViewTypes {
  estaciones: {
    aboutTheStation: { es: any; en: any }
    booking: { es: any; en: any }
    hero: { es: any; en: any }
    stationCard: { es: any; en: any }
    ourInternships: { es: any; en: any }
    infoInternship: { es: any; en: any }
  }

  home: {
    about: { es: any; en: any }
    hero: { es: any; en: any }
    whosAimedAt: { es: any; en: any }
  }
  navbarmenu: { es: any; en: any }
  helpCenter: { es: any; en: any }
  howItWors: { es: any; en: any }
  colombia: { es: any; en: any }
  internships: { es: any; en: any }
  beAHero: { es: any; en: any }
  footer: { es: any; en: any }
  bioInternship: { es: any; en: any }
  aboutUs: { es: any; en: any }
  projectLan: { es: any; en: any }
  projects: { es: any; en: any }
  countries: { es: any; en: any }
  aboutCountry: { es: any; en: any }
  team: { es: any; en: any }
  contact: { es: any; en: any }
  newInternships: { es: any; en: any }
  termsAndConditions: { es: any; en: any }
  privacyPolicies: { es: any; en: any }
  cookies: { es: any; en: any }
  companies: { es: any; en: any }
  menuInfo: { es: any; en: any }
  booking: { es: any; en: any }
  paypal: { es: any; en: any }
  userReservation: { es: any; en: any }
  scheduleACall: { es: any; en: any }
  ecosoc: { es: any; en: any }
  aboutEcosoc: { es: any; en: any }
  validateFormRegister: { es: any; en: any }
}

export interface TranslationContextType {
  language: LanguageType
  content?: ViewTypes
  setLanguage: (language: LanguageType) => void
}
