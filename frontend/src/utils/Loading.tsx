import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Styles from '../assets/css/Style.module.css';

const Loading = () => {
	return (
		<div className={Styles.loading}>
			<RotatingLines
				strokeColor='#49BBBD'
				strokeWidth='3'
				animationDuration='1'
				width='100'
				visible={true}
			/>
		</div>
	);
};

export default Loading;
