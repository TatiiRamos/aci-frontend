import { useEffect } from 'react'
import { HeaderTeams } from './HearedTeam'
import { MeetTeam } from './MeetTeam'
import { OurTeam } from './OurTeam'
import { Pmo } from './pmo/IndexPmo'

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col gap-[5rem]">
      <HeaderTeams />
      <MeetTeam />
      <OurTeam />
      <Pmo />
    </div>
  )
}

export default Team
