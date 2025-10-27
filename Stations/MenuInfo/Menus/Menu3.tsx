const Menu3 = ({
  title,
  text,
  subTitle,
  item1,
  item2,
  item3,
  item4,
  item1text,
  item2text,
  item3text,
  item4text
}: any) => {
  return (
    <div
      data-aos="zoom-in"
      className="font-Montserrat mb-[63px] md:ml-5 w-11/12 sm:mx-auto 2xl:w-full sm:mt-10 md:mt-10"
    >
      {/* Titulo */}
      <h2 className="text-[30px] xl:text-[38px] 2xl:text-[38px] sm:text-center mb-[10px] font-[800] leading-[40px] text-primary-blue">
        {title}
      </h2>

      {/* Texto Introductorio */}
      <p className="text-primary-blue font-[400] text-[16px] mb-[40px] leading-[24px] text-left">
        {text}
      </p>

      {/* Subtitulo */}
      <h2 className="text-primary-blue font-[700] text-[23px] leading-[27px]">
        {subTitle}
      </h2>
      {/* Caracteristicas */}
      <ul className="py-[16px]">
        <li className="text-primary-blue list-disc font-[700] text-[18px] ml-14 mb-3">
          {item1}
          <span className="text-primary-blue font-[400] text-[16px]">
            {item1text}
          </span>
        </li>
        <li className="text-primary-blue list-disc font-[700] text-[18px] ml-14 mb-3">
          {item2}
          <span className="text-primary-blue font-[400] text-[16px]">
            {item2text}
          </span>
        </li>
        <li className="text-primary-blue list-disc font-[700] text-[18px] ml-14 mb-3">
          {item3}
          <span className="text-primary-blue font-[400] text-[16px]">
            {item3text}
          </span>
        </li>
        <li className="text-primary-blue list-disc font-[700] text-[18px] ml-14">
          {item4}
          <span className="text-primary-blue font-[400] text-[16px]">
            {item4text}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Menu3
