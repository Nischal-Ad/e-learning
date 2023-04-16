import React from 'react';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import goalImg from '../../assets/img/goalImg.jpg';
import Styles from '../../assets/css/landing.module.css';
import { FaUsers, FaDiscourse, FaCube } from 'react-icons/fa';

const Goals: React.FC = () => {
	return (
		<Section id='goals'>
			<Heading heading='Our' headingTopic='Goals' desc='this is our goals' />
			<div className={Styles.goals}>
				<div>
					<img src={goalImg} alt='' />
				</div>
				<div className={Styles.goals_content}>
					<h1>
						A <span>user interface</span> designed for the classroom
					</h1>
					<ul className={Styles.goals_list}>
						<li>
							<FaCube className={Styles.img_box} />
							<p>
								Teachers don’t get lost in the grid view and have a dedicated
								Podium space.
							</p>
						</li>
						<li>
							<FaDiscourse className={Styles.img_box} />
							<p>
								Teachers can easily see all students and class data at one time.
							</p>{' '}
						</li>

						<li>
							<FaUsers className={Styles.img_box} />

							<p>
								{' '}
								TA’s and presenters can be moved to the front of the class.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default Goals;
