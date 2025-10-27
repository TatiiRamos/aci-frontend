export const TitleMember = ({ title, description }: any) => {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="2000">
      <h2 className="text-primary-blue font-bold font-Montserrat text-center sm:text-[30px] md:text-[30px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px]">
        {title}
      </h2>
      <p className="text-black w-9/12 sm:w-11/12 mx-auto text-center text-[16px] px-1">
        {description}
      </p>
    </div>
  )
}
