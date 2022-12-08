import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Section from '../../utils/Section';
import Classes from '.././../assets/css/Style.module.css';

const Welcome: React.FC = () => {
	return (
		<main className={`${Classes.landing_bg}`}>
			<Section className='flex justify-between items-center text-white'>
				<div>
					<h2 className='py-3'>introduction goes here</h2>
					<h2 className='py-3'>
						Welcome to <span className='text-4xl font-bold'>E-Learning</span>
					</h2>
					<p className='text-gray pt-2 pb-6'>description goes here</p>

					<button className={Classes.btn}>
						Enroll btn <AiOutlineArrowRight className='ml-8' />
					</button>
				</div>
				<div className='p-10 w-[50%]'>
					<img src={process.env.PUBLIC_URL + '/img/learn.png'} alt='' />
				</div>
			</Section>
		</main>
	);
};

export default Welcome;
