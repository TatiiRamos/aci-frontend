const HeroAboutCountry = ({ image, title }: any) => {
  return (
    <main className="text-primary-blue font-Montserrat">
      <div className="h-[350px] relative bg-black flex items-center justify-center">
        <img
          src={image}
          className="absolute object-cover w-full h-full opacity-75 object-middle"
        />
        <p className="text-5xl font-bold z-40 text-white w-full text-center">
          {title}
        </p>
      </div>
    </main>
  )
}

export default HeroAboutCountry
