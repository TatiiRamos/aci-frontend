import { useTranslation } from 'react-i18next'
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../../redux/Store/store";
// import { getCountries } from "../../redux/Slices/countrySlice";
// import CountryCard from "./countryCard";
// import { InterfaceCountry } from "../../types/interfaceCountry";
import Button from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'

const MoreInterships: React.FC = () => {
  const { t } = useTranslation('destinations')

  // const dispatch = useDispatch<AppDispatch>();
  // const allCountries = useSelector(
  //   (state: RootState) => state.countries.countries,
  // );
  // const selectedLanguage = useSelector(
  //   (state: RootState) => state.countries.languageCountries,
  // );
  // const filteredCountries = allCountries.filter(
  //   (country: InterfaceCountry) => country.language === selectedLanguage,
  // );

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, []);

  return (
    <section
      data-aos="fade-up"
      className="my-16 justify-center gap-8 flex flex-col items-center font-Montserrat text-primary-blue"
    >
      <h1
        className="
           sm:text-3xl
           md:text-3xl
           whitespace-normal max-w-3xl sm:w-10/12 text-[38px] sm:text-[30px] text-center font-bold"
      >
        {t('destinationsInter')}
      </h1>

      {/* {filteredCountries?.map((country: InterfaceCountry) => (
        <CountryCard key={country?.id} country={country} />
      ))} */}
      <div className="sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
        {/* COLOMBIA */}
        <div className="flex sm:flex-col md:mt-6 lg:mt-6 gap-[42px]">
          <div className="w-7/12 xl:w-8/12 sm:w-full m-auto">
            <h2 className="font-bold text-primary-blue sm:text-[25px] text-[38px]">
              {t('countries.colombia.name')}
            </h2>
            <p className="text-[28px] leading-[44px] font-light sm:text-[25px] text-primary-blue">
              {t('countries.colombia.subtitle')}
            </p>
            <p className="text-[16px] mb-6 mt-3">
              {t('countries.colombia.description')}
            </p>
            <Link to="/destinations/colombia">
              <Button
                title={t('countries.colombia.buttonText')}
                textColor="mx-0 sm:text-lg md:text-base lg:text-base"
                fontSize="text-[16px]"
              />
            </Link>
          </div>
          <div className="sm:w-full">
            <img
              src="https://r2.awaqinternship.org/Destinos/colombia.png"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreInterships
