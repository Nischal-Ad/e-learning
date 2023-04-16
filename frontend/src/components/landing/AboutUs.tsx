import React from 'react';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import { ImageCard } from '../../utils/Card';
import { AboutData } from '../../assets/datas/AboutData';

const AboutUs: React.FC = () => {
	return (
		<Section id='about-us'>
			<Heading
				heading='What is '
				headingTopic='E-Learning'
				desc='TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
			/>

			<ImageCard items={AboutData} />
		</Section>
	);
};

export default AboutUs;
