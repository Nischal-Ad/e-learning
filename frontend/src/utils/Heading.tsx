import React from 'react';
import Styles from '../assets/css/Style.module.css';

type HeadingProp = {
	heading: string;
	headingTopic?: string;
	desc?: string;
};

const Heading: React.FC<HeadingProp> = ({ heading, headingTopic, desc }) => {
	return (
		<div className={Styles.topic_box}>
			<div className={Styles.box}>
				<h1 className={Styles.topic}>
					{heading} <span>{headingTopic}</span>
				</h1>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default Heading;
