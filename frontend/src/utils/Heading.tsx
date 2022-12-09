import React from 'react';

type HeadingProp = {
	name: string;
	desc: string;
};

const Heading: React.FC<HeadingProp> = ({ name, desc }) => {
	return (
		<div className='text-center my-10'>
			<h1 className='text-[36px] text-secondary font-extrabold leading-[50px]'>
				{name}
			</h1>
			<h3 className='text-Tertiary py-2 font-semibold'>{desc}</h3>
		</div>
	);
};

export default Heading;
