/**
 * PÁGINA RESERVATIONS
 *
 * Esta es la página principal del sistema de reservas.
 * Coordina todos los componentes relacionados con el proceso de reserva:
 * - Tres tarjetas de selección (Internship, Fecha, Hospedaje)
 * - Resumen de la reserva con los datos seleccionados
 * - Integración con PayPal para pagos
 * - Gestión del estado global de la reserva
 *
 * FLUJO DE LA PÁGINA:
 * 1. Usuario selecciona internship → se habilita fecha
 * 2. Usuario selecciona fecha → se habilita hospedaje
 * 3. Usuario selecciona hospedaje → puede proceder al pago
 * 4. Se muestra resumen completo de la reserva
 */

import React, { useState, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Buttons/Button'
import { CardReservations } from '../../components/cardReservations'
import { Span } from './extras/Span'
import { Paypal } from '../../components/Paypal/Paypal'
import AuthModal from '../../components/Modal/AuthModal'
import PaypalModal from '../../components/Modal/PaypalModal'
import { DiseñoMedio } from './extras/DiseñoMedio'
import { TranslationContext } from '../../Context/TranslationContext'
import { useReserve } from '../../Hooks/useReserve'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/Store/store'
import { getInternship } from '../../redux/Slices/IntershipSlice'
import { usePayment } from '../../Hooks/usePayment'
import { useReserveSteps } from '../../Hooks/useReserveSteps'
import { InterfaceStay } from '../../types/interfaceStay'
import { useReservationRestore } from '../../Hooks/useReservationRestore'
import PageSkeleton from '@/components/ui/PageSkeleton'
import IncidenciaModal from '@/components/Modal/IncidenciaModal'
import Call from '@/components/Buttons/buttonIcons/Call'

/**
 * COMPONENTE PRINCIPAL RESERVATIONS
 * Página que maneja todo el flujo de reserva de principio a fin
 */
export const Reservations: React.FC = () => {
  // Hooks de traducción
  const { t } = useTranslation('booking')
  const { language } = useContext(TranslationContext)

  // Estados locales
  const [helpModal, setHelpModal] = useState(false)
  const [is15Days, setIs15Days] = useState<boolean>(false) // Duración de la reserva (15 días vs 1 mes)
  const [stay, setStay] = useState<InterfaceStay>() // Información del hospedaje seleccionado

  // Hooks personalizados
  const { steps, handleSaveOption, dataSteps } = useReserveSteps() // Gestión del flujo de pasos
  const {
    isOpenPayment,
    isOpenAuth,
    setIsOpenPayment,
    openPaymentModal,
    handleLoginSuccess,
    handlePaymentSuccess,
    closeAuthModal,
    closePaymentModal
  } = usePayment(dataSteps) // Control del modal de pago

  // Convierte "DD/MM/YYYY" a "YYYY-MM-DD"
  const convertToISO = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number)
    if (!day || !month || !year) return null
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const isReservationComplete =
    dataSteps.internship.name !== '' &&
    dataSteps.station !== '' &&
    dataSteps.destiny !== '' &&
    dataSteps.date !== '' &&
    dataSteps.hotel.name !== ''

  // Hook para restaurar datos de reserva desde URL después del login
  useReservationRestore((restoredData) => {
    let hasDataToRestore = false

    if (restoredData.internship?.id) {
      handleSaveOption({
        step: 'internship',
        option: {
          id: restoredData.internship.id,
          name_es: restoredData.internship.name,
          name_en: restoredData.internship.name
        }
      })
      hasDataToRestore = true
    }

    if (restoredData.date) {
      handleSaveOption({
        step: 'date',
        option: { name: restoredData.date }
      })
      hasDataToRestore = true
    }

    if (restoredData.hotel?.id) {
      handleSaveOption({
        step: 'hotel',
        option: {
          id: restoredData.hotel.id,
          name_es: restoredData.hotel.name,
          name_en: restoredData.hotel.name,
          price: restoredData.hotel.price,
          stay_id: restoredData.hotel.stay_id ?? 0
        }
      })
      hasDataToRestore = true
    }

    // Si se restauraron datos, abrir automáticamente el modal de pago
    if (hasDataToRestore) {
      setTimeout(() => {
        openPaymentModal()
      }, 500) // Pequeño delay para asegurar que los datos se actualicen
    }
  })

  const dispatch = useDispatch<AppDispatch>() // Dispatch tipado para aceptar thunks

  // Hook useReserve que obtiene datos de internships, rooms y lógica de negocio
  const { internships, rooms, findStay, internshipsLoading, internshipsError } =
    useReserve({ dataSteps })

  // Efecto para actualizar la información del hospedaje cuando cambia la selección
  useEffect(() => {
    if (dataSteps.hotel.id) {
      const newStay = findStay(dataSteps.hotel.stay_id!) //dataSteps.hotel.id
      if (newStay) {
        setStay(newStay)
      }
    }
  }, [dataSteps.hotel.id, findStay])

  // Efecto para cargar internships al montar el componente
  useEffect(() => {
    dispatch(getInternship())
  }, [dispatch])

  // Mostrar skeleton mientras cargan los internships
  if (internshipsLoading) {
    return <PageSkeleton showHero={false} sectionsCount={2} />
  }

  // RENDERIZADO DEL COMPONENTE
  return (
    // Contenedor principal con fondo condicional
    <div className={`flex sm:flex-col sm:w-full font-Montserrat`}>
      <button
        onClick={() => setHelpModal(true)}
        className="fixed right-10 bottom-10 z-10 bg-tahiti rounded-full rounded-br-none p-2"
      >
        <Call />
      </button>
      <div
        className="flex xl:w-11/12 mt-[70px] sm:mt-[45px] md:mt-[45px] lg:mt-[45px] mx-auto
          sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse"
      >
        <div
          className="w-[392px] sm:w-11/12 md:w-10/12 lg:w-10/12 mx-auto
            justify-center sm:mb-14 md:mb-14 lg:mb-14 bg-white rounded-[50px]
            rounded-bl-none h-fit py-[26px] sticky top-6 mb-12"
        >
          <h2
            className="text-[30px] xl:text-[30px] 2xl:text-[40px] w-[80%] mx-auto font-bold
              leading-[35px] xl:leading-[35px] 2xl:leading-[50px] text-primary-blue"
          >
            {t('cardBooking.title')}
          </h2>
          {/* RESUMEN DE LA RESERVA */}
          <div className="flex flex-col w-[80%] mx-auto mt-[25px]">
            {/* PASANTÍA SELECCIONADA */}
            <Span state={steps.internship}>
              <p>
                {t('cardBooking.titleInternship')}{' '}
                {/* "Pasantía:" o "Internship:" */}
                <span className="font-bold ms-1">
                  {dataSteps.internship.name}{' '}
                  {/* Nombre de la pasantía seleccionada */}
                </span>
              </p>
            </Span>

            {/* PAÍS/DESTINO DERIVADO DE LA PASANTÍA */}
            <Span state={steps.internship}>
              <p>
                {t('cardBooking.titleCountry')} {/* "País:" o "Country:" */}
                <span className="font-bold ms-1">{dataSteps.destiny}</span>{' '}
                {/* País de la pasantía */}
              </p>
            </Span>

            {/* ESTACIÓN BIOLÓGICA DERIVADA DE LA PASANTÍA */}
            <Span state={steps.internship}>
              <p>
                {t('cardBooking.titleStation')} {/* "Estación:" o "Station:" */}
                <span className="font-bold ms-1">{dataSteps.station}</span>{' '}
                {/* Estación biológica */}
              </p>
            </Span>

            {/* FECHA SELECCIONADA */}
            <Span state={steps.date}>
              <p>
                {t('cardBooking.titleDate')} {/* "Fecha:" o "Date:" */}
                <span className="font-bold ms-1">{dataSteps.date}</span>{' '}
                {/* Rango de fechas */}
              </p>
            </Span>

            {/* HOSPEDAJE SELECCIONADO */}
            <Span state={steps.hotel}>
              <p>
                {t('cardBooking.titleHotel')} {/* "Hospedaje:" o "Hotel:" */}
                <span className="font-bold ms-1">
                  {dataSteps.hotel.name}
                </span>{' '}
                {/* Nombre del hotel */}
              </p>
            </Span>

            {/* PRECIO TOTAL - Solo se muestra si hay precio */}
            <p
              className={`text-base align-middle font-semibold mb-7 mt-5 flex ml-4
                ${dataSteps.hotel.price ? '' : 'opacity-30'}`}
            >
              {t('cardBooking.titleTotal')} {dataSteps.hotel.price}{' '}
              {/* "Total: $XXX" */}
            </p>

            <div
              className={`
                ${
                  dataSteps.internship.name !== '' &&
                  dataSteps.station !== '' &&
                  dataSteps.destiny !== '' &&
                  dataSteps.date !== '' &&
                  dataSteps.hotel.name !== ''
                    ? ''
                    : 'opacity-30 pointer-events-none'
                }`}
            >
              <Button
                title={
                  language === 'es' ? 'Pagar la reserva' : 'Pay the booking'
                }
                handleClick={openPaymentModal}
              />
            </div>
          </div>
        </div>

        {/* COMPLETAR RESERVA */}
        <div className="xl:w-9/12 2xl:w-[900px] w-11/12 sm:mx-auto md:mx-auto lg:mx-auto">
          <div className="xl:w-[80%] 2xl:w-[80%] w-10/12 mx-auto">
            <h1 className="text-[38px] leading-[40px] font-bold text-primary-blue">
              {t('booking.title')}
            </h1>
            <h4 className="text-primary-blue pt-3 leading-[24px] text-[16px]">
              {t('booking.subtitle')}
            </h4>

            <DiseñoMedio
              internship={steps.internship}
              handlePaypal={setIsOpenPayment}
              date={steps.date}
              hotel={steps.hotel}
              isReservationComplete={isReservationComplete}
            />

            <div
              className="max-w-full flex flex-col sm:px-6 mt-3 justify-center items-center
                sm:justify-start sm:items-start"
            >
              <div className="mb-20 sm:ml-6">
                {/* If internships failed to load, show a clear banner with retry */}
                {!internshipsLoading &&
                internships &&
                internships.length === 0 &&
                internshipsError ? (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong>
                          {language === 'es'
                            ? 'Error cargando internships'
                            : 'Error loading internships'}
                        </strong>
                        <div className="text-sm mt-1">
                          {language === 'es'
                            ? 'No fue posible obtener las internships desde el servidor. Intenta recargar.'
                            : "Couldn't fetch internships from the server. Try retrying."}
                        </div>
                      </div>
                      <div>
                        <Button
                          title={language === 'es' ? 'Reintentar' : 'Retry'}
                          handleClick={() => dispatch(getInternship())}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* PRIMERA TARJETA: INTERNSHIP */}
                <CardReservations
                  title={t('booking.internship.title')} // Título traducido (Pasantía/Internship)
                  type="internship" // Tipo de selección
                  number={'1.'} // Número de paso
                  ubication="justify-end w-full ml-[450px] sm:ml-0 sm:justify-start" // Posicionamiento responsive
                  state={steps.internship} // Siempre true (primer paso)
                  infoInternship={internships} // Lista de pasantías disponibles desde useReserve
                  onSave={
                    (option: any) =>
                      handleSaveOption({ option, step: 'internship' }) // Callback que guarda la selección
                  }
                />

                {/* SEGUNDA TARJETA: FECHA */}
                <CardReservations
                  title={t('booking.date.title')} // Título traducido (Fecha/Date)
                  type="date" // Tipo de selección
                  number={'2.'} // Número de paso
                  ubication="justify-start" // Posicionamiento
                  state={steps.date} // Se habilita después de seleccionar internship
                  is15Days={is15Days} // Estado de duración (15 días vs 1 mes)
                  setIs15Days={setIs15Days} // Setter para cambiar duración
                  onSave={
                    (option: any) => handleSaveOption({ option, step: 'date' }) // Callback que guarda la fecha
                  }
                />

                {/* TERCERA TARJETA: HOSPEDAJE */}
                <CardReservations
                  title={language === 'es' ? 'Hospedaje' : 'Hotel'} // Título según idioma
                  type="hotel" // Tipo de selección
                  number={'3.'} // Número de paso
                  ubication="justify-end w-full ml-[450px] sm:ml-0 sm:justify-start" // Posicionamiento responsive
                  state={steps.hotel} // Se habilita después de seleccionar fecha
                  infoHotel={rooms} // Lista de habitaciones/hoteles disponibles desde useReserve
                  onSave={
                    (option: any) => handleSaveOption({ option, step: 'hotel' }) // Callback que guarda el hospedaje
                  }
                />
              </div>

              <div
                className={`mx-auto
                    sm:mx-0 sm:mb-14 sm:-ms-8 sm:mt-7
                    mb-20 md:-mt-[107px]
                    lg:-mt-[110px]
                    xl:-mt-[107px]
                  ${
                    dataSteps.internship.name !== '' &&
                    dataSteps.station !== '' &&
                    dataSteps.destiny !== '' &&
                    dataSteps.date !== '' &&
                    dataSteps.hotel.name !== ''
                      ? ''
                      : 'opacity-30 pointer-events-none'
                  }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modales */}
      <AuthModal
        isOpen={isOpenAuth}
        onClose={closeAuthModal}
        onLoginSuccess={handleLoginSuccess}
      />

      {isOpenPayment && (
        <PaypalModal
          isOpen={isOpenPayment}
          onClose={closePaymentModal}
          hotel={dataSteps.hotel}
          dates={dataSteps.date}
          internship={dataSteps.internship.name}
          station={dataSteps.station}
          country={dataSteps.destiny}
          intershipId={+dataSteps.internship.id}
          stayId={+(stay?.id || 0)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
      {
        <IncidenciaModal
          isOpen={helpModal}
          onClose={() => setHelpModal(false)}
        />
      }
    </div>
  )
}
