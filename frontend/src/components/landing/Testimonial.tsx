import React from 'react';
import Heading from '../../utils/Heading';
import Section from '../../utils/Section';
import Styles from '../../assets/css/landing.module.css';
import { TestiminalCard } from '../../utils/Card';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Button from '../../utils/Buttons';
import Comments from '../../assets/datas/Testominals.json';

const Testimonial: React.FC = () => {
	return (
		<Section id='testiminals'>
			<Heading
				heading='Testiminals:'
				headingTopic='What They Say?'
				desc='What Our Clients Has To Say...'
			/>
			<div className={Styles.testiminals}>
				<div className={Styles.testiminal_desc}>
					<p>
						TOTC has got more than 100k positive ratings from our users around
						the world.{' '}
					</p>
					<p>
						Some of the students and teachers were greatly helped by the
						Skilline.
					</p>
					<p>Are you too? Please give your assessment</p>

					<Button
						className={Styles.testomonial_btn}
						name='Write your comments ➡️'
					/>
				</div>
				<div className={Styles.testiminal_fit_Comments}>
					<TestiminalCard items={Comments} />
					<button>
						<AiOutlineArrowRight
							className={Styles.testomonial_arrow_btn_right}
						/>
					</button>
					<button>
						<AiOutlineArrowLeft className={Styles.testomonial_arrow_btn_left} />
					</button>
				</div>
			</div>
		</Section>
	);
};

export default Testimonial;
