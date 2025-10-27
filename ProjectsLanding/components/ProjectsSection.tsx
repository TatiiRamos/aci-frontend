import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useContext } from 'react'
import Button from '../../../components/Buttons/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import { useFilter } from '../../../Context/FilterProjectsContext'

interface ProjectsSectionProps {
  indexOfProject: number
  section: string
  url: any
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  indexOfProject,
  section
}) => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const { filter } = useFilter()

  const project =
    content?.projectLan[language][section].projects[indexOfProject]
  const shouldDisplay = filter === 'all' || project?.status === filter

  if (!shouldDisplay) return null
  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col text-primary-blue gap-6 my-2
        py-6 md:text-center sm:text-center
        ${indexOfProject % 2 !== 0 ? 'border-y-2 border-primary-green' : ''}`}
    >
      {/* TITULO */}
      <h3
        className="font-bold text-[20px] xl:text-[24px] 2xl:text-[24px]
          flex md:justify-center sm:justify-center"
      >
        {content?.projectLan[language][section].projects[indexOfProject].title}
        {content?.projectLan[language][section].projects[indexOfProject].title2}
      </h3>
      <div className="flex gap-6 md:flex-col md:items-start md:px-2 sm:flex-col sm:items-start">
        {/* IMAGEN */}
        <img
          className={`bg-gray rounded-[50px] rounded-bl-none
          w-full h-[300px] sm:h-[250px]
          2xl:w-[500px] 2xl:h-[330px]
          xl:w-[400px] xl:h-[320px]
          lg:w-[350px] lg:h-[450px]
          object-cover ${
            section === 'bioSection' && indexOfProject === 1
              ? 'object-right'
              : ''
          }`}
          alt="project image"
          src={
            content?.projectLan[language][section].projects[indexOfProject]
              .image
          }
        />
        <div className="flex items-start md:items-center sm:items-center flex-col gap-4">
          {/* SUBTITULO */}
          <p className=" font-bold text-[16px] xl:text-[20px] 2xl:text-[20px]">
            {
              content?.projectLan[language][section].projects[indexOfProject]
                .subtitle
            }
          </p>
          {/* DESCRIPCIÓN */}
          <p className="text-[16px] text-left">
            {
              content?.projectLan[language][section].projects[indexOfProject]
                .description
            }
          </p>
          {/* BOTÓN */}
          <Link
            to={
              content?.projectLan[language][section].projects[indexOfProject]
                .url
            }
          >
            <Button
              title={content?.projectLan[language].readMore}
              fontSize="text-[16px]"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
