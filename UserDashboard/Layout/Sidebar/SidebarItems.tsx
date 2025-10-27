import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  InformationCircleIcon,
  UserIcon,
  XCircleIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { RiProhibitedLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

type Item = {
  name: string
  icon: any
  link: string
}

export const getSidebarItems = () => {
  const { t } = useTranslation('userDashboard')
  return [
    {
      name: t('sidebar.profile'),
      icon: <UserIcon className="w-[24px]" />,
      link: '/user'
    },
    {
      name: t('sidebar.reservation'),
      icon: <AcademicCapIcon className="w-[24px]" />,
      link: '/user/reservations'
    },
    {
      name: t('sidebar.cancelReservation'),
      icon: <RiProhibitedLine className="w-[24px] size-6" />,
      link: '/user'
    },
    {
      name: t('sidebar.info'),
      icon: <InformationCircleIcon className="w-[24px]" />,
      link: '/user/info'
    },
    {
      name: t('sidebar.purchases'),
      icon: <ShoppingBagIcon className="w-[24px]" />,
      link: '/user/shops'
    },
    {
      name: t('sidebar.settings'),
      icon: <Cog8ToothIcon className="w-[24px]" />,
      link: '/user/edit'
    }
  ]
}
