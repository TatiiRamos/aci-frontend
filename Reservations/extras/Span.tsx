import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

interface spanProps {
  className?: any
  children: React.ReactNode
  state: boolean
}

export const Span: React.FC<spanProps> = ({ children, className, state }) => {
  return (
    <span
      className={`text-[16px] align-middle my-2 flex ${className} ${state ? '' : 'opacity-30'}`}
    >
      <CheckIcon className="w-4 h-4 me-2 mt-[2px]" />
      {children}
    </span>
  )
}
