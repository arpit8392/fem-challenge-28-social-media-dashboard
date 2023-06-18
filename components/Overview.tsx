type Props = {}
const Overview = (props: Props) => {
	return (
		<section className='flex flex-col gap-6 px-6 md:px-40 md:py-12'>
			<h2 className='text-2xl font-bold text-lightText dark:text-white'>
				Overview - Today
			</h2>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-4'></div>
		</section>
	)
}
export default Overview
