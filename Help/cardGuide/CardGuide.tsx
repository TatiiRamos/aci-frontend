import React from 'react'
import { CardGuideProps } from '../../../types/interfaceHelpCenter'
import { Link } from 'react-router-dom'
import Button from '../../../components/Buttons/Button'

export const CardGuide: React.FC<CardGuideProps> = ({
  imageUrl,
  title,
  content,
  url,
  titleButton
}) => {
  return (
    <article
      className={`max-w-[360px] h-auto shadow-lg rounded-[12px] mx-auto pb-4 bg-white z-20`}
    >
      <img
        src={imageUrl}
        className="w-[360px] h-[248px] object-cover rounded-3xl rounded-bl-none"
      />
      <div className="w-11/12 mx-auto mt-2">
        <h2 className="font-extrabold text-[20px] pt-1 pb-4">{title}</h2>
        <h2 className="mb-5 text-[16px]">{content}</h2>
        <Link to={url}>
          <Button
            title={titleButton}
            isOutlined={true}
            bgColor="bg-white"
            fontSize="text-[16px] sm:text-[16px]"
          />
        </Link>
      </div>
    </article>
  )
}
