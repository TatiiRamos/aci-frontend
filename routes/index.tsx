import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { FilterProjectsProvider } from '../Context/FilterProjectsContext'

import Main from '../components/Main'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import Home from '../pages/Home'
import Internship from '../pages/Internships'
import Destinations from '../pages/Destinations'
import MoreInterships from '../pages/Destinations/index'
import HelpCenter from '../pages/Help'
import Biomonitorizacion from '../pages/Biomonitorizacion'
import { AuthUser } from '../components/AuthUser/authUser'
import UserInformation from '../pages/UserDashboard'
import DashboardLayout from '../pages/UserDashboard/Layout'
import PageDashboard from '../components/DsSuperadmin/PageDashboard'
import { ProtectedLayout } from './ProtectedRoutes'
import UserEditForm from '../components/Form/UserEditForm'
import UserReservations from '../components/UserDashboard/UserReservations'
import { StayInfo } from '../components/UserDashboard/DashboardInformation/Index'
import { DashShop } from '../components/UserDashboard/DashboardShop'
import HowItWorks from '../pages/HowItWorks'
import Paypal from '../pages/Paypal'
import ScheduleACall from '../pages/ScheduleACall'
import OtherStations from '../pages/Stations/OtherStations/OtherStations'
import AboutECOSOC from '../pages/AboutECOSOC'

// import CountriesDashboard from '../components/DsSuperadmin/CountriesDashboard';
// import StationsDashboard from '../components/DsSuperadmin/StationsDashboard';
// import InternshipDashboard from '../components/DsSuperadmin/InternshipDashboard';
// import StaysDashboard from '../components/DsSuperadmin/StaysDashboard';
// import RoomDashboard from '../components/DsSuperadmin/RoomsDashboard';
// import AdminsAssignDashboard from '../components/DsSuperadmin/AdminsAssignDashboard';
// import InstructorDashboard from '../components/DsSuperadmin/instructorDashboard';

import NotFoundView from '../components/NotFoundView/NotFoundView'
import { Reservations } from '../pages/Reservations/Reservations'
import ProjectsLanding from '../pages/ProjectsLanding/EveryProjectLayout/index'
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions'
import PrivacyPolicies from '../pages/PrivacyPolicies/PrivacyPolicies'
import Cookies from '../pages/Cookies/Cookies'
import Companies from '../pages/Companies/Companies'
import StationsNC from '../pages/Stations/StationsNC'
import StationsA from '../pages/Stations/StationsA'

// Internships
import InternshipEBNC from '../pages/NewInternships/InternshipEBNC'
import InternshipEBA from '../pages/NewInternships/InternshipEBA'
import InternshipCB from '../pages/NewInternships/InternshipCB'

// Team
import Team from '../pages/OurTeam/index'
import AYC from '../pages/OurTeam/eachProgram/InfoAYC'
import CAMPUS from '../pages/OurTeam/eachProgram/InfoCAMPUS'
import DESIGN from '../pages/OurTeam/eachProgram/InfoDESIGN'
import EBA from '../pages/OurTeam/eachProgram/InfoEBA'
import PLANET from '../pages/OurTeam/eachProgram/InfoPLANET'
import PMP from '../pages/OurTeam/eachProgram/InfoPMP'
import TEDI from '../pages/OurTeam/eachProgram/InfoTEDI'

// AboutCountry
import AboutCountry from '../pages/AboutCountry/AboutCountry'
import WeatherCountry from '../pages/AboutCountry/WeatherCountry'
import HealthCountry from '../pages/AboutCountry/HealthCountry'
import VisaCountry from '../pages/AboutCountry/VisaCountry'
import CurrencyCountry from '../pages/AboutCountry/CurrencyCountry'

// Projects
import { Projects } from '../pages/Projects/InfoProjects1/indext' // BioPark Aguadas
import { Projects3 } from '../pages/Projects/InfoProjects3/indext' // CTA
import { Projects4 } from '../pages/Projects/InfoProjects4/indext' // Tejedora de sueños
import { Projects8 } from '../pages/Projects/InfoProjects8/indext' // Tarcara
import { Projects9 } from '../pages/Projects/InfoProjects9/indext' // Biomonitores
import Contact from '../pages/Contact'
import { DetailCommunity } from '../pages/Community/components/DetailCommunity'
import FormCommunity from '../components/Form/FormCommunity'
import Community from '../pages/Community/Community'
import LayoutSuperAdmin from '../components/dashboard-superadmin/layout'
import { InternshipSection } from '../components/dashboard-superadmin/sections/section-internships'
import { CountrySection } from '../components/dashboard-superadmin/sections/section-countries'
import { StationsSection } from '../components/dashboard-superadmin/sections/section-stations'

// Successful Forms
import { SuccessfulRegister } from '../pages/Register/SuccessfulRegister'
import { HostingSection } from '../components/dashboard-superadmin/sections/section-hosting'
import { InstructorSection } from '../components/dashboard-superadmin/sections/section-instructors'
import { SuccessfulPayment } from '../pages/SuccessfulPayment/SuccessfulPayment'
import { ActivateAcount } from '../pages/Register/ActivateAcount'
import { ForgotPassword } from '../pages/Register/FortgotPassword'
import { NewPassword } from '../pages/Register/NewPassword'
import { LocationSection } from '../components/dashboard-superadmin/sections/section-locations'
import { DirectorSection } from '../components/dashboard-superadmin/sections/section-directors'

const RedirectToSomos: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://www.somosawaq.org/somos')
    }
  }, [])

  return null
}

const router = createBrowserRouter([
  // {
  //   path: '/superadmin/instructors',
  //   element: (
  //     <DashboardSALayout>
  //       <PageDashboard nameModel="instructors" />
  //     </DashboardSALayout>
  //   )
  //},
  // {
  //   path: '/superadmin/stays',
  //   element: (
  //     <DashboardSALayout>
  //       <PageDashboard nameModel="stays" />
  //     </DashboardSALayout>
  //   )
  // },
  // {
  //   path: '/superadmin/rooms',
  //   element: (
  //     <DashboardSALayout>
  //       <PageDashboard nameModel="rooms" />
  //     </DashboardSALayout>
  //   )
  // },
  // {
  //   path: '/superadmin/admins',
  //   element: (
  //     <DashboardSALayout>
  //       <PageDashboard nameModel="newUser" />
  //     </DashboardSALayout>
  //   )
  // },
  {
    path: '*',
    element: (
      <Main>
        <NotFoundView />
      </Main>
    )
  },
  {
    path: '/',
    element: (
      <Main>
        <Home />
      </Main>
    )
  },
  {
    path: '/login',
    element: (
      <Main>
        <Login />
      </Main>
    )
  },
  {
    path: '/register',
    element: (
      <Main>
        <Register />
      </Main>
    )
  },
  {
    path: '/register/validation',
    element: (
      <>
        <Main>
          <SuccessfulRegister />
        </Main>
      </>
    )
  },
  {
    path: '/register/activation',
    element: (
      <>
        <Main>
          <ActivateAcount />
        </Main>
      </>
    )
  },
  {
    path: '/reset-password',
    element: (
      <>
        <Main>
          <ForgotPassword />
        </Main>
      </>
    )
  },
  {
    path: '/new-password',
    element: (
      <>
        <Main>
          <NewPassword />
        </Main>
      </>
    )
  },
  {
    path: '/register/validation',
    element: (
      <>
        <Main>
          <SuccessfulRegister />
        </Main>
      </>
    )
  },
  {
    path: '/formulariocommunity',
    element: (
      <Main>
        <FormCommunity />
      </Main>
    )
  },
  {
    path: '/internships',
    element: (
      <Main>
        <Internship />
      </Main>
    )
  },
  {
    path: '/how-it-works',
    element: (
      <Main>
        <HowItWorks />
      </Main>
    )
  },
  {
    path: '/paypal',
    element: (
      <Main>
        <Paypal />
      </Main>
    )
  },
  {
    path: '/sucessful-payment/:intershipId/:orderId',
    element: (
      <Main>
        <SuccessfulPayment />
      </Main>
    )
  },
  {
    path: '/schedule-a-call',
    element: (
      <Main>
        <ScheduleACall />
      </Main>
    )
  },
  {
    path: '/terms-and-conditions',
    element: (
      <Main>
        <TermsAndConditions />
      </Main>
    )
  },
  {
    path: '/privacy-policies',
    element: (
      <Main>
        <PrivacyPolicies />
      </Main>
    )
  },
  {
    path: '/cookies',
    element: (
      <Main>
        <Cookies />
      </Main>
    )
  },
  {
    path: '/internships/EBNC',
    element: (
      <Main>
        <InternshipEBNC />
      </Main>
    )
  },
  {
    path: '/internships/EBA',
    element: (
      <Main>
        <InternshipEBA />
      </Main>
    )
  },
  {
    path: '/internships/CB',
    element: (
      <Main>
        <InternshipCB />
      </Main>
    )
  },
  {
    path: '/empresas',
    element: (
      <Main>
        <Companies />
      </Main>
    )
  },
  {
    path: '/community',
    element: (
      <Main>
        <Community />
      </Main>
    )
  },
  {
    path: '/community/:title',
    element: (
      <Main>
        <DetailCommunity />
      </Main>
    )
  },
  {
    path: '/about-ecosoc',
    element: (
      <Main>
        <AboutECOSOC />
      </Main>
    )
  },
  {
    path: '/destinations/:name',
    element: (
      <Main>
        <MoreInterships />
      </Main>
    )
  },
  {
    path: '/stations',
    element: (
      <Main>
        <OtherStations title={''} background={''} />
      </Main>
    )
  },
  {
    path: '/stations/NorteCaldas',
    element: (
      <Main>
        <StationsNC />
      </Main>
    )
  },
  {
    path: '/stations/Andes',
    element: (
      <Main>
        <StationsA />
      </Main>
    )
  },
  {
    path: '/help',
    element: (
      <Main>
        <HelpCenter />
      </Main>
    )
  },
  {
    path: '/contact',
    element: (
      <Main>
        <Contact />
      </Main>
    )
  },
  {
    path: '/internships/:name',
    element: (
      <Main>
        <Biomonitorizacion />
      </Main>
    )
  },
  {
    path: '/about',
    element: (
      <Main>
        <RedirectToSomos />
      </Main>
    )
  },
  {
    path: '/about-colombia/about',
    element: (
      <Main>
        <AboutCountry />
      </Main>
    )
  },
  {
    path: '/about-colombia/weather',
    element: (
      <Main>
        <WeatherCountry />
      </Main>
    )
  },
  {
    path: '/about-colombia/health-and-vaccines',
    element: (
      <Main>
        <HealthCountry />
      </Main>
    )
  },
  {
    path: '/about-colombia/visa-and-embassies',
    element: (
      <Main>
        <VisaCountry />
      </Main>
    )
  },
  {
    path: '/about-colombia/currency',
    element: (
      <Main>
        <CurrencyCountry />
      </Main>
    )
  },
  {
    path: '/team',
    element: (
      <Main>
        <Team />
      </Main>
    )
  },
  {
    path: '/team/ayc',
    element: (
      <Main>
        <AYC />
      </Main>
    )
  },
  {
    path: '/team/campus',
    element: (
      <Main>
        <CAMPUS />
      </Main>
    )
  },
  {
    path: '/team/design',
    element: (
      <Main>
        <DESIGN />
      </Main>
    )
  },
  {
    path: '/team/eba',
    element: (
      <Main>
        <EBA />
      </Main>
    )
  },
  {
    path: '/team/planet',
    element: (
      <Main>
        <PLANET />
      </Main>
    )
  },
  {
    path: '/team/pmp',
    element: (
      <Main>
        <PMP />
      </Main>
    )
  },
  {
    path: '/team/tedi',
    element: (
      <Main>
        <TEDI />
      </Main>
    )
  },
  {
    path: '/projects/biodiversity',
    element: (
      <Main>
        <FilterProjectsProvider>
          <ProjectsLanding
            projectSection="bioSection"
            imageBg="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/biodiversidad_1.jpg"
          />
        </FilterProjectsProvider>
      </Main>
    )
  },
  {
    path: '/projects/technology',
    element: (
      <Main>
        <FilterProjectsProvider>
          <ProjectsLanding
            projectSection="techSection"
            imageBg="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/tecnolog%C3%ADa_1.jpg"
          />
        </FilterProjectsProvider>
      </Main>
    )
  },
  {
    path: '/projects/cultural',
    element: (
      <Main>
        <FilterProjectsProvider>
          <ProjectsLanding
            projectSection="cultSection"
            imageBg="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/cultural_1.jpg"
          />
        </FilterProjectsProvider>
      </Main>
    )
  },
  {
    path: '/projects/study-case',
    element: (
      <Main>
        <FilterProjectsProvider>
          <ProjectsLanding
            projectSection="studycaseSection"
            imageBg="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/casoEstudio_1.jpg"
          />
        </FilterProjectsProvider>
      </Main>
    )
  },
  {
    path: '/projects/biodiversity/aguadas-biopark',
    element: (
      <Main>
        <Projects />
      </Main>
    )
  },
  {
    path: '/projects/technology/cta',
    element: (
      <Main>
        <Projects3 />
      </Main>
    )
  },
  {
    path: '/projects/cultural/awaq-weaver-of-dreams',
    element: (
      <Main>
        <Projects4 />
      </Main>
    )
  },
  {
    path: '/projects/biodiversity/bio-corridor-pt',
    element: (
      <Main>
        <Projects8 />
      </Main>
    )
  },
  {
    path: '/projects/biodiversity/biomonitor',
    element: (
      <Main>
        <Projects9 />
      </Main>
    )
  },
  {
    path: '/users/active',
    element: <AuthUser />
  },
  {
    path: '/reservations',
    element: (
      <Main>
        <Reservations />
      </Main>
    )
  },
  {
    path: '',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/superadmin',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <CountrySection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/countries',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <CountrySection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/stations',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <StationsSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/internships',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <InternshipSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/hostings',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <HostingSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/locations',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <LocationSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/directors',
        element: (
          <Main>
            <LayoutSuperAdmin>
              <DirectorSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/superadmin/instructors', //superadmin/instructors
        element: (
          <Main>
            <LayoutSuperAdmin>
              <InstructorSection />
            </LayoutSuperAdmin>
          </Main>
        )
      },
      {
        path: '/user',
        element: (
          <DashboardLayout>
            <UserInformation />
          </DashboardLayout>
        )
      },
      {
        path: 'user/edit',
        element: (
          <DashboardLayout>
            <UserEditForm />
          </DashboardLayout>
        )
      },
      {
        path: 'user/reservations',
        element: (
          <DashboardLayout>
            <UserReservations />
          </DashboardLayout>
        )
      },
      {
        path: 'user/info',
        element: (
          <DashboardLayout>
            <StayInfo />
          </DashboardLayout>
        )
      },
      {
        path: 'user/shops',
        element: (
          <DashboardLayout>
            <DashShop />
          </DashboardLayout>
        )
      }
      // {
      //   path: '/superadmin/',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <CountriesDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/countries',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <CountriesDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/stations',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <StationsDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/internships',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <InternshipDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/instructors',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <InstructorDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/stays',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <StaysDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/rooms',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <RoomDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // },
      // {
      //   path: '/superadmin/admins',
      //   element: (
      //     <DashboardSALayout>
      //       {/* <AdminsAssignDashboard /> */}
      //     </DashboardSALayout>
      //   )
      // }
    ]
  }
])

export default router
