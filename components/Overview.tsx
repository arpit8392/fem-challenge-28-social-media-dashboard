import { overviewData } from '@/data'
import OverviewCard from './OverviewCard'

const Overview = () => {
	return (
		<section className='flex flex-col gap-6 px-6 py-12 md:px-40'>
			<h2 className='text-2xl font-bold text-lightText dark:text-white'>
				Overview - Today
			</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
				{overviewData.map((item) => (
					<OverviewCard key={item.id} {...item} />
				))}
			</div>
		</section>
	)
}
export default Overview
