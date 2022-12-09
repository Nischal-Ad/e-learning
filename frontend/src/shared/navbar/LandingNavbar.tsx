import React from 'react';
import Section from '../../utils/Section';
import { LandingNavLInks } from './Navlinks';

const LandingNavbar: React.FC = () => {
	return (
		<header className=' z-20 top-0 w-full fixed'>
			<Section className='flex justify-between  py-4  items-center'>
				<div className='w-[180px]'>
					<img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='' />
				</div>
				<div>
					<LandingNavLInks />
				</div>
			</Section>
		</header>
	);
};

export default LandingNavbar;
