//import FormSearch from "../../components/Form/Form";
import { HelpCenterHero } from '../../components/Heros/HelpCenterHero/Hero'
import { CallToAction } from '../../components/CallToAction/CallToAction'

/* Components */
import { CardsGuide } from './cardGuide/CardsGuide'
import { FaqContainer } from './faq/FaqContainer'

const HelpCenter = () => {
  return (
    <div className="text-primary-blue font-Montserrat-Regular sm:w-full font-Montserrat">
      <HelpCenterHero />
      {/* <FormSearch /> */}
      <CardsGuide />
      <FaqContainer />
      <CallToAction />
    </div>
  )
}

export default HelpCenter
