import { useState } from 'react'
import BigButton from '../../../../components/Buttons/BigButton'

interface InfoProps {
  items: string[]
  text1: string[]
  text2: string[]
  text3: string[]
  text4: string[]
  text5: string[]
}

const Menu5: React.FC<InfoProps> = ({
  items,
  text1,
  text2,
  text3,
  text4,
  text5
}) => {
  return (
    <div
      data-aos="zoom-in"
      className="font-Montserrat w-11/12 2xl:w-full sm:mx-auto md:mx-auto sm:mt-10 md:mt-10"
    >
      {/* Impacto 1 */}
      <ul className="py-[16px] list-disc">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-primary-blue font-[700] text-[21px] ml-14 mb-3"
          >
            {item}
            <ul
              className="text-primary-blue list-circle font-[400] text-[17px]"
              style={{ listStyleType: 'circle' }}
            >
              {index === 0 &&
                text1.map((text, subIndex) => (
                  <li key={subIndex} className="ml-6">
                    {text}
                  </li>
                ))}
              {index === 1 &&
                text2.map((text, subIndex) => (
                  <li key={subIndex} className="ml-6">
                    {text}
                  </li>
                ))}
              {index === 2 &&
                text3.map((text, subIndex) => (
                  <li key={subIndex} className="ml-6">
                    {text}
                  </li>
                ))}
              {index === 3 &&
                text4.map((text, subIndex) => (
                  <li key={subIndex} className="ml-6">
                    {text}
                  </li>
                ))}
              {index === 4 &&
                text5.map((text, subIndex) => (
                  <li key={subIndex} className="ml-6">
                    {text}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu5
