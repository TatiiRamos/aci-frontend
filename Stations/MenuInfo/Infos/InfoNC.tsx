import React from 'react'
import { useTranslation } from 'react-i18next'
import Menu1 from '../Menus/Menu1'
import Menu2 from '../Menus/Menu2'
import Menu3 from '../Menus/Menu3'
import Menu4 from '../Menus/Menu4'
import Menu5 from '../Menus/Menu5'
import Menu6 from '../Menus/Menu6'
import Menu7 from '../Menus/Menu7'

interface InfoProps {
  option: string
}

const InfoNC: React.FC<InfoProps> = ({ option }) => {
  const { t } = useTranslation('menuInfo')

  return (
    <div className="w-4/6 h-full sm:w-full md:w-full">
      {/*--------------- Primera seccion del menu lateral "Bienvenida" -----------------*/}

      {option === 'opcion1' && (
        <Menu1
          title={t('estacion1.seccion1.titulo')}
          subTitle1={t('estacion1.seccion1.subTitulo1')}
          subTitle2={t('estacion1.seccion1.subTitulo2')}
          posterVideo="https://r2.awaqinternship.org/Estaciones/OtrasEstaciones/img1.jpg"
          galeriaImg1="https://r2.awaqinternship.org/Estaciones/OtrasEstaciones/img1.jpg"
          galeriaImg2="https://r2.awaqinternship.org/Estaciones/OtrasEstaciones/img2.jpg"
          galeriaImg3="https://r2.awaqinternship.org/Estaciones/OtrasEstaciones/img3.jpg"
          explanatoryTitle1={t('estacion1.seccion1.tituloExplicativo1')}
          explanatoryText1={t('estacion1.seccion1.txtExplicativo1')}
          explanatoryTitle2={t('estacion1.seccion1.tituloExplicativo2')}
          explanatoryText2={t('estacion1.seccion1.txtExplicativo2')}
        />
      )}

      {/*--------------- Segunda seccion del menu lateral "Misión" -----------------*/}

      {option === 'opcion2' && (
        <Menu2
          title={t('estacion1.seccion2.titulo')}
          MissionTitle1={t('estacion1.seccion2.mision1Titulo')}
          MissionTitle2={t('estacion1.seccion2.mision2Titulo')}
          MissionInfo1={t('estacion1.seccion2.mision1Info')}
          MissionInfo2={t('estacion1.seccion2.mision2Info')}
        />
      )}

      {/*--------------- Tercera seccion del menu lateral "Caracteristicas" -----------------*/}

      {option === 'opcion3' && (
        <Menu3
          title={t('estacion1.seccion3.titulo')}
          text={t('estacion1.seccion3.texto')}
          subTitle={t('estacion1.seccion3.subTitulo')}
          item1={t('estacion1.seccion3.item1')}
          item2={t('estacion1.seccion3.item2')}
          item3={t('estacion1.seccion3.item3')}
          item4={t('estacion1.seccion3.item4')}
          item1text={t('estacion1.seccion3.item1text')}
          item2text={t('estacion1.seccion3.item2text')}
          item3text={t('estacion1.seccion3.item3text')}
          item4text={t('estacion1.seccion3.item4text')}
        />
      )}

      {/*--------------- Cuarta seccion del menu lateral "Ubicación Geográfica" -----------------*/}

      {option === 'opcion4' && (
        <Menu4
          titlePais={t('estacion1.seccion4.tituloPais')}
          titleRegion={t('estacion1.seccion4.tituloRegion')}
          titleMunicipio={t('estacion1.seccion4.tituloMunicipio')}
          infoPais={t('estacion1.seccion4.infoPais')}
          infoRegion={t('estacion1.seccion4.infoRegion')}
          InfoMunicipio={t('estacion1.seccion4.infoMunicipio')}
          titleDescriptivo={t('estacion1.seccion4.tituloDescriptivo')}
          textoDescriptivo={t('estacion1.seccion4.textoDescriptivo')}
          imgMapa="https://r2.awaqinternship.org/Estaciones/OtrasEstaciones/MapaNC.png"
        />
      )}

      {/*--------------- Quinta seccion del menu lateral "Actividades Disponibles" -----------------*/}

      {option === 'opcion5' && (
        <Menu5
          items={
            t('estacion1.seccion5.items', { returnObjects: true }) as string[]
          }
          text1={[t('estacion1.seccion5.text1')]}
          text2={[t('estacion1.seccion5.text2')]}
          text3={[t('estacion1.seccion5.text3')]}
          text4={[t('estacion1.seccion5.text4')]}
          text5={[t('estacion1.seccion5.text5')]}
        />
      )}

      {/*--------------- Sexta seccion del menu lateral "Impacto Ambiental y Social" -----------------*/}

      {option === 'opcion6' && (
        <Menu6
          item1={t('estacion1.seccion6.item1')}
          item2={t('estacion1.seccion6.item2')}
          subItem1={t('estacion1.seccion6.subItem1')}
          subItem2={t('estacion1.seccion6.subItem2')}
          subItem3={t('estacion1.seccion6.subItem3')}
          subItem4={t('estacion1.seccion6.subItem4')}
          subItem5={t('estacion1.seccion6.subItem5')}
          subItem6={t('estacion1.seccion6.subItem6')}
          text1={t('estacion1.seccion6.text1')}
          text2={t('estacion1.seccion6.text2')}
          text3={t('estacion1.seccion6.text3')}
          text4={t('estacion1.seccion6.text4')}
          text5={t('estacion1.seccion6.text5')}
          text6={t('estacion1.seccion6.text6')}
        />
      )}

      {/*--------------- septima seccion del menu lateral "Director de la Estación" -----------------*/}

      {option === 'opcion7' && (
        <Menu7
          title1={t('estacion1.seccion7.titulo1')}
          title2={t('estacion1.seccion7.titulo2')}
          title3={t('estacion1.seccion7.titulo3')}
          title4={t('estacion1.seccion7.titulo4')}
          infoAbout1={t('estacion1.seccion7.texto1Info')}
          infoAbout2={t('estacion1.seccion7.texto2Info')}
          nameContact={t('estacion1.seccion7.nombreContacto')}
          titleContact={t('estacion1.seccion7.cargoContacto')}
          btnContact={t('btnContacto')}
          posterVideo="https://r2.awaqinternship.org/Internships/poster-video2.jpg"
          image="https://r2.awaqinternship.org/Internships/EBNC/FotoAngelicaLozano.png"
        />
      )}
    </div>
  )
}

export default InfoNC
