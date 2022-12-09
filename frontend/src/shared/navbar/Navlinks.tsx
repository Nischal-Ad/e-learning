import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Classes from '../../assets/css/Style.module.css';

export const LandingNavLInks: React.FC = () => {
	return (
		<ul className='flex justify-around text-white items-center'>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<h3>Home</h3>
				</NavLink>
			</li>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<h3>Services</h3>
				</NavLink>
			</li>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<h3>Our Goals</h3>
				</NavLink>
			</li>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<h3>About Us</h3>
				</NavLink>
			</li>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<h3>Testimonials</h3>
				</NavLink>
			</li>
			<li className='mx-5 cursor-pointer '>
				<NavLink to={'/'}>
					{' '}
					<button className={Classes.btn}>
						Login / SignUp <AiOutlineArrowRight className='ml-4' />
					</button>
				</NavLink>
			</li>
		</ul>
	);
};
