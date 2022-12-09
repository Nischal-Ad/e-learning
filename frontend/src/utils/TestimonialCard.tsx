import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

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
		<div className={`grid grid-cols-2 gap-4 mb-5`}>
			{comments.map((comment, i) => {
				return (
					<div key={i} className='p-6 mx-4 bg-gray-100 rounded'>
						<FaQuoteRight className='text-secondary mb-4 w-5 h-5' />
						<p className=' mb-6'>{comment.comment}</p>
						<div className='inline-flex items-center'>
							<img
								alt=''
								src={comment.img}
								className='w-12 h-12 rounded-full'
							/>

							<span className='ml-4'>
								<h2>{comment.name}</h2>
								<p>{comment.profession}</p>
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TestimonialCard;
