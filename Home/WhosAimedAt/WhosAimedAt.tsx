import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationContext } from '../../../Context/TranslationContext'
import InfoInternshipCard from '../../../components/InternshipACI/InfoInternshipCard'

const WhosAimedAt: React.FC = () => {
  const { t } = useTranslation('home')
  const { language } = useContext(TranslationContext)

  return (
    <section
      data-aos="fade-up"
      className="flex flex-col justify-center items-center w-full relative pb-36
        bg-gradient-to-b from-white from-40% to-[#d6eeee]"
    >
      <h1
        className="text-[38px] sm:text-[30px] font-Montserrat text-center sm:w-screen sm:pb-12 
          font-bold pb-6 2xl:py-10"
      >
        {t('whosAimedAt.title')}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 pb-10 relative z-50">
        <InfoInternshipCard
          head={t('whosAimedAt.students.title')}
          description={t('whosAimedAt.students.description')}
          image="https://r2.awaqinternship.org/Estaciones/InfoInternship/ManAndPassport.png"
          rounded="rounded-bl-none"
          shadow="shadow-2xl"
          title="Ver Internships"
          to="/internships"
        />
        <InfoInternshipCard
          head={t('whosAimedAt.generalPublic.title')}
          description={t('whosAimedAt.generalPublic.description')}
          image="https://r2.awaqinternship.org/Home/women.png"
          rounded="rounded-bl-none"
          shadow="shadow-2xl"
          title="Ver Internships"
          to="/internships"
        />
        <InfoInternshipCard
          head={t('whosAimedAt.companies.title')}
          description={t('whosAimedAt.companies.description')}
          image="https://r2.awaqinternship.org/Home/scientist.png"
          bg="bg-primary-blue"
          rounded="rounded-bl-none"
          shadow="shadow-2xl"
          title="Llenar Formulario"
          to="/empresas"
        />
      </div>
      <img
        src="https://r2.awaqinternship.org/Home/background-whoisaimedat.png"
        alt="Hills"
        className="absolute z-0 -bottom-20 lg:top-[10%] 
          w-screen md:hidden sm:hidden lg:hidden"
      />
      <img
        src="https://r2.awaqinternship.org/Home/Ellipse-whoisaimedat.png"
        className="relative top-[235px] w-screen"
      />
    </section>
  )
}

export default WhosAimedAt
