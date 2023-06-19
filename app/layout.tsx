import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Social Media Dashboard with Theme Switcher',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS, Headless UI and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} scroll-smooth bg-white transition-all duration-500 dark:bg-darkBlueBG`}>
				<ThemeProvider enableSystem={true} attribute='class'>
					<div>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
