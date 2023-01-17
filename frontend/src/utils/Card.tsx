import React, { memo } from 'react';
import Classes from '../assets/css/Style.module.css';

type CardProps = {
	cardpercol?: number;
	items:
		| { img: string; heading: string; desc: string }
		| { img: string; heading: string; desc: string }[];
};

const Card: React.FC<CardProps> = ({ cardpercol = 3, items }) => {
	const isArray = Array.isArray(items);

	return (
		<>
			{isArray ? (
				<div
					className={`grid gap-10 lg:grid-cols-3 drop-shadow-sm text-center`}
				>
					{items.map((item, i) => {
						return (
							<div key={i} className={Classes.card_body}>
								<img
									className='w-[100px] h-[100px] p-1'
									src={process.env.PUBLIC_URL + `/img/${item.img}`}
									alt=''
								/>

								<h1 className={Classes.card_heading}>{item.heading}</h1>
								<p className={Classes.card_desc}>{item.desc}</p>
							</div>
						);
					})}
				</div>
			) : (
				<div className={Classes.card_body}>
					<img
						className='w-[100px] h-[100px] p-1'
						src={process.env.PUBLIC_URL + `/img/${items.img}`}
						alt=''
					/>

					<h1 className={Classes.card_heading}>{items.heading}</h1>
					<p className={Classes.card_desc}>{items.desc}</p>
				</div>
			)}
		</>
	);
};

export default memo(Card);
