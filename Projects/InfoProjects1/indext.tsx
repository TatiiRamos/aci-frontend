import { useEffect } from 'react'
import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'

export const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project="project1"
        url="biodiversity"
        labelUrl="Biodiversidad"
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/BIODIVERSIDAD/BIO-AGUADAS/background.jpg"
      />
      <InfoProjects project="project1" isFrame={false} />
    </>
  )
}
