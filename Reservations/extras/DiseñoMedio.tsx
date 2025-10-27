import Circle from './Circle'
import Linea from './Linea'
import Button from '../../../components/Buttons/Button'
import { TranslationContext } from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { TooltipInternship } from './Tooltip'

interface DiseñoProps {
  internship: boolean
  date: boolean
  hotel: boolean
  handlePaypal: () => void
  isReservationComplete: boolean
}
export const DiseñoMedio: React.FC<DiseñoProps> = ({
  internship,
  handlePaypal,
  date,
  hotel,
  isReservationComplete
}) => {
  const { language } = useContext(TranslationContext)

  return (
    <div className="relative">
      <Linea />
      <div className="relative mx-12 text-primary-green z-20 grid">
        <div className="relative pb-12">
          <div className="sticky top-0">
            {/* Circulos */}
            <span
              className={`top-[100px] right-[50%]
                left-[48.2%] sm:-left-[47px] sm:-mt-[60px] md:left-[47.3%] lg:left-[47.6%] xl:left-[47.6%]
                absolute rounded-full text-6xl
              ${internship ? '' : 'opacity-50'}`}
            >
              <Circle />
            </span>
            <span
              className={`top-[350px] right-[50%] 
                sm:-left-[47px] left-[48.2%] sm:-mt-[55px] md:left-[47.3%] lg:left-[47.6%] xl:left-[47.6%]
                absolute rounded-full text-6xl
                ${date ? '' : 'opacity-30'}`}
            >
              <Circle />
            </span>
            {date && !hotel && !isReservationComplete && (
              <TooltipInternship
                position="top-[315px] right-[50%] 
                 left-[55%]"
                arrowPosition="left"
                titleEs="Selecciona la fecha de la internship"
                titleEn="Select the internship date"
              />
            )}

            <span
              className={`top-[600px] right-[50%] 
                sm:-left-[47px] left-[48.2%] sm:-mt-[45px] md:left-[47.3%] lg:left-[47.6%] xl:left-[47.6%]
                absolute rounded-full text-6xl
                ${hotel ? '' : 'opacity-30'}`}
            >
              <Circle />
            </span>
            {hotel && !isReservationComplete && (
              <TooltipInternship
                position="top-[575px] right-[50%] -left-[4%]"
                arrowPosition="right"
                titleEs="Selecciona tu hospedaje"
                titleEn="Select your accommodation"
              />
            )}
            <div
              className={`w-fit mx-auto absolute left-0 right-0 top-[720px] sm:-left-[150px] ${isReservationComplete ? '' : 'opacity-30 pointer-events-none'}`}
            >
              <Button
                title={
                  language === 'es' ? 'Pagar la reserva' : 'Pay the booking'
                }
                fontSize="text-[16px] leading-[20px]"
                handleClick={handlePaypal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
