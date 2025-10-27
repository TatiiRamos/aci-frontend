import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'
import { useEffect } from 'react'

export const Projects3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project="project3"
        url="technology"
        labelUrl="Tecnologia"
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/TECNOLOGICOS/CTA/background.png"
      />
      <InfoProjects project="project3" />
    </>
  )
}
