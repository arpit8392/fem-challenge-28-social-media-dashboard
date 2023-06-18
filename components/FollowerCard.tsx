import clsx from 'clsx'
import Image from 'next/image'

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
				'flex flex-col items-center justify-center gap-6 rounded-md border-t-4 bg-lightCardBG pb-6 pt-8 text-center hover:cursor-pointer hover:bg-[#E1E4F0] dark:bg-darkCardBG hover:dark:bg-[#333A55]',
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
					className='w-auto object-contain'
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
			<figure className='flex gap-x-1'>
				{summary.charAt(0) === '+' ? (
					<Image
						src={'/images/icon-up.svg'}
						alt='Up Icon'
						height={4}
						width={8}
						className='w-auto object-contain'
					/>
				) : (
					<Image
						src={'/images/icon-down.svg'}
						alt='Down Icon'
						height={4}
						width={8}
						className='w-auto object-contain'
					/>
				)}
				<figcaption
					className={clsx(
						summary.charAt(0) === '+' ? 'text-limeGreen' : 'text-brightRed',
						'text-xs font-bold'
					)}>
					{summary.slice(1)}
				</figcaption>
			</figure>
		</article>
	)
}
export default FollowerCard
