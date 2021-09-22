import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';
import Button from './components/Button';
import Header from './components/Header';

const HomePage = () => {
	return (
		<header className='w-screen min-h-screen bg-gray-50'>
			<section className='w-full md:h-[70vh] flex flex-col items-center justify-start md:items-start md:justify-start mt-0 relative md:flex-row '>
				<div className='min-w-[350px] h-[400px]  md:h-full md:w-[55vw] relative  '>
					<img
						src='/images/banner-1.jpg'
						alt='banner-1'
						className='w-full h-full'
					/>
					<Button />
					<Header />
				</div>
				<div
					className='my-2
				md:my-auto 
				px-10 md:pl-10 md:py-4 lg:px-8 md:w-[40vw] lg:max-h-full'
				>
					<h1 className='text-2xl font-semibold py-3'>
						Discover innovative ways to decorate
					</h1>
					<p className='pb-4 text-sm leading-7 w-full'>
						We provide unmatched quality, comfort, and style for property owners
						across the country. Our experts combine form and function in
						bringing your vision to life. Create a room in your own style with
						our collection and make your property a reflection of you and what
						you love.\
					</p>
					<button className='tracking-widest text-xl flex items-center justify-between hover:text-gray-500 active:text-gray-400'>
						<span>shop now </span>
						<span className='ml-14 text-4xl'>
							<HiOutlineArrowNarrowRight />
						</span>
					</button>
				</div>
			</section>
			<section className=' flex flex-col  md:h-[30vh] md:overflow-hidden w-screen md:grid md:grid-cols-4'>
				<div className='w-full min-h-[200px] md:h-[30vh]   '>
					<img src='/images/image-about-dark.jpg' className='w-full h-full' />
				</div>
				<div className='col-span-2 p-10 md:p-6 min-h-[250px]'>
					<h2 className='text-lg font-semibold pb-2'>about our furniture</h2>
					<p className='text-xs leading-5'>
						Our multifunctional collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best express your interests and what inspires you. Find
						the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Product specialists are available to
						help you create your dream space.
					</p>
				</div>
				<div className='min-w-[350px] md:h-[30vh]    '>
					<img src='/images/image-about-light.jpg' className='w-full h-full' />
				</div>
			</section>
		</header>
	);
};

export default HomePage;
