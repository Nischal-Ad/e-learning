import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Classes from '../../assets/css/Style.module.css';
import { navLinks } from './Navbar';

export const LandingNavLInks: React.FC<navLinks> = ({ links }) => {
	const displayLinks = links.map((navItem, i) => {
		return (
			<li key={i} className='lg:mx-4 lg:my-0 my-6  cursor-pointer '>
				<NavLink to={navItem.link}>
					{!navItem.btn ? (
						<h3>{navItem.name}</h3>
					) : (
						<button className={Classes.btn}>
							Login / SignUp <AiOutlineArrowRight className='ml-4' />
						</button>
					)}
				</NavLink>
			</li>
		);
	});
	return (
		<ul className='flex lg:justify-around justify-between lg:flex-row flex-col items-center'>
			{displayLinks}
		</ul>
	);
};
