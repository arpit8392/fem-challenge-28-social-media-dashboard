'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	const currentTheme = theme === 'systemTheme' ? systemTheme : theme

	return (
		<Switch.Group
			as='div'
			className='group flex items-center justify-between md:justify-normal'>
			<Switch.Label as='span' className='mr-3'>
				<span className='text-sm font-bold text-lightText dark:text-darkText group-hover:dark:text-white group-hover:cursor-pointer'>
					Dark Mode
				</span>
			</Switch.Label>
			<Switch
				checked={currentTheme === 'dark'}
				onChange={() =>
					currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
				}
				className={clsx(
					currentTheme === 'dark'
						? 'bg-toggleDarkGradient'
						: 'bg-toggle hover:bg-toggleDarkGradient',
					'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out focus:outline-none'
				)}>
				<span className='sr-only'>Enable Dark Mode</span>
				<span
					aria-hidden='true'
					className={clsx(
						currentTheme === 'dark' ? 'translate-x-0' : 'translate-x-5',
						'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-lightCardBG shadow ring-0 transition duration-500 ease-in-out'
					)}
				/>
			</Switch>
		</Switch.Group>
	)
}