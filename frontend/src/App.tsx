import React from 'react';
import { Button } from 'flowbite-react';
import Style from './style.module.css';

const App = () => {
	return (
		<div className={Style.main}>
			App
			<Button color='failure'>Failure</Button>
		</div>
	);
};

export default App;
