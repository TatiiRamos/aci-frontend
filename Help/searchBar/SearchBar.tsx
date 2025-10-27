import React, { useState } from 'react'
import { SearchProps } from '../../../types/interfaceHelpCenter'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const SearchBar: React.FC<SearchProps> = ({
  labelSearch,
  placeholderSearch
}) => {
  // Falta implementar funcionalidad de la SearchBar.
  const [input, setInput] = useState('')

  return (
    <form
      className="my-10 mx-24 flex flex-col justify-start grow-0 
        md:mx-14
        sm:mx-6
        "
    >
      <label className="text-xl text-left font-semibold mb-4">
        {labelSearch}
      </label>
      <div className="relative flex-auto ">
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          placeholder={placeholderSearch}
          className="text-[20px]  font-light bg-primary-blue-10 rounded-md py-6 sm:py-3 px-4 sm:px-2 md:py-4 rounded-br-none w-11/12 border border-primary-blue-20 focus:outline-none placeholder:text-primary-blue"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="w-20 h-20 sm:w-14 sm:h-14 md:h-16 rounded-md  rounded-br-none bg-primary-green flex items-center justify-center">
            <MagnifyingGlassIcon className="w-20 h-14 sm:w-14 sm:h-14 text-white" />
          </button>
        </div>
      </div>
    </form>
  )
}
