import React, { useState, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'

export const InfoProjects5: React.FC = () => {
  const images = [
    'https://r2.awaqinternship.org/projects/project6/img2.jpg',
    'https://r2.awaqinternship.org/projects/project6/img3.jpg',
    'https://r2.awaqinternship.org/projects/project6/img4.jpg',
    'https://r2.awaqinternship.org/projects/project6/img5.jpg',
    'https://r2.awaqinternship.org/projects/project6/img6.jpg',
    'https://r2.awaqinternship.org/projects/project6/img7.jpg',
    'https://r2.awaqinternship.org/projects/project6/img8.jpg',
    'https://r2.awaqinternship.org/projects/project6/img9.jpg',
    'https://r2.awaqinternship.org/projects/project6/img10.jpg',
    'https://r2.awaqinternship.org/projects/project6/img11.jpg',
    'https://r2.awaqinternship.org/projects/project6/img12.jpg',
    'https://r2.awaqinternship.org/projects/project6/img13.jpg',
    'https://r2.awaqinternship.org/projects/project6/img14.jpg',
    'https://r2.awaqinternship.org/projects/project6/img15.jpg',
    'https://r2.awaqinternship.org/projects/project6/img16.jpg',
    'https://r2.awaqinternship.org/projects/project6/img17.jpg'
  ]

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const video =
    'https://somosawaqblob.blob.core.windows.net/somosawaq/proyectos/festival.mp4'

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="">
      <div className="flex justify-center my-4 relative">
        <video
          data-aos="zoom-in"
          ref={videoRef}
          className="w-[50rem] h-[30rem]"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4"
            onClick={handlePlayPause}
          >
            <FaPlay className="text-4xl" />
          </button>
        )}
      </div>
      <div className=" flex flex-wrap gap-4 justify-center items-center">
        {images.map((image, i) => (
          <img
            data-aos="zoom-in"
            key={i}
            src={image}
            className="h-[15rem] w-[25rem] object-cover my-1 hover:brightness-50 transition-all duration-1000 cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}
