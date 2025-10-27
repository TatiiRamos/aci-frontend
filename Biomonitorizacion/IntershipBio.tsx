import { useTranslation } from 'react-i18next'
import Button from '../../components/Buttons/Button'
import OurInternshipsCard from '../Stations/OurInternships/OurInternshipsCard'

interface InternshipBioProps {
  name: string | undefined
  description: string | undefined
  image: string | undefined
}

const text =
  'Mediante nuestro Internship en Biomonitorización desarrollarás habilidades y capacidades que no sabías que tenías. Te divertirás realizando talleres prácticos y realizando visitas instructivas a diferentes lugares. Te ofrecemos la oportunidad de ser parte de este emocionante proyecto en el que no solo podrás estar en contacto con fundamentos teóricos sino también prácticos que te ayudarán a formarte de la mejor manera en la biodiversidad ¡Reserva ahora mismo!'

const InternshipBio: React.FC<InternshipBioProps> = ({
  name,
  description,
  image
}) => {
  const { t } = useTranslation('bioInternship')

  return (
    <section className="flex justify-between mx-32 my-20 shadow-lg shadow-primary-blue rounded-lg sm:flex-col md:flex-col lg:mx-16 xl:mx-24 sm:mx-8 md:mx-10">
      <div className="flex flex-col mx-4 max-h-[500px]">
        <div className="flex text-3xl justify-start my-4 mx-4 lg:my-2 sm:my-1 sm:text-2xl">
          <h1>{name}</h1>
        </div>
        <div className="flex flex-col justify-start mx-4 my-6 max-w-[600px] lg:my-0 lg:text-base sm:text-base sm:my-1">
          <p className="[text-wrap:balance] mb-2 sm:mb-1">{description}</p>
        </div>
        <div className="flex m-4 mb-6 gap-4 sm:m-2">
          <Button title={t('buttonBookNow')} />
          <Button
            title={t('buttonExploreMore')}
            bgColor="white"
            isOutlined={true}
          />
        </div>
      </div>
      <div
        className="flex h-auto min-w-[300px] rounded-lg
            sm:min-w-[100px]
            lg:min-w-[190px]
            xl:min-w-[220px] "
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default InternshipBio
