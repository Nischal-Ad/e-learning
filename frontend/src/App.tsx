import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import Landing from './pages/Landing';
import Error from './pages/Error';
import Footer from './shared/footer/Footer';
const App: React.FC = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Nunito', 'Quicksand', 'Poppins'],
			},
		});
	}, []);
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
