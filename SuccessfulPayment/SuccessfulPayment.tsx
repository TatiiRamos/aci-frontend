import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import successfulPaymentIcon from '../../assets/SuccessfulPayment.svg'
import { CardPaymentDetails } from '../../components/CardPaymentDetails/CardPaymentDetails'
import { useOrder } from '../../Hooks/useOrder'
import { getInternshipById } from '../../redux/Slices/IntershipSlice'
import { AppDispatch, RootState } from '../../redux/Store/store'
import PageSkeleton from '@/components/ui/PageSkeleton'

export const SuccessfulPayment = () => {
  const [reservationData, setReservationData] = useState<any>(null)
  const { t } = useTranslation('successfulPayment')
  const { orderId, intershipId } = useParams()
  const { order, orderDate } = useOrder(orderId!)
  const dispatch = useDispatch<AppDispatch>()
  const foundIntership = useSelector(
    (state: RootState) => state.internships.internship
  )
  const loading = useSelector((state: RootState) => state.internships.loading)

  useEffect(() => {
    const data = sessionStorage.getItem('reservationData')
    console.log(data)
    if (data) {
      setReservationData(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    dispatch(getInternshipById(intershipId!))
  }, [intershipId])

  if (loading) {
    return <PageSkeleton showHero={false} sectionsCount={1} />
  }

  if (!reservationData) return <div>Loading...</div>

  const { bookingResponse, hotel, dates, internship, country, station } =
    reservationData
  //const order = bookingResponse?.paymentDetails
  //const orderDate = new Date().toISOString() // o usa bookingResponse si tiene fecha
  return (
    <div className=" flex justify-center flex-col items-center ">
      <div className="flex flex-col items-center gap-3 m-10 text-center">
        <h1 className="text-4xl">{t('title')}</h1>
        {order && order.payer.email_address && (
          <span className="text-primary-blue-60">
            {t('comfirm')} {order?.payer.email_address}
          </span>
        )}
      </div>

      {order && (
        <CardPaymentDetails
          intership={internship}
          orderDate={orderDate}
          subTotal={hotel.price}
          tax="0"
          total={hotel.price}
          hotelName={hotel.name}
          internship={internship}
          country={country}
          station={station}
        />
      )}
    </div>
  )
}
