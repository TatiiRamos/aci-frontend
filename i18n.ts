import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importar archivos de traducción
import navigationES from './translations/es/navigation.json'
import navigationEN from './translations/en/navigation.json'
import aboutES from './translations/es/about.json'
import aboutEN from './translations/en/about.json'
import footerES from './translations/es/footer.json'
import footerEN from './translations/en/footer.json'
import contactES from './translations/es/contact.json'
import contactEN from './translations/en/contact.json'
import colombiaES from './translations/es/colombia.json'
import colombiaEN from './translations/en/colombia.json'
import internshipsES from './translations/es/internships.json'
import internshipsEN from './translations/en/internships.json'
import communityES from './translations/es/community.json'
import communityEN from './translations/en/community.json'
import homeES from './translations/es/home.json'
import homeEN from './translations/en/home.json'
import ecosocES from './translations/es/ecosoc.json'
import ecosocEN from './translations/en/ecosoc.json'
import stationsES from './translations/es/stations.json'
import stationsEN from './translations/en/stations.json'
import bioInternshipES from './translations/es/bioInternship.json'
import bioInternshipEN from './translations/en/bioInternship.json'
import termsAndConditionsES from './translations/es/termsAndConditions.json'
import termsAndConditionsEN from './translations/en/termsAndConditions.json'
import scheduleACallES from './translations/es/scheduleACall.json'
import scheduleACallEN from './translations/en/scheduleACall.json'
import projectsES from './translations/es/projects.json'
import projectsEN from './translations/en/projects.json'
import destinationsES from './translations/es/destinations.json'
import destinationsEN from './translations/en/destinations.json'
import menuInfoES from './translations/es/menuInfo.json'
import menuInfoEN from './translations/en/menuInfo.json'
import bookingES from './translations/es/booking.json'
import bookingEN from './translations/en/booking.json'
import companiesES from './translations/es/companies.json'
import companiesEN from './translations/en/companies.json'

import userDashboardES from './translations/es/userDashboard.json'
import userDashboardEN from './translations/en/userDashboard.json'
import successfulPaymentES from './translations/es/successfulPayment.json'
import successfulPaymentEN from './translations/en/successfulPayment.json'
import articlesES from './translations/es/articles.json'
import articlesEN from './translations/en/articles.json'
import helpES from './translations/es/help.json'
import helpEN from './translations/en/help.json'

import stationFormES from './translations/es/stationForm.json'
import stationFormEN from './translations/en/stationForm.json'
import stationSectionES from './translations/es/stationSection.json'
import stationSectionEN from './translations/en/stationSection.json'

// Configuración de recursos organizados por namespaces
const resources = {
  es: {
    navigation: navigationES,
    about: aboutES,
    footer: footerES,
    contact: contactES,
    colombia: colombiaES,
    internships: internshipsES,
    community: communityES,
    home: homeES,
    ecosoc: ecosocES,
    stations: stationsES,
    bioInternship: bioInternshipES,
    termsAndConditions: termsAndConditionsES,
    scheduleACall: scheduleACallES,
    projects: projectsES,
    destinations: destinationsES,
    menuInfo: menuInfoES,
    booking: bookingES,
    companies: companiesES,
    userDashboard: userDashboardES,
    successfulPayment: successfulPaymentES,
    articles: articlesES,
    help: helpES,
    stationForm: stationFormES,
    stationSection: stationSectionES
  },
  en: {
    navigation: navigationEN,
    about: aboutEN,
    footer: footerEN,
    contact: contactEN,
    colombia: colombiaEN,
    internships: internshipsEN,
    community: communityEN,
    home: homeEN,
    ecosoc: ecosocEN,
    stations: stationsEN,
    bioInternship: bioInternshipEN,
    termsAndConditions: termsAndConditionsEN,
    scheduleACall: scheduleACallEN,
    projects: projectsEN,
    destinations: destinationsEN,
    menuInfo: menuInfoEN,
    booking: bookingEN,
    companies: companiesEN,
    userDashboard: userDashboardEN,
    successfulPayment: successfulPaymentEN,
    articles: articlesEN,
    help: helpEN,
    stationForm: stationFormEN,
    stationSection: stationSectionEN
  }
}

// Función para detectar idioma inteligentemente
const detectLanguage = () => {
  // 1. Primero checa localStorage
  const storedLang = localStorage.getItem('language')
  if (storedLang && ['es', 'en'].includes(storedLang)) {
    return storedLang
  }

  // 2. Luego checa el navegador
  const browserLang = navigator.language.slice(0, 2)
  if (['es', 'en'].includes(browserLang)) {
    return browserLang
  }

  // 3. Por defecto español
  return 'es'
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: 'es',

  defaultNS: 'navigation',

  interpolation: {
    escapeValue: false
  },

  // Configuración adicional
  debug: process.env.NODE_ENV === 'development',

  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  }
})

export default i18n
