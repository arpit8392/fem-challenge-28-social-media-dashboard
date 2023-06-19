import Image from 'next/image'
import Summary from './Summary'

const OverviewCard = ({ website, metric, count, summary }: Overview) => {
	return (
		<article className='flex items-center justify-between rounded-md bg-lightCardBG px-6 py-7 hover:cursor-pointer hover:bg-hoverLightCard dark:bg-darkCardBG hover:dark:bg-hoverDarkCard'>
			<div className='flex flex-col gap-6'>
				<p className='text-xs font-bold text-lightText dark:text-darkText'>
					{metric}
				</p>
				<p className='text-3xl font-bold text-lightTextDark dark:text-white'>
					{count.toLowerCase()}
				</p>
			</div>
			<div className='flex flex-col items-center gap-10'>
				<Image
					src={`/images/icon-${website.toLowerCase()}.svg`}
					alt={`${website} Icon`}
					width={20}
					height={20}
					className='object-contain'
				/>
				<Summary summary={summary} />
			</div>
		</article>
	)
}
export default OverviewCard
