import { useEffect } from 'react'
import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'

export const Projects9: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project="project9"
        url="biodiversity"
        labelUrl="Biodiversidad"
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/BIODIVERSIDAD/BIOMONITORES/img15.jpg"
      />
      <InfoProjects project="project9" />
    </>
  )
}
