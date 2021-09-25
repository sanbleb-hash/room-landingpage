import React from 'react';
import { MdKeyboardArrowLeft } from '@react-icons/all-files/md/MdKeyboardArrowLeft';
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight';

const Button = ({ minusBtn, plusBtn }) => {
	return (
		<div className='absolute md:w-[140px]  w-[80px]   bg-black text-white flex items-center justify-center bottom-0 right-0 h-10 lg:-right-36  '>
			<button
				onClick={minusBtn}
				className=' pr-2 text-2xl md:text-3xl hover:opacity-80 '
			>
				<MdKeyboardArrowLeft />
			</button>
			<button
				onClick={plusBtn}
				className='  pl-2 text-2xl md:text-3xl hover:opacity-80'
			>
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};

export default Button;
