import { followersData } from '@/data'
import FollowerCard from './FollowerCard'

const Followers = () => {
	return (
		<section className='grid grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-8 md:px-40 lg:grid-cols-4'>
			{followersData.map((follower) => (
				<FollowerCard key={follower.id} {...follower} />
			))}
		</section>
	)
}
export default Followers
