// import { useTranslation } from "../../../Context/TranslationContext";

export const InfoProjects5 = () => {
  // const { language, content } = useTranslation();
  const images = [
    'https://r2.awaqinternship.org/projects/project5/img2.jpg',
    'https://r2.awaqinternship.org/projects/project5/img3.jpg',
    'https://r2.awaqinternship.org/projects/project5/img4.jpg',
    'https://r2.awaqinternship.org/projects/project5/img5.jpg',
    'https://r2.awaqinternship.org/projects/project5/img6.jpg',
    'https://r2.awaqinternship.org/projects/project5/img7.jpg',
    'https://r2.awaqinternship.org/projects/project5/img8.jpg',
    'https://r2.awaqinternship.org/projects/project5/img9.jpg',
    'https://r2.awaqinternship.org/projects/project5/img10.jpg',
    'https://r2.awaqinternship.org/projects/project5/img11.jpg',
    'https://r2.awaqinternship.org/projects/project5/img12.jpg'
  ]
  return (
    <div className="">
      <div className=" flex justify-center my-4">
        <iframe
          data-aos="zoom-in"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAlcaldiaAguadas%2Fvideos%2F575974190795656%2F%3Fref%3Dembed_video&show_text=0&width=560"
          width="560"
          height="315"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className=" flex flex-wrap gap-4  justify-center items-center">
        {images.map((image, i) => (
          <img
            data-aos="zoom-in"
            key={i}
            src={image}
            className=" h-[15rem] w-[25rem] object-cover my-1 hover:brightness-50 transition-all duration-1000 cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}
