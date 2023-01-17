import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Classes from '../assets/css/Style.module.css';

type TestomonialProps = {
	comments: {
		img: string;
		name: string;
		profession: string;
		comment: string;
	}[];
};

const TestimonialCard: React.FC<TestomonialProps> = ({ comments }) => {
	return (
		<div className={`grid lg:grid-cols-2 gap-6 mb-5`}>
			{comments.map((comment, i) => {
				return (
					<div key={i} className='p-5 bg-gray-100 rounded '>
						<FaQuoteRight className='text-secondary mb-4 w-5 h-5' />
						<p className={Classes.testomonial_comments}>{comment.comment}</p>
						<div className='inline-flex items-center'>
							<img
								alt=''
								src={comment.img}
								className='w-12 h-12 rounded-full'
							/>

							<span className='ml-4'>
								<h2>{comment.name}</h2>
								<p className='text-Tertiary'>{comment.profession}</p>
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TestimonialCard;
