import React from 'react';
import Classes from '../assets/css/Style.module.css';

type Children = {
	children: React.ReactNode;
	className?: string | '';
	id: string;
};

const Section: React.FC<Children> = ({ id, children, className }) => {
	return (
		<section id={id} className={`${Classes.section} ${className}`}>
			{children}
		</section>
	);
};

export default Section;
