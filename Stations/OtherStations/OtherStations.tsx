import StationCard from './StationCard'
import { StationInterface } from '../../../types/interfaceStation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/Store/store'
import { getStations } from '../../../redux/Slices/stationSlice'

interface Props {
  title: string
  background: any
  country?: string
  isHome?: boolean
}

const OtherStations: React.FC<Props> = ({
  title,
  background,
  country,
  isHome
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [filteredStations, setFilteredStations] = React.useState<
    StationInterface[]
  >([])

  const allStations = useSelector((state: RootState) => state.stations.stations)

  useEffect(() => {
    dispatch(getStations())
  }, [])

  useEffect(() => {
    if (allStations.length > 0 && country) {
      const filtered = allStations.filter(
        (station) => station.country_id === country
      )
      setFilteredStations(filtered)
    }
  }, [allStations, country])

  return (
    <section
      data-aos="fade-up"
      className="relative flex flex-col items-center pt-10 sm:pb-8 justify-center font-Montserrat
        text-primary-blue md:min-h-full sm:min-h-full overflow-hidden px-4 
        sm:bg-gradient-to-t sm:from-[#d3dbb0] sm:to-white sm:to-70%"
    >
      <img src={background} className="absolute bottom-0 sm:hidden" />
      <h2 className="text-[38px] sm:text-[30px] text-center md:text-3xl z-30 font-bold mb-10">
        {title}
      </h2>
      <div
        data-aos="fade-zoom-in"
        data-aos-delay="300"
        // className="grid grid-cols-2 gap-6
        // md:grid-cols-1 sm:grid-cols-1 mb-[19%]"
        className="flex flex-wrap gap-6 mb-[19%]"
      >
        {isHome
          ? allStations?.map((station: StationInterface) => (
              <StationCard key={station?.id} station={station} />
            ))
          : filteredStations?.map((station: StationInterface) => (
              <StationCard key={station?.id} station={station} />
            ))}
      </div>
    </section>
  )
}

export default OtherStations
