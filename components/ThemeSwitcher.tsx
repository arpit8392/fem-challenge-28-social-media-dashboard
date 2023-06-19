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

	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleToggle = () => {
		if (currentTheme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	const switchClassName = clsx(
		currentTheme === 'dark' ||
			(currentTheme === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
			? 'bg-toggleDarkGradient'
			: 'bg-toggle hover:bg-toggleDarkGradient',
		'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out focus:outline-none'
	)

	const knobClassName = clsx(
		currentTheme === 'dark' ||
			(currentTheme === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
			? 'translate-x-0'
			: 'translate-x-5',
		'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-lightCardBG shadow ring-0 transition duration-500 ease-in-out'
	)

	return (
		<Switch.Group
			as='div'
			className='group flex items-center justify-between md:justify-normal'>
			<Switch.Label as='span' className='mr-3'>
				<span className='text-sm font-bold text-lightText group-hover:cursor-pointer dark:text-darkText group-hover:dark:text-white'>
					Dark Mode
				</span>
			</Switch.Label>
			<Switch
				checked={
					currentTheme === 'dark' ||
					(currentTheme === 'system' &&
						window.matchMedia('(prefers-color-scheme: dark)').matches)
				}
				onChange={handleToggle}
				className={switchClassName}>
				<span className='sr-only'>Enable Dark Mode</span>
				<span aria-hidden='true' className={knobClassName} />
			</Switch>
		</Switch.Group>
	)
}
