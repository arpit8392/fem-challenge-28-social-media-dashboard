import clsx from 'clsx'
import Image from 'next/image'

type Props = {
	summary: string
}
const Summary = ({ summary }: Props) => {
	return (
		<figure className='flex gap-x-1'>
			{summary.charAt(0) === '+' ? (
				<Image
					src={'/images/icon-up.svg'}
					alt='Up Icon'
					height={4}
					width={8}
					className='object-contain'
				/>
			) : (
				<Image
					src={'/images/icon-down.svg'}
					alt='Down Icon'
					height={4}
					width={8}
					className='object-contain'
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
	)
}
export default Summary
