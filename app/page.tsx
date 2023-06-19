import Followers from '@/components/Followers'
import Header from '@/components/Header'
import Overview from '@/components/Overview'

export default function Home() {
	return (
		<main className='flex flex-col '>
			<Header />
			<Followers />
			<Overview />
		</main>
	)
}
