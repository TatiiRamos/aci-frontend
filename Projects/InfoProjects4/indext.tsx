import { HeroProjects } from '../components/HeroProjects'
import { InfoProjects } from '../components/InfoProjects'
import { useEffect } from 'react'

export const Projects4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroProjects
        project="project4"
        url="cultural"
        labelUrl="Cultural"
        img="https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/CULTURALES/TEJEDORA/background.jpg"
      />
      <InfoProjects project="project4" isFrame={true} />
    </>
  )
}
