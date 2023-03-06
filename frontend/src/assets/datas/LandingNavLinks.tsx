import { ReactElement } from 'react';
import Styles from '../css/Style.module.css';
import Button from '../../utils/Buttons';

export const LandingLinks: { name: string | ReactElement; link: string }[] = [
	{ name: 'Home', link: '/' },
	{
		name: 'Courses',
		link: '/courses',
	},
	{
		name: 'Careers',
		link: '/careers',
	},
	{
		name: 'Blog',
		link: '/blog',
	},
	{
		name: 'About Us',
		link: '/about-us',
	},
	{
		name: <Button name='login / signup' className={Styles.navbar_login} />,
		link: '/auth',
	},
];
