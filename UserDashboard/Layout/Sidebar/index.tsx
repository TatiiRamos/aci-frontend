import { Link, useNavigate } from 'react-router-dom'
import { getSidebarItems } from './SidebarItems'
import SidebarItem from './SidebarItem'
import { authService } from '../../../../services/Auth.service'
import { useSidebar } from '../../../../Context/SidebarContext'
import { LuLogOut } from 'react-icons/lu'

const Sidebar = () => {
  const { selected, setSelected } = useSidebar()
  const navigate = useNavigate()
  const handleClick = () => {
    authService.logout()
    window.location.href = '/'
  }

  return (
    <aside
      style={{ boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)' }}
      className="font-Montserrat xl:w-[200px] 2xl:w-[200px] xl:me-14 2xl:me-14 
        sm:mb-10 sm:mx-8 md:me-4 md:w-[220px] lg:w-[220px] lg:me-24 overflow-hidden
        bg-white rounded-tr-[50px] rounded-br-[50px] sm:rounded-[50px]"
    >
      {/* Navegación del Dashboard */}
      <div className="flex flex-col gap-2 py-10 sm:pb-6 sm:py-4">
        {getSidebarItems().map((item: any, i: number) => (
          <SidebarItem
            key={i}
            text={item.name}
            icon={item.icon}
            href={item.link}
            onClick={() => setSelected(item.name)}
            selected={selected}
          />
        ))}
        <Link
          to={'/'}
          className="h-14 py-2 px-3 hover:cursor-pointer items-center sm:mx-auto flex gap-2 font-[14px]"
          onClick={handleClick}
        >
          <LuLogOut className="w-[24px] size-5 text-red" />
          Cerrar Sesión
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
