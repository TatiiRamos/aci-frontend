import React from 'react'
import { Link } from 'react-router-dom'
import {
  IconIg,
  IconFacebook,
  IconLinkedin,
  IconWorld,
  IconYT
} from '../../../components/icons/icons'

interface SocialMediaLink {
  icon: React.ComponentType
  name: string
  key: keyof Noticia['articlesocialmedia']
}

const LinksRedes: SocialMediaLink[] = [
  {
    icon: IconWorld,
    name: 'web',
    key: 'web'
  },
  {
    icon: IconIg,
    name: 'Instagram',
    key: 'instagram'
  },
  {
    icon: IconFacebook,
    name: 'Facebook',
    key: 'facebook'
  },
  {
    icon: IconLinkedin,
    name: 'Linkedin',
    key: 'linkedin'
  },
  {
    icon: IconYT,
    name: 'Youtube',
    key: 'youtube'
  }
]

interface Noticia {
  id: number
  bannerUrl: string
  title: string
  title1: string
  title2: string
  shortdescription: string
  bannerdescription: string
  bannerAlt: string
  category: string
  date: string
  articlesocialmedia: {
    web?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
    youtube?: string
  }
  media: {
    name?: string
    logoUrl?: string
    logoAlt?: string
  }
}

interface CardsNoticiasProps {
  articles: Noticia[]
}

const CollageNoticias: React.FC<CardsNoticiasProps> = ({
  articles = []
}: CardsNoticiasProps) => {
  return (
    <article className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[25px] mx-10 sm:mx-6 md:mx-6 mb-3">
      {articles.map((noticia: Noticia) => (
        <Link
          key={noticia.id}
          to={`/community/${noticia.title1}`}
          className="mb-[85px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px]"
        >
          <article
            className="flex flex-col shadow-lg max-h-[715px] h-full 
              shadow-black/20 max-w-96 rounded-[30px] overflow-hidden rounded-bl-none"
          >
            <header className="relative">
              <img
                className="w-full h-[280px] object-cover"
                src={noticia.bannerUrl}
                alt={noticia.bannerAlt || 'News Banner'}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 bg-opacity-90 p-2 text-left px-[16px]
                  ${
                    noticia.category === 'Internacionalización' ||
                    noticia.category === 'Internationalization'
                      ? 'bg-[#06BBCEBF]'
                      : noticia.category === 'Diario Digital' ||
                          noticia.category === 'Digital Newspaper'
                        ? 'bg-[#CBD150D9]'
                        : noticia.category === 'Radio'
                          ? 'bg-[#FFCA3CBF]'
                          : noticia.category === 'Redes' ||
                              noticia.category === 'Social Media'
                            ? 'bg-[#E37A8CD9]'
                            : ''
                  } 
                `}
              >
                <h5 className="text-[14px] leading-[20px] text-primary-blue">
                  {noticia.category}
                </h5>
              </div>
            </header>
            <section className="flex flex-col mx-auto px-[16px] h-full">
              <div className="flex flex-1 flex-col mt-[25px]">
                <h3 className="leading-[20px] text-[16px] font-[800] text-primary-blue">
                  {noticia.title}
                </h3>
                <p className="text-[18px] leading-[24px] mt-[6px] text-primary-blue">
                  {noticia.media.name}
                </p>
                <p className="text-[14px] leading-[20px] mt-[37px] text-primary-blue">
                  {noticia.shortdescription}
                </p>
              </div>
              <footer className="flex justify-between my-[18px] content-end items-center">
                <div className="flex items-center gap-[16px]">
                  {LinksRedes.map((red: SocialMediaLink, index) => {
                    const socialLink = noticia.articlesocialmedia[red.key]
                    return socialLink ? (
                      <Link
                        key={index}
                        to={socialLink}
                        target="_blank"
                        aria-label={red.name}
                        className="bg-primary-blue h-[30px] w-[30px] text-white font-semibold rounded-br-none
                          transition duration-300 hover:bg-primary-blue/55 rounded-full p-[7px]"
                      >
                        <red.icon />
                      </Link>
                    ) : null
                  })}
                </div>
                <time
                  dateTime={noticia.date}
                  className="text-[14px] leading-[20px] me-[14px]"
                >
                  {noticia.date}
                </time>
              </footer>
            </section>
          </article>
        </Link>
      ))}
    </article>
  )
}

export default React.memo(CollageNoticias)
