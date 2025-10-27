import { useEffect, useContext } from 'react'
import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { Link } from 'react-router-dom'

export const ProgramsBar = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)

  //Agrega la clase hidden para que se esconda el btn del programa en pantalla
  useEffect(() => {
    let actualprogram = window.location.href
    // PMP
    if (
      actualprogram.includes(content?.team[language].routesEachProgram.PMProute)
    ) {
      let PMPbtn = document.getElementById('pmpbtn')
      PMPbtn?.classList.add('hidden')
      // ARTES Y C
    } else if (
      actualprogram.includes(content?.team[language].routesEachProgram.AYCroute)
    ) {
      let AYCbtn = document.getElementById('aycbtn')
      AYCbtn?.classList.add('hidden')
      // EBA
    } else if (
      actualprogram.includes(content?.team[language].routesEachProgram.EBAroute)
    ) {
      let EBAbtn = document.getElementById('ebabtn')
      EBAbtn?.classList.add('hidden')
      // PLANETA
    } else if (
      actualprogram.includes(
        content?.team[language].routesEachProgram.PLANETroute
      )
    ) {
      let PLANETAbtn = document.getElementById('planetabtn')
      PLANETAbtn?.classList.add('hidden')
      // DISEÑO (verifica el dise porque si pongo la ñ, no funciona)
    } else if (
      actualprogram.includes(
        content?.team[language].routesEachProgram.DESIGNroute
      )
    ) {
      let DESIGNbtn = document.getElementById('designbtn')
      DESIGNbtn?.classList.add('hidden')
      //CAMPUS
    } else if (
      actualprogram.includes(
        content?.team[language].routesEachProgram.CAMPUSroute
      )
    ) {
      let CAMPUSbtn = document.getElementById('campusbtn')
      CAMPUSbtn?.classList.add('hidden')
      // TEDI
    } else if (
      actualprogram.includes(
        content?.team[language].routesEachProgram.TEDIroute
      )
    ) {
      let TEDIbtn = document.getElementById('tedibtn')
      TEDIbtn?.classList.add('hidden')
    }
  }, [])
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col items-center justify-top gap-2 w-40
        sm:w-20 sm:sticky lg:sticky md:sticky top-20 overflow-hidden text-primary-blue"
    >
      <Link
        to={content?.team[language].routesEachProgram.PMProute}
        id="pmpbtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.pmp}
          className="sm:w-[50px] w-[75px]"
        />
        <p className="font-semibold">{content?.team[language].pmp.teamName}</p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.AYCroute}
        id="aycbtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.ayc}
          className="sm:w-[50px] w-[75px]"
        />
        {/* Se coloca el acronimo  */}
        <p className="font-semibold">AYC</p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.EBAroute}
        id="ebabtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.eba}
          className="sm:w-[50px] w-[75px]"
        />
        {/* Se coloca el acronimo  */}
        <p className="font-semibold">EBA</p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.PLANETroute}
        id="planetabtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.planet}
          className="sm:w-[50px] w-[75px]"
        />
        <p className="font-semibold">
          {content?.team[language].planet.teamName}
        </p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.DESIGNroute}
        id="designbtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.design}
          className="sm:w-[50px] w-[75px]"
        />
        <p className="font-semibold">
          {content?.team[language].design.teamName}
        </p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.CAMPUSroute}
        id="campusbtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.campus}
          className="sm:w-[50px] w-[75px]"
        />
        <p className="font-semibold">
          {content?.team[language].campus.teamName}
        </p>
      </Link>
      <Link
        to={content?.team[language].routesEachProgram.TEDIroute}
        id="tedibtn"
        className="flex items-center flex-col"
      >
        <img
          src={content?.team[language].sectionPmo.programsImgNoTxt.tedi}
          className="sm:w-[50px] w-[75px]"
        />
        <p className="font-semibold">{content?.team[language].tedi.teamName}</p>
      </Link>
    </div>
  )
}
