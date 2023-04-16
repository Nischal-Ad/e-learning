import React, { useEffect, useState, ReactElement } from 'react';
import Section from '../../utils/Section';
import { LandingNavLInks } from './Navlinks';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Styles from '../../assets/css/Style.module.css';
import logo from '../../assets/img/logo.svg';
import logoBlack from '../../assets/img/logo_black.svg';

export type navLinks = {
	links: { name: string | ReactElement; link: string }[];
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
		active || drop ? Styles.header_bg_main : Styles.header_bg_active;
	return (
		<header className={`${Styles.header} ${navBg}`}>
			<Section id='navbar' className={Styles.navbar_section}>
				<div className={Styles.navbar_logo}>
					<Link to={'/'}>
						<img src={active || drop ? logoBlack : logo} alt='' />
					</Link>
				</div>
				<div>
					<span className={Styles.navbar_span_links}>
						{!drop ? (
							<HiOutlineMenuAlt1
								className={Styles.show_hide}
								onClick={(e) => {
									setDrop(!drop);
								}}
							/>
						) : (
							<RxCross2
								className={Styles.show_hide}
								onClick={(e) => {
									setDrop(!drop);
								}}
							/>
						)}
					</span>
					<span className=' hidden lg:block'>
						<LandingNavLInks links={links} />
					</span>
				</div>
			</Section>
			{drop && (
				<div className={Styles.mobile_links}>
					<LandingNavLInks links={links} />
				</div>
			)}
		</header>
	);
};

export default Navbar;
