import React from 'react';
import Card from '../../utils/Card';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import ServicesData from '../../assets/datas/Services.json';

const Services: React.FC = () => {
	return (
		<Section>
			<Heading name='Our Services:' desc='this is desc' />
			<Card items={ServicesData} cardpercol={3} />
		</Section>
	);
};

export default Services;
