import React from 'react';
import Section from '../../utils/Section';
import Styles from '../../assets/css/landing.module.css';
import Heading from '../../utils/Heading';

const Success = () => {
	return (
		<Section id='success'>
			<Heading heading='our' headingTopic='Success' desc='hello this is desc' />
			<div className={Styles.success_box}>
				<div>
					<span>15k+</span>
					<h2>Students</h2>
				</div>
				<div>
					{' '}
					<span>75%</span>
					<h2>Total Success</h2>
				</div>
				<div>
					{' '}
					<span>35</span>
					<h2>Main Questions</h2>
				</div>
				<div>
					{' '}
					<span>16</span>
					<h2>Years Experience</h2>
				</div>
			</div>
		</Section>
	);
};

export default Success;
