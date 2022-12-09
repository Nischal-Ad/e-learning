import React from 'react';
import AboutUs from '../components/landing/AboutUs';
import Goals from '../components/landing/Goals';
import Services from '../components/landing/Services';
import Testimonial from '../components/landing/Testimonial';
import Welcome from '../components/landing/Welcome';
import LandingNavbar from '../shared/navbar/LandingNavbar';

const Landing: React.FC = () => {
	return (
		<>
			<LandingNavbar />
			<Welcome />
			<Services />
			<Goals />
			<AboutUs />
			<Testimonial />
		</>
	);
};

export default Landing;
