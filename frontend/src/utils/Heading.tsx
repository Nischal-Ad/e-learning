import React from 'react';
import Classes from '../assets/css/Style.module.css';

type HeadingProp = {
	name: string;
	desc?: string;
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

export const TitleHeading: React.FC<HeadingProp> = ({ name, desc }) => {
	return (
		<div className={`${Classes.landing_bg} flex flex-col`}>
			<div className='pt-16 pb-10'>
				<Heading name={name} desc={desc} />
			</div>
		</div>
	);
};
