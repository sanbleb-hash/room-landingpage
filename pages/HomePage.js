import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import { products } from './components/products';

const HomePage = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		return () => {
			const lastIndex = products.length - 1;
			if (index < 0) {
				setIndex(lastIndex);
			}
			if (index > lastIndex) {
				setIndex(0);
			}
		};
	}, [index, products]);

	useEffect(() => {
		let slidding = setInterval(() => setIndex(index + 1), 3000);
		return () => clearInterval(slidding);
	}, [index]);

	return (
		<header className='w-screen min-h-screen bg-gray-50'>
			<section className='flex  w-[100vw] items-center  '>
				{products.map((slide, i) => {
					let position = 'nextSlide';

					if (i === index) {
						position = 'slide';
					}

					if (i === index - 1 || (index === 0 && i === products.length - 1)) {
						position = 'lastSlinde';
					}

					return (
						<article
							className={
								'relative w-full h-screen flex flex-col items-center justify-start md:justify-start md:items-start md:flex-row md:h-[70vh] md:mt-0 mx-auto  ' +
								position
							}
							key={slide.name}
						>
							<div className='min-w-screen h-[400px]  md:min-h-[70vh] md:w-[60vw] relative   '>
								<img src={slide.url} className='w-full h-full' />
								<Button
									plusBtn={function () {
										setIndex(index + 1);
									}}
									minusBtn={function () {
										setIndex(index - 1);
									}}
								/>
								<Header />
							</div>
							<div
								className='my-2
				md:my-auto 
				px-10 md:pl-10 md:py-4 lg:px-8 md:w-[40vw] lg:max-h-full'
							>
								<h1 className='text-2xl font-semibold py-3'>{slide.title}</h1>
								<p className='pb-4 text-sm leading-7 w-full'>
									{slide.description}
								</p>
								<button className='tracking-widest text-xl flex items-center justify-between hover:text-gray-500 active:text-gray-400'>
									<span>shop now</span>
									<span className='ml-14 text-4xl'>
										<HiOutlineArrowNarrowRight />
									</span>
								</button>
							</div>
						</article>
					);
				})}
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

				<div className='min-w-[350px] md:h-[30vh]    relative'>
					<img
						src='/images/image-about-light.jpg'
						className='w-full h-full menu '
					/>
				</div>
			</section>
		</header>
	);
};

export default HomePage;
