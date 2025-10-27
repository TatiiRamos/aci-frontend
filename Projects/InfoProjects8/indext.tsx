import { useEffect } from 'react'
import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'

export const Projects8: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project={'project8'}
        url="biodiversity"
        labelUrl="Biodiversidad"
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/BIODIVERSIDAD/BIO-PT/pavo%20real.jpg"
      />
      <InfoProjects project="project8" />
    </>
  )
}
