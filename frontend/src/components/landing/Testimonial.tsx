import React from 'react';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import TestimonialCard from '../../utils/TestimonialCard';
import Comments from '../../assets/datas/Testominals.json';

const Testimonial: React.FC = () => {
	return (
		<Section id='testiminals'>
			<Heading name='Testiminals:' desc='What Our Clients Has To Say...' />
			<TestimonialCard comments={Comments} />
		</Section>
	);
};

export default Testimonial;
