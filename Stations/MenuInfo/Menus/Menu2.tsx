const Menu2 = ({
  title,
  MissionTitle1,
  MissionTitle2,
  MissionInfo1,
  MissionInfo2
}: any) => {
  return (
    <div
      data-aos="zoom-in"
      className="font-Montserrat mb-[63px] md:ml-5 w-11/12 sm:mx-auto 2xl:w-full sm:mt-10 md:mt-10"
    >
      {/* Titulo */}
      <h2 className="text-[30px] xl:text-[38px] 2xl:text-[38px] sm:text-center mb-[40px] font-[700] leading-[40px] text-primary-blue">
        {title}
      </h2>

      {/* Objetivo 1 */}
      <div className="py-[16px]">
        <h3 className="text-primary-blue font-[700] text-[24px] leading-[27px]">
          {MissionTitle1}
        </h3>
        <p className="text-primary-blue font-[400] text-[16px] leading-[24px] text-left">
          {MissionInfo1}
        </p>
      </div>

      {/* Objetivo 2 */}
      <div className="py-[16px]">
        <h3 className="text-primary-blue font-[700] text-[24px] leading-[27px]">
          {MissionTitle2}
        </h3>
        <p className="text-primary-blue font-[400] text-[16px] leading-[24px] text-left">
          {MissionInfo2}
        </p>
      </div>
    </div>
  )
}

export default Menu2
