import React, { useEffect, useState } from 'react';
import Section from '../../utils/Section';
import { LandingNavLInks } from './Navlinks';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export type navLinks = {
	links: { name: string; link: string; btn?: boolean }[];
};

const Navbar: React.FC<navLinks> = ({ links }) => {
	const [active, setActive] = useState(false);
	const [drop, setDrop] = useState(false);

	useEffect(() => {
		const changebg = () => {
			if (window.scrollY >= 50) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		window.addEventListener('scroll', changebg);
		return () => {
			window.removeEventListener('scroll', changebg);
		};
	});

	const navBg =
		active || drop ? 'bg-white text-secondary' : 'bg-transparent text-white';
	return (
		<header className={`z-10 top-0 w-full fixed ${navBg}`}>
			<Section className='flex justify-between  py-4  items-center'>
				<div className='w-[180px]'>
					<Link to={'/'}>
						<img
							src={
								active || drop
									? process.env.PUBLIC_URL + '/img/logo_black.png'
									: process.env.PUBLIC_URL + '/img/logo.png'
							}
							alt=''
						/>
					</Link>
				</div>
				<div>
					<span className='lg:hidden'>
						{!drop ? (
							<HiOutlineMenuAlt1
								className='w-10 h-10'
								onClick={(e) => {
									setDrop(!drop);
								}}
							/>
						) : (
							<RxCross2
								className='w-10 h-10'
								onClick={(e) => {
									setDrop(!drop);
								}}
							/>
						)}
					</span>
					<span className='lg_max:hidden'>
						<LandingNavLInks links={links} />
					</span>
				</div>
			</Section>
			{drop && (
				<div className='bg-white'>
					<LandingNavLInks links={links} />
				</div>
			)}
		</header>
	);
};

export default Navbar;
