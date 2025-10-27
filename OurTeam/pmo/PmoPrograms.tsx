import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const PmoPrograms = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  return (
    <>
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        className="mx-auto relative flex justify-center items-center p-12 
          sm:my-8 md:my-24 lg:my-24 xl:mt-44 xl:mb-[-330px] 2xl:-mb-16
          w-[650px] sm:w-[330px] md:w-[550px] lg:w-[570px] xl:w-[560px]
          xl:top-[-420px] 2xl:top-[-200px] font-Montserrat"
      >
        <img
          src="https://r2.awaqinternship.org/Team/ourprograms/Vector12.png"
          className="absolute w-full"
        />

        <div className="mx-auto flex sm:p-0 rounded-full justify-center items-center relative">
          <img
            src="https://r2.awaqinternship.org/Team/ourprograms/mg%201.png"
            className="absolute sm:w-[150px]"
          />
          <img
            src="https://r2.awaqinternship.org/Team/ourprograms/Vector.png"
            className="flex sm:w-[250px] md:w-[300px] w-[350px]"
          />

          {/* LINKS PROGRAMAS */}
          <Link
            to={content?.team[language].routesEachProgram.PMProute}
            className="absolute sm:-top-[40px] -top-[60px] 
              hover:scale-[1.05] animate-pulse hover:animate-none group"
            onClick={() => localStorage.setItem('selectedProgram', 'PMP')}
          >
            {/* <img src={content?.team[language].sectionPmo.PMPimg} className="sm:w-[50px] w-[75px]" /> */}
            <p className="sm:text-[13px] text-center group-hover:font-semibold">
              {content?.team[language].pmp.teamName}
            </p>
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.pmp}
              className="sm:w-[50px] w-[75px]"
            />
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.EBAroute}
            className="absolute sm:right-3 right-2 top-3 
            hover:scale-[1.05] animate-pulse hover:animate-none group"
          >
            {/* <img src={content?.team[language].sectionPmo.EBAimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.eba}
              className="sm:w-[50px] w-[75px]"
            />
            <p className="sm:text-[13px] text-end group-hover:font-semibold">
              EBA
            </p>
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.PLANETroute}
            className="absolute sm:right-[-20px] sm:top-[100px] -right-8 top-[130px] 
            hover:scale-[1.05] animate-pulse hover:animate-none group"
          >
            {/* <img src={content?.team[language].sectionPmo.PLANETAimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.planet}
              className="sm:w-[50px] w-[75px]"
            />
            <p className="sm:text-[13px] text-center group-hover:font-semibold">
              {content?.team[language].planet.teamName}
            </p>
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.DESIGNroute}
            className="absolute sm:right-8 sm:-bottom-7 right-14 -bottom-10 
              hover:scale-[1.05] animate-pulse hover:animate-none group"
          >
            {/* <img src={content?.team[language].sectionPmo.DISEÑOimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.design}
              className="sm:w-[50px] w-[75px]"
            />
            <p className=" sm:text-[13px] text-center group-hover:font-semibold">
              {content?.team[language].design.teamName}
            </p>
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.CAMPUSroute}
            className="absolute sm:left-12 sm:-bottom-8 left-16 -bottom-9 
              hover:scale-[1.05] animate-pulse hover:animate-none group"
          >
            {/* <img src={content?.team[language].sectionPmo.CAMPUSimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.campus}
              className="sm:w-[50px] w-[75px]"
            />
            <p className="sm:text-[13px] text-center group-hover:font-semibold">
              {content?.team[language].campus.teamName}
            </p>
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.AYCroute}
            className="absolute sm:-left-4 sm:bottom-8 -left-7 bottom-14 
              hover:scale-[1.05] animate-pulse hover:animate-none group"
            onClick={() => localStorage.setItem('selectedProgram', 'AYC')}
          >
            {/* <img src={content?.team[language].sectionPmo.AYCimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.ayc}
              className="sm:w-[50px] w-[75px]"
            />
            <p className="sm:text-[13px] text-center group-hover:font-semibold">
              AYC
            </p>
          </Link>

          <Link
            to={content?.team[language].routesEachProgram.TEDIroute}
            className="absolute sm:left-1 -left-1 top-5 
              hover:scale-[1.05] animate-pulse hover:animate-none group"
          >
            {/* <img src={content?.team[language].sectionPmo.TEDIimg} className="sm:w-[50px] w-[75px]" /> */}
            <img
              src={content?.team[language].sectionPmo.programsImgNoTxt.tedi}
              className="sm:w-[50px] w-[75px]"
            />
            <p className="sm:text-[13px] text-start group-hover:font-semibold">
              {content?.team[language].tedi.teamName}
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
