import Head from 'next/head';
import HomePage from './HomePage';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=' font-spartan min-h-screen '>
				<HomePage />
			</main>
		</div>
	);
}
