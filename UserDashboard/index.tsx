import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import DashboardNavCards from '../../components/UserDashboard/DashboardNavCards'
import { useSidebar } from '../../Context/SidebarContext'
import { useUser } from '../../Hooks/useGetUsers'
import PageSkeleton from '@/components/ui/PageSkeleton'

const UserInformation = () => {
  const { t } = useTranslation('userDashboard')
  const userData = useUser()
  const { setSelected } = useSidebar()

  useEffect(() => {
    userData.get()
  }, [])

  if (userData.isLoading) {
    return <PageSkeleton showHero={false} sectionsCount={2} />
  }

  const getProfileImage = () => {
    if (userData?.data?.img) {
      return userData?.data?.img
    } else {
      const initials = `${userData?.data?.firstName?.charAt(0) || ''}${userData?.data?.lastName?.charAt(0) || ''}`
      return initials
    }
  }

  return (
    <div className="2xl:w-[70rem] mx-auto xl:mx-6 md:mx-4">
      {/* TODO: Hacer Componentes Reutilizables */}
      <article
        className="flex font-Montserrat lg:px-[18px]
          flex-col-reverse xl:flex-row 2xl:flex-row sm:px-[20px] sm:mx-auto sm:w-full
         text-primary-blue lg:mx-auto w-full relative"
      >
        {/* Informacion de Usuario */}
        <div className="flex flex-col items-start flex-1 lg:text-center">
          <div
            className="flex flex-col items-start sm:w-full sm:justify-between justify-center
              lg:flex-row gap-3 mb-5 sm:flex-row md:flex-row sm:mb-0"
          >
            <h1 className="font-[800] text-[40px] leading-[50px]">
              {t('profileTitle')}
            </h1>
            <NavLink to="/user/edit" className="my-auto lg:mx-4">
              <Button
                title={t('editProfile')}
                bgColor="bg-white"
                handleClick={() => setSelected(t('sidebar.settings'))}
              />
            </NavLink>
          </div>

          {/* Imagen de Usuario */}
          <div
            className="flex flex-row items-center xl:flex-col 2xl:flex-col gap-[16px]
              lg:right-[38px] xl:right-[48px] 2xl:right-0 sm:mt-[20px]
              xl:absolute 2xl:absolute"
          >
            <div
              className="flex items-center justify-center text-primary-blue
                size-60 md:size-24 sm:size-[100px] lg:size-28 bg-primary-green rounded-full"
            >
              <p className="text-[90px] md:text-[40px] sm:text-center sm:text-[30px] lg:text-[40px] sm:w-[100px]">
                {getProfileImage()}
              </p>
            </div>
            <div className="text-start lg:text-center xl:text-center 2xl:text-center flex flex-col">
              <h2 className="font-[800] text-[24px] sm:text-[22px] leading-[27px]">
                {`${userData?.data?.firstName} ${userData?.data?.lastName}`}
              </h2>
              <h3 className="font-[400] text-[23px] sm:text-[22px] leading-[30px] mt-[12px] lg:text-left">
                {userData?.data?.role === 'client' ? t('student') : t('admin')}
              </h3>
              <h4 className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[16px] lg:text-left">
                {`${userData?.data?.country}`}
              </h4>
            </div>
          </div>

          {/* Información personal */}
          <div className="">
            <h2 className="font-[700] text-[25px] leading-[40px] mt-6 lg:mt-4 lg:text-left">
              {t('personalInfo')}
            </h2>
            <div className="flex gap-10 flex-wrap pb-8 pt-4 pl-6">
              <div className="flex gap-10 flex-wrap">
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold">{t('fullName')}</h3>
                    <p>{`${userData?.data?.firstName} ${userData?.data?.lastName}`}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{t('email')}</h3>
                    <p>{`${userData?.data?.email}`}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{t('country')}</h3>
                    <p>{`${userData?.data?.country}`}</p>
                  </div>
                </div>
                <div className="self-end flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold">{t('phone')}</h3>
                    <p>{`${userData?.data?.telUser}`}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{t('city')}</h3>
                    <p>{`${userData?.data?.city}`}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:mx-auto lg:w-full">
              <h2 className="font-[700] text-[25px] leading-[40px] lg:text-left">
                {t('emergencyContact')}
              </h2>
              <div className="flex gap-10 pt-4 justify-start">
                <div className="flex flex-col gap-5 pl-6">
                  <div>
                    <h3 className="font-bold">{t('fullName')}</h3>
                    <p>{`${userData?.data?.nameContact}`}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{t('phone')}</h3>
                    <p>{`${userData?.data?.telContact}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <DashboardNavCards />
    </div>
  )
}

export default UserInformation
