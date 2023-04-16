import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from '../../assets/css/Style.module.css';
import { navLinks } from './Index';

export const LandingNavLInks: React.FC<navLinks> = ({ links }) => {
	const displayLinks = links.map((navItem, i) => {
		return (
			<li key={i} className={Styles.mavLinks_list}>
				<NavLink to={navItem.link}>
					<h2 className={Styles.nav_links}>{navItem.name}</h2>
				</NavLink>
			</li>
		);
	});
	return <ul className={Styles.navLinks_dispaly}>{displayLinks}</ul>;
};
