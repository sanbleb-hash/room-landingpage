import React, { useState } from 'react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

const Header = () => {
	const [menu, setMenu] = useState(true);

	return (
		<header
			className='h-[10vh] 
        w-1/2
        md:w-[60%] md:ml-11 text-white absolute top-3 left-0 text-lg'
		>
			<nav className='flex items-center justify-between w-full h-full relative '>
				<span
					className='text-xl ml-11 md:hidden '
					onClick={function () {
						setMenu(!menu);
					}}
				>
					{menu ? (
						<FaBars className='cursor-pointer hover:opacity-80' />
					) : (
						<div
							className=' 
                        w-screen h-screen  1 
                        fixed inset-0 bg-opacity-30
                         bg-gray-800 z-0 '
						>
							<div
								className=' w-screen h-[10vh] 
                                z-50
                            flex 
                            items-center
                            bg-white  justify-between px-11'
							>
								<FaTimes
									className='ml-1
                                text-gray-300
                                cursor-pointer '
								/>
								<div className=''>
									<ul className='flex items-center text-sm text-gray-700 font-semibold '>
										<li className='mr-2 cursor-pointer hover:opacity-80'>
											home
										</li>
										<li className=' cursor-pointer hover:opacity-80'>shop</li>
										<li className='mx-2 cursor-pointer hover:opacity-80'>
											about
										</li>
										<li className=' cursor-pointer hover:opacity-80'>
											contact
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</span>

				<h1 className='font-semibold text-xl'>room</h1>
				<ul className='hidden md:flex  '>
					<li className=' cursor-pointer hover:opacity-80 mr-3'>home</li>
					<li className=' cursor-pointer hover:opacity-80'>shop</li>
					<li
						className=' cursor-pointer hover:opacity-80
                    mx-3'
					>
						about
					</li>
					<li className=' cursor-pointer hover:opacity-80'>contact</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
