import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationContext } from './TranslationContext'

//--------------------NavBar--------------------
import contenNavBarMenu from '../constants/configTranslation/navBarTranslation/navBarConfigTranslate'
import ContentHelpC from '../constants/configTranslation/HelpCenterTraslation/ContentHelpC'
import HowItWorks from '../constants/configTranslation/HowItWorksTranslation/ContentHowItWorks'
import contentScheduleACall from '../constants/configTranslation/ScheduleACallTranslation/ScheduleACallTranslation'

//--------------------Home--------------------------
import homeHeroConfigTranslate from '../constants/configTranslation/HomeTraslation/HomeHeroConfigTranslate'
import ECOSOCTranslate from '../constants/configTranslation/HomeTraslation/ECOSOSTranslation'
import aboutACIConfigTranslate from '../constants/configTranslation/HomeTraslation/AboutACIConfigTranslate'
import whosAimedAtConfigTranslate from '../constants/configTranslation/HomeTraslation/WhosAimedAtConfigTranslate'
import contentBeAHero from '../constants/configTranslation/BeAHeroTranslation/ContentBeAHero'
import countries from '../constants/configTranslation/CountriesTranslation/ContentCountries'
import projectLan from '../constants/configTranslation/ProjectLandingTranslation/contenProjectLanding'
import projects from '../constants/configTranslation/Projects/contenProjects'
import contentCompanies from '../constants/configTranslation/CompaniesTranslation/ContentCompanies'

// user dashboard
import contentUserReservation from '../constants/configTranslation/UserReservations/ContentUserReservation'

//--------------------Estaciones--------------------
import stationHeroConfigTranslate from '../constants/configTranslation/EstacionesTraslation/HeroStationConfigTranslate'
import aboutTheStationConfigTransalte from '../constants/configTranslation/EstacionesTraslation/AboutTheStation/AboutTheStationConfigTranslate'
import ourInternshipsConfigTranslate from '../constants/configTranslation/EstacionesTraslation/OurInternships/OurInternshipsConfigTranslate'
import stationCardConfigTranslate from '../constants/configTranslation/EstacionesTraslation/OtherStations/OtherStationsConfigTranslate'
import InfoInternshipConfigTranslate from '../constants/configTranslation/EstacionesTraslation/InfoInternship/InfoInternshipConfigTranslate'
import bookingConfigTranslate from '../constants/configTranslation/EstacionesTraslation/Booking/BookingConfigTranslate'
import TermsAndConditionsTranslate from '../constants/configTranslation/TermsAndConditionsTranslation/contentTermsAndConditions.ts'
import PrivacyPoliciesTranslate from '../constants/configTranslation/PrivacyPoliciesTranslation/contentPrivacyPolicies'
import CookiesTranslate from '../constants/configTranslation/CookiesTranslation/contentCookies'
import contentMenuInfo from '../constants/configTranslation/EstacionesTraslation/MenuInfo/ContentMenuInfo'
//--------------------Internships--------------------
import heroInternshipTranslate from '../constants/configTranslation/IntershipTraslation/heroInternshipTranslate'
import contentNewInternships from '../constants/configTranslation/NewInternshipsTraslation/ContentNewInternships'
//--------------------Colombia--------------------
import ColombiaTrConfig from '../constants/configTranslation/DestinyTraslation/ColombiaTrCon'
import AboutCountry from '../constants/configTranslation/AboutCountryTranslation/ContentAboutCountry'

//--------------------Footer--------------------
import contentFooter from '../constants/configTranslation/FooterTranslation/ContentFooter'

//--------------------Biomonitorizacion--------------------
import contentBioInternship from '../constants/configTranslation/BioInternshipTranslation/ContentBioInternship'
import contentAbout from '../constants/configTranslation/AboutTranslation/ContentAbout'

//-------------------Contacto---------------------
import contentContact from '../constants/configTranslation/ContactTranslation/ContentContact'
import contentTeam from '../constants/configTranslation/OurTeamTranslation/contenTeam'

//-------------------Reserva---------------------
import contenBooking from '../constants/configTranslation/BookingTranslation/contenBooking'
import contentPaypal from '../constants/configTranslation/PaypalTranslation/ContentPaypal'
//---------------------------Form register----------------------------------------------
import contentValidateText from '../constants/configTranslation/LoginFormTranslation/validatedTextErrors'
import {
  ChildrenPropsType,
  LanguageType,
  TranslationContextType
} from '../types/interfaceContext'

export const ContextProvider = ({ children }: ChildrenPropsType) => {
  const { i18n } = useTranslation()

  // Sincronizar con react-i18next
  const initialLanguage = (i18n.language as LanguageType) || 'es'
  const [language, setLanguage] = useState<LanguageType>(initialLanguage)
  const [content, setContent] = useState<
    TranslationContextType['content'] | undefined
  >()

  // Usa el localStorage para obtener el idioma guardado o usa "es" por defecto
  const initialSelectedLanguage =
    (localStorage.getItem('selectedLanguage') as LanguageType) ||
    initialLanguage
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(
    initialSelectedLanguage
  )

  // Sincronizar con react-i18next cuando cambie el idioma
  useEffect(() => {
    const handleLanguageChanged = () => {
      const newLanguage = i18n.language as LanguageType
      setLanguage(newLanguage)
      setSelectedLanguage(newLanguage)
      localStorage.setItem('language', newLanguage)
      localStorage.setItem('selectedLanguage', newLanguage)
    }

    // Sincronizar al inicio
    handleLanguageChanged()

    // Escuchar cambios de idioma
    i18n.on('languageChanged', handleLanguageChanged)

    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [i18n])

  useEffect(() => {
    const navBarMenuModule = contenNavBarMenu
    const howItWorksModule = HowItWorks
    const homeModule = {
      hero: homeHeroConfigTranslate,
      ecosoc: ECOSOCTranslate,
      about: aboutACIConfigTranslate,
      whosAimedAt: whosAimedAtConfigTranslate
    }
    const estacionesModule = {
      hero: stationHeroConfigTranslate,
      aboutTheStation: aboutTheStationConfigTransalte,
      ourInternships: ourInternshipsConfigTranslate,
      stationCard: stationCardConfigTranslate,
      infoInternship: InfoInternshipConfigTranslate,
      booking: bookingConfigTranslate
    }
    const colombiaModule = ColombiaTrConfig
    // se cargan el contenido en el contexto
    const helpCenterModule = ContentHelpC
    const internshipsModule = heroInternshipTranslate
    const beAHeroModule = contentBeAHero
    const footerModule = contentFooter
    const bioInternModule = contentBioInternship
    const aboutModule = contentAbout
    const contactModule = contentContact
    const countriesModule = countries
    const NewInternshipsModule = contentNewInternships
    const termsAndConditions = TermsAndConditionsTranslate
    const PrivacyPolicies = PrivacyPoliciesTranslate
    const Cookies = CookiesTranslate
    const companiesModule = contentCompanies
    const MenuInfoModule = contentMenuInfo
    const bookingModule = contenBooking
    const paypalModule = contentPaypal
    const userReservationModule = contentUserReservation
    const scheduleACallModule = contentScheduleACall
    const ecosocModule = ECOSOCTranslate
    const aboutEcosocModule = ECOSOCTranslate
    const messagesValitedRegisterFormModule = contentValidateText
    setContent({
      home: { ...homeModule },
      estaciones: { ...estacionesModule },
      navbarmenu: navBarMenuModule,
      howItWors: howItWorksModule,
      helpCenter: helpCenterModule,
      colombia: colombiaModule,
      internships: internshipsModule,
      beAHero: beAHeroModule,
      footer: footerModule,
      bioInternship: bioInternModule,
      aboutUs: aboutModule,
      projectLan: projectLan,
      projects: projects,
      contact: contactModule,
      countries: countriesModule,
      aboutCountry: AboutCountry,
      team: contentTeam,
      newInternships: NewInternshipsModule,
      termsAndConditions: termsAndConditions,
      privacyPolicies: PrivacyPolicies,
      cookies: Cookies,
      companies: companiesModule,
      menuInfo: MenuInfoModule,
      booking: bookingModule,
      paypal: paypalModule,
      userReservation: userReservationModule,
      scheduleACall: scheduleACallModule,
      ecosoc: ecosocModule,
      aboutEcosoc: aboutEcosocModule,
      validateFormRegister: messagesValitedRegisterFormModule
    })

    // Guardar el idioma seleccionado en el localStorage
    localStorage.setItem('language', language)
  }, [language])

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage)
    setSelectedLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
  }

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleLanguageChange, content }}
    >
      {children}
    </TranslationContext.Provider>
  )
}
