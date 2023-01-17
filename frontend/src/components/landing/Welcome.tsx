import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Section from '../../utils/Section';
import Classes from '.././../assets/css/Style.module.css';

const Welcome: React.FC = () => {
	return (
		<main className={`${Classes.landing_bg}`}>
			<div className={`${Classes.waves}`}>
				<Section className='flex justify-around lg:px-0 px-4 lg:flex-row flex-col lg:items-center text-white pb-[50px]'>
					<div>
						<h2 className='py-3 text-white'>introduction goes here</h2>
						<h2 className='py-3 text-white'>
							Welcome to <span className='text-4xl font-bold'>E-Learning</span>
						</h2>
						<p className='text-cyan-100 pt-2 pb-6'>description goes here</p>

						<button className={Classes.btn}>
							Enroll btn <AiOutlineArrowRight className='ml-8' />
						</button>
					</div>
					<div className='p-10 place-content-center grid'>
						<img src={process.env.PUBLIC_URL + '/img/learn.svg'} alt='' />
					</div>
				</Section>
			</div>
		</main>
	);
};

export default Welcome;
