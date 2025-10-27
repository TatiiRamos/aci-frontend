import BannerCommunity from './components/BannerCommunity'
import FilterCommunity from './components/FiltersCommunity'

interface CommunityProps {}

const Community: React.FC<CommunityProps> = () => {
  return (
    <article className="font-Montserrat">
      <BannerCommunity />
      <FilterCommunity />
    </article>
  )
}
export default Community
