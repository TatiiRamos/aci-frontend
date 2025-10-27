import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuLateral from '../../../components/InternshipACI/MenuLateral'
import InfoNC from './Infos/InfoNC'

const StationNC: React.FC = () => {
  const { t } = useTranslation('menuInfo')
  const [selectedOption, setSelectedOption] = useState('opcion1')

  const handleMenuSelect = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <section className="min-w-[340px] mb-20">
      <div
        className="2xl:w-[70rem] justify-between mx-auto flex 
          sm:flex-col md:flex-col sm:mt-24"
      >
        <MenuLateral
          onSelectMenuItem={handleMenuSelect}
          selectedOption={selectedOption}
          menuItems={t('menuItems', { returnObjects: true }) as string[]}
        />
        <InfoNC option={selectedOption} />
      </div>
    </section>
  )
}

export default StationNC
