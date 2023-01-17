import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../utils/Section';
import Classes from '../../assets/css/Style.module.css';

const footer = () => {
	return (
		<footer className={`${Classes.landing_bg} py-4 lg:py-2`}>
			<Section>
				{' '}
				<h3 className=' text-white flex'>
					<Link to={'/'}>
						<img
							className='w-[180px]'
							src={process.env.PUBLIC_URL + '/img/logo.png'}
							alt=''
						/>
					</Link>
					&nbsp;
					<span className={` flex items-end`}>© 2022 All Rights Reserved.</span>
				</h3>
			</Section>
		</footer>
	);
};

export default footer;
