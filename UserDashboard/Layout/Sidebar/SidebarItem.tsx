import { NavLink } from 'react-router-dom'
import Item from './Item'

type SideBarProps = {
  text: string
  icon: any
  href: string
  onClick: React.MouseEventHandler<HTMLAnchorElement>
  selected: string
}

const SidebarItem = ({ text, icon, href, onClick, selected }: SideBarProps) => {
  return (
    <NavLink
      end
      to={href}
      className={`flex justify-between w-full sm:justify-center items-center 
        h-14 py-2 px-3 select-none hover:border-l-2
        hover:border-primary-blue border-primary-light cursor-normal 
        ${selected === text ? 'bg-primary-blue text-white' : ''}`}
      onClick={onClick}
    >
      <Item icon={icon} text={text} />
    </NavLink>
  )
}

export default SidebarItem
