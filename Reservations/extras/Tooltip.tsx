import { useContext } from 'react'
import { TranslationContext } from '../../../Context/TranslationContext'
import clsx from 'clsx'

export interface TooltipProps {
  position: string
  arrowPosition: string
  titleEs: string
  titleEn: string
}
export const TooltipInternship: React.FC<TooltipProps> = ({
  position,
  arrowPosition,
  titleEs,
  titleEn
}) => {
  const { language } = useContext(TranslationContext)
  return (
    <section className={clsx('sm:hidden md:hidden absolute w-fit', position)}>
      <div className="flex flex-row items-center justify-center gap-0">
        {arrowPosition === 'left' && (
          <span className="border-r-primary-blue border-[15px] w-0 h-0 border-l-0 border-t-transparent border-b-transparent" />
        )}
        <div className="bg-primary-blue text-white w-[300px] p-6 rounded-lg">
          {language === 'es' ? titleEs : titleEn}
        </div>
        {arrowPosition === 'right' && (
          <span className="border-l-primary-blue border-[15px] w-0 h-0 border-r-0 border-t-transparent border-b-transparent" />
        )}
      </div>
    </section>
  )
}
