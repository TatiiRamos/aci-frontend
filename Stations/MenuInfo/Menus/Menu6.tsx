const Menu6 = ({
  item1,
  item2,
  subItem1,
  subItem2,
  subItem3,
  subItem4,
  subItem5,
  subItem6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6
}: any) => {
  return (
    <div
      data-aos="zoom-in"
      className="font-Montserrat mb-[63px] md:ml-5 w-11/12 sm:mx-auto 2xl:w-full sm:mt-10 md:mt-10"
    >
      {/* Impacto 1 */}
      <ul className="py-[16px] list-disc">
        <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
          {item1}
          <ul
            className="text-primary-blue list-circle font-[400] text-[16px]"
            style={{ listStyleType: 'circle' }}
          >
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem1}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text1}
              </span>
            </li>
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem2}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text2}
              </span>
            </li>
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem3}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text3}
              </span>
            </li>
          </ul>
        </li>

        <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
          {item2}
          <ul
            className="text-primary-blue list-circle font-[400] text-[16px]"
            style={{ listStyleType: 'circle' }}
          >
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem4}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text4}
              </span>
            </li>
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem5}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text5}
              </span>
            </li>
            <li className="text-primary-blue font-[700] text-[18px] ml-14 mb-3">
              {subItem6}
              <span className="text-primary-blue font-[400] text-[16px]">
                {text6}
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Menu6
