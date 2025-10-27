import { ItemMember } from './components/ItemMember'
import { TitleMember } from './components/TitleMember'

export const Management = ({ management }: any) => {
  return (
    <>
      <div data-aos="fade-up" className="py-14 mx-auto">
        <TitleMember
          title={management?.teamName}
          description={management?.description}
        />
        <div className="flex justify-center flex-wrap" data-aos="fade-up">
          {management?.team.map(
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
