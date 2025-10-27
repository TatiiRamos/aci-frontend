import { useTranslation } from '../../../Context/TranslationContext'

export const InfoProjects2 = () => {
  const { language, content } = useTranslation()
  return (
    <div>
      <div data-aos="zoom-in" className=" sm:hidden mx-40">
        <div data-aos="zoom-in" className=" flex items-center mt-10 ">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{content?.projects[language].project6.section2.spanstate}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div className=" text-center">
          {content?.projects[language].project6.section2.state}
        </div>
        <div data-aos="zoom-in" className=" flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{content?.projects[language].project6.section2.spanstart}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
          <p>{content?.projects[language].project6.section2.spanend}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div data-aos="zoom-in" className=" flex items-center my-5">
          <div className="flex-1  border-gray-300 -mr-12"></div>
          <p>{content?.projects[language].project6.section2.start}</p>
          <div className="flex-1  border-gray-300 ml-4"></div>
          <p className="">
            {content?.projects[language].project6.section2.end}
          </p>
          <div className="flex-1  border-gray-300 mr-12"></div>
        </div>
        <div data-aos="zoom-in" className=" flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{content?.projects[language].project6.section2.spancountry}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
          <p>{content?.projects[language].project6.section2.spanzone}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <div data-aos="zoom-in" className=" flex items-center my-5">
          <div className="flex-1  border-gray-300 -mr-4"></div>
          <p>{content?.projects[language].project6.section2.country}</p>
          <div className="flex-1  border-gray-300 -ml-4"></div>
          <p className="">
            {content?.projects[language].project6.section2.zone}
          </p>
          <div className="flex-1  border-gray-300 ml-4"></div>
        </div>
        <div data-aos="zoom-in" className=" mx-2">
          <div className=" flex items-center mt-10 my-5 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {
                content?.projects[language].project6.section2.objective
                  .spanobjective
              }
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div data-aos="zoom-in" className=" text-center  text-sm my-5">
            <p className=" text-sm">
              {content?.projects[language].project6.section2.objective.p1}{' '}
            </p>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.objective.p2}{' '}
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" className=" mx-2">
          <div className=" flex items-center mt-10 my-5 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {
                content?.projects[language].project6.section2.fulldescription
                  .spandescription
              }
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center flex-col flex my-5  text-sm">
            <p className=" text-sm my-4">
              {content?.projects[language].project6.section2.fulldescription.p1}{' '}
            </p>
            <p className=" text-sm my-4">
              {content?.projects[language].project6.section2.fulldescription.p2}{' '}
            </p>
            <p className=" text-sm my-4">
              {content?.projects[language].project6.section2.fulldescription.p3}{' '}
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" className=" mx-2">
          <div className=" flex items-center mt-10 my-5 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.info.spaninfo}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center flex-col flex my-5  text-sm">
            <p className=" text-sm my-4">
              {content?.projects[language].project6.section2.info.p1}{' '}
            </p>
            <p className=" text-sm my-4">
              {content?.projects[language].project6.section2.info.p2}{' '}
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{content?.projects[language].project6.section2.spanimpact}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <ul data-aos="zoom-in" className="flex justify-center my-5">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {content?.projects[language].project6.section2.impact.li1}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {content?.projects[language].project6.section2.impact.li2}
          </li>
          <li className="flex items-center  px-2 font-extrabold text-[#6A961F] sm:text-base text-lg">
            {content?.projects[language].project6.section2.impact.li3}
          </li>
        </ul>
      </div>
      <div className=" hidden sm:block">
        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.spanstate}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {content?.projects[language].project6.section2.state}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.spanstart}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {content?.projects[language].project6.section2.start}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.spanend}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {content?.projects[language].project6.section2.end}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.spancountry}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {content?.projects[language].project6.section2.country}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.spanzone}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            {content?.projects[language].project6.section2.zone}
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {
                content?.projects[language].project6.section2.objective
                  .spanobjective
              }
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center  text-sm">
            <p className=" text-sm">
              {content?.projects[language].project6.section2.objective.p1}{' '}
            </p>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.objective.p2}{' '}
            </p>
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {
                content?.projects[language].project6.section2.fulldescription
                  .spandescription
              }
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center flex  text-sm">
            <p className=" text-sm">
              {content?.projects[language].project6.section2.fulldescription.p1}{' '}
            </p>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.fulldescription.p2}{' '}
            </p>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.fulldescription.p3}{' '}
            </p>
          </div>
        </div>

        <div className=" mx-2">
          <div className=" flex items-center mt-10 ">
            <div className="flex-1 border-t border-gray-300 mr-4"></div>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.info.spaninfo}
            </p>
            <div className="flex-1 border-t border-gray-300 ml-4"></div>
          </div>
          <div className=" text-center flex  text-sm">
            <p className=" text-sm">
              {content?.projects[language].project6.section2.info.p1}{' '}
            </p>
            <p className=" text-sm">
              {content?.projects[language].project6.section2.info.p2}{' '}
            </p>
          </div>
        </div>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-300 mr-4"></div>
          <p>{content?.projects[language].project6.section2.spanimpact}</p>
          <div className="flex-1 border-t border-gray-300 ml-4"></div>
        </div>
        <ul className="flex justify-center my-5 text-center">
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {content?.projects[language].project6.section2.impact.li1}
          </li>
          <li className="flex items-center border-r-2 border-green px-2 font-extrabold text-[#6A961F] text-ss">
            {content?.projects[language].project6.section2.impact.li2}
          </li>
          <li className="flex items-center px-2 font-extrabold text-[#6A961F] text-ss">
            {content?.projects[language].project6.section2.impact.li3}
          </li>
        </ul>
      </div>
    </div>
  )
}
