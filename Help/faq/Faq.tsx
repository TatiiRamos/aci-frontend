import React, { useState } from 'react'
import { FaqProps } from '../../../types/interfaceHelpCenter'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

export const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="flex flex-col m-3 sm:m-0 p-4 pb-8 border-b-2 border-primary-blue-10">
      <div className="flex items-start ">
        <dt
          className={`text-[16px] font-bold border-l-4 border-primary-blue-10 pl-2
            ${isOpen ? 'mb-2 border-l-4 border-primary-blue-60 pl-2' : ''}`}
        >
          {question}
        </dt>

        <div
          className="flex-shrink-0 ml-auto mt-1 cursor-pointer"
          onClick={handleClick}
        >
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 ml-5 bg-primary-blue-10 rounded-full p-1" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 bg-primary-blue-10 rounded-full p-1" />
          )}
        </div>
      </div>

      {isOpen && (
        <dd className="mt-2 text-[16px] pt-4 text-left">
          <p>{answer.text}</p>
          {answer.items && (
            <ul className="mt-6">
              {answer.items.map((item, index) => (
                <li key={index} className="flex mb-2">
                  <h3 className="font-semibold">
                    {item.title}
                    <span className="font-normal ms-1">{item.content}</span>
                  </h3>
                </li>
              ))}
            </ul>
          )}
          {answer.text2 && <p className="mt-6">{answer.text2}</p>}
        </dd>
      )}
    </section>
  )
}
