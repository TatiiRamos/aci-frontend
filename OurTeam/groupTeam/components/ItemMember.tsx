import { FaLinkedin } from 'react-icons/fa'

export const ItemMember = ({ img, name, position, linkedin }: any) => {
  return (
    <div className="flex xl:min-w-[17rem] xl:max-w-[17rem] min-w-[19rem] max-w-[19rem] items-center justify-start flex-col my-2">
      <div className="px-3">
        <div className="text-center flex items-center justify-center flex-col">
          {/* Imagen */}
          <img
            className="w-[14rem] h-[14rem] relative top-6"
            src={img}
            alt={name}
          />
          {/* Nombre */}
          <p
            className="text-[20px] font-bold bg-primary-green-40 px-[15px] py-[4px] 
              text-center z-10 rounded-full"
          >
            {name}
          </p>
          {/* Titulo */}
          <p
            className="text-[16px] 
                font-semibold text-black bg-primary-green px-[10px] py-[8px] rounded-full"
          >
            {position}
          </p>
          {/* Linkedin */}
          {linkedin ? (
            <a href={linkedin} target="_blank" className="flex justify-center">
              <FaLinkedin className="w-[2rem] h-[3rem] text-primary-blue" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
