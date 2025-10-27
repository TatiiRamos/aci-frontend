import { useState } from 'react'
import { ReactNode } from 'react'
import Footer from '../../../components/Footer'
import NavBar from '../../../components/Navbar'
import Sidebar from './Sidebar'
import { SidebarProvider } from '../../../Context/SidebarContext'
import ScrollToTop from '../../../utils/ScrollToTop'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai' // Iconos para el menú hamburguesa

export interface PropsMain {
  children?: ReactNode
}

const DashboardLayout = ({ children }: PropsMain) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <ScrollToTop />
      <SidebarProvider>
        <NavBar />
        <main className="text-primary-blue font-Montserrat-Regular mt-8">
          <section className="flex sm:flex-col">
            {/* Botón del menú hamburguesa */}
            <div className="sm:block md:block hidden px-4">
              <button onClick={toggleSidebar} className="text-2xl">
                {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>

            {/* Sidebar que se oculta en pantallas pequeñas y se muestra en pantallas medianas y grandes */}
            <div
              className={`pt-5 min-h-0 sm:w-full md:w-full sm:absolute md:absolute z-40 md:top-[200px] top-[220px] overflow-hidden ${
                isSidebarOpen ? 'block' : 'hidden'
              }  lg:block xl:block 2xl:block`}
            >
              <Sidebar />
            </div>

            {/* El contenido principal siempre debe estar visible */}
            <div className="pt-5 min-h-0 overflow-visible lg:w-full xl:w-full 2xl:w-full">
              {children}
            </div>
          </section>
        </main>
        <Footer />
      </SidebarProvider>
    </>
  )
}

export default DashboardLayout
