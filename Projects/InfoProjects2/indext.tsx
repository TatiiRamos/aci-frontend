import { useEffect } from 'react'
import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'

export const Projects2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      <HeroProjects
        project="project2"
        url=""
        labelUrl=""
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/ESTACIONES%20BIOLOGICAS/Estacion%20Biologica%20Aguadas/background.jpg"
      />
      <InfoProjects project="project2" />
    </div>
  )
}
