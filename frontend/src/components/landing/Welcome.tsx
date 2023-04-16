import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import Section from '../../utils/Section';
import Styles from '.././../assets/css/landing.module.css';
import heading_img from '../../assets/img/heading-img.png';

const Welcome: React.FC = () => {
	return (
		<main className={`${Styles.landing_bg}`}>
			<Section id='main' className={Styles.landing_section}>
				<div>
					<h1 className={Styles.heading}>
						<span>Studying</span> Online is now much easier
					</h1>

					<p className={Styles.desc}>
						E-learning is an interesting platform that will teach you in more an
						interactive way
					</p>

					<div className={Styles.btn_box}>
						<button className={Styles.btn_plain}>Join for free</button>
						<button className={Styles.btn}>
							<AiFillPlayCircle className={Styles.btn_icon} /> watch how it
							works
						</button>
					</div>
				</div>
				<div className={Styles.landing_img}>
					<img src={heading_img} alt='' />
				</div>
				<div className={Styles.waves}>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
					>
						<path
							d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
							className={Styles.wave_fill}
						></path>
					</svg>
				</div>
			</Section>
		</main>
	);
};

export default Welcome;
