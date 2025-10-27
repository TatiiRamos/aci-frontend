import { ItemMember } from './components/ItemMember'
import { TitleMember } from './components/TitleMember'

export const Directors = ({ boardOfDirectors }: any) => {
  return (
    <>
      <div data-aos="fade-up" className="py-14 mx-auto">
        <TitleMember title={boardOfDirectors?.teamName} />
        <div className="flex justify-center flex-wrap" data-aos="fade-up">
          {boardOfDirectors?.team.map(
            ({ name, position, img, linkedin }: any, index: number) => (
              <ItemMember
                key={index}
                img={img}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}
