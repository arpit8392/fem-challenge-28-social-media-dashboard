import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
	return (
		<header>
			{/* Top Background */}
			<div className='absolute left-0 top-0 -z-20 h-64 w-full rounded-b-3xl bg-lightBlueTopBG dark:bg-darkBlueTopBG' />
			{/* Header Section  */}
			<div className='flex flex-col gap-6 divide-y divide-hoverLightCard px-6 py-9 dark:divide-hoverDarkCard md:flex-row md:items-center md:justify-between md:divide-y-0 md:px-40'>
				{/* Heading & Followers */}
				<div className='flex flex-col gap-1'>
					<h1 className='text-2xl font-bold text-lightTextDark dark:text-white md:text-3xl'>
						Social Media Dashboard
					</h1>
					<p className='text-sm font-bold text-lightText dark:text-darkText'>
						Total Followers: 23,004
					</p>
				</div>

				{/* Theme Switcher Toggle Switch */}
				<div className='pt-4 md:pt-0'>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}
export default Header
