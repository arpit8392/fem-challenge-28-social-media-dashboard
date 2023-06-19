import clsx from 'clsx'
import Image from 'next/image'
import Summary from './Summary'

const FollowerCard = ({
	website,
	handle,
	metric,
	count,
	summary,
}: Follower) => {
	return (
		<article
			className={clsx(
				'flex flex-col items-center justify-center gap-6 rounded-md border-t-4 bg-lightCardBG pb-6 pt-8 text-center hover:cursor-pointer hover:bg-hoverLightCard dark:bg-darkCardBG hover:dark:bg-hoverDarkCard',
				website.toLowerCase() === 'facebook' && 'border-t-facebook',
				website.toLowerCase() === 'youtube' && 'border-t-brightRed',
				website.toLowerCase() === 'twitter' && 'border-t-twitter',
				website.toLowerCase() === 'instagram' &&
					'gradient-border overflow-hidden border-none'
			)}>
			<figure className='flex items-center gap-2'>
				<Image
					src={`/images/icon-${website.toLowerCase()}.svg`}
					alt={`${website} Icon`}
					width={20}
					height={20}
					className='object-contain'
				/>
				<figcaption>
					<h2 className='text-xs font-bold tracking-wide text-lightText dark:text-darkText'>
						{handle}
					</h2>
				</figcaption>
			</figure>
			<h3 className='flex flex-col gap-2 text-6xl font-bold lowercase -tracking-[2px] text-lightTextDark dark:text-white'>
				{count}
				<span className='text-xs font-normal uppercase tracking-[5px] text-lightText dark:text-darkText'>
					{metric}
				</span>
			</h3>
			<Summary summary={summary} />
		</article>
	)
}
export default FollowerCard
