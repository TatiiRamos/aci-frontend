import React from 'react'

type ItemProps = {
  icon: any
  text: string
}

const Item = ({ icon, text }: ItemProps) => {
  return (
    <div className="flex text-ellipsis items-center">
      <div className="sm:hidden">{icon}</div>
      <p className="pl-2 ">{text}</p>
    </div>
  )
}

export default Item
