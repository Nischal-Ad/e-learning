import React from 'react';
import Classes from '../assets/css/Style.module.css';

type Children = {
	children: React.ReactNode;
	className?: string | '';
};

const Section: React.FC<Children> = ({ children, className }) => {
	return (
		<section className={`${Classes.section} ${className}`}>{children}</section>
	);
};

export default Section;
