import {
  TranslationContext,
  useTranslation
} from '../../../Context/TranslationContext'
import { useFilter } from '../../../Context/FilterProjectsContext'
import { useContext, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

export const FilterBtn: React.FC = () => {
  const { content } = useTranslation()
  const { language } = useContext(TranslationContext)
  const { filter, changeFilter } = useFilter()
  const [showFilters, setShowFilters] = useState(false)

  const handleSort = (e: any) => {
    changeFilter(e)
    setShowFilters(!showFilters)
  }

  return (
    <div
      data-aos="fade-down"
      className="absolute rounded-sm group cursor-pointer font-bold select-none"
    >
      <span
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center justify-start gap-1 border-2 px-4 py-3 rounded-xl text-lg md:text-base sm:text-base"
      >
        {filter === 'all'
          ? content?.projectLan[language].filterBtn.all
          : filter === 'open'
            ? content?.projectLan[language].filterBtn.open
            : content?.projectLan[language].filterBtn.closed}
        {showFilters ? (
          <AiOutlineUp className="font-bold" />
        ) : (
          <AiOutlineDown className="font-bold" />
        )}
      </span>
      {showFilters ? (
        <ul className="mt-[0.5rem] rounded-xl list-none bg-gray border-2">
          <li
            onClick={() => handleSort('all')}
            className=" hover:bg-[#54823580] cursor-pointer px-2 py-1 rounded-t-xl"
            value="all"
          >
            {content?.projectLan[language].filterBtn.all}
          </li>
          <li
            onClick={() => handleSort('open')}
            className=" hover:bg-[#54823580] cursor-pointer px-2 py-1"
            value="open"
          >
            {content?.projectLan[language].filterBtn.open}
          </li>
          <li
            onClick={() => handleSort('closed')}
            className=" hover:bg-[#54823580] cursor-pointer px-2 py-1 rounded-b-xl"
            value="closed"
          >
            {content?.projectLan[language].filterBtn.closed}
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  )
}
