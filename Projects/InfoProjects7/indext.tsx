import { useEffect } from 'react'
import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'

export const Projects7: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project="project7"
        url=""
        labelUrl=""
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/ESTACIONES%20BIOLOGICAS/Estacion%20Biologica%20Los%20Andes/background.png"
      />
      <InfoProjects project="project7" />
    </>
  )
}
