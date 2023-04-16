import React from 'react';
import Card from '../../utils/Card';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import { services } from '../../assets/datas/Services';

const Services: React.FC = () => {
	return (
		<Section id='services'>
			<Heading
				heading='All-In-One'
				headingTopic='Cloud Software'
				desc='TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.'
			/>
			<Card items={services} />
		</Section>
	);
};

export default Services;
