import React, { memo } from 'react';
import Styles from '../assets/css/Style.module.css';
import Button from './Buttons';
import ReactStars from 'react-stars';

type ImageCardProps = {
	items:
		| { img: string; heading: string; btn_name: string }
		| { img: string; heading: string; btn_name: string }[];
};

type CardProps = {
	cardpercol?: number;
	items:
		| { img: string; heading: string; desc: string; className?: string }
		| { img: string; heading: string; desc: string; className?: string }[];
};

type TestomonialCardProps = {
	items: { img: string; name: string; desc: string; rating: number };
};
const Card: React.FC<CardProps> = ({ cardpercol = 3, items }) => {
	const isArray = Array.isArray(items);

	return (
		<>
			{isArray ? (
				<div className={Styles.card}>
					{items.map((item, i) => {
						return (
							<div key={i} className={Styles.card_body}>
								<img src={item.img} alt='' className={item.className} />
								<h1 className={Styles.card_heading}>{item.heading}</h1>
								<p className={Styles.card_desc}>{item.desc}</p>
							</div>
						);
					})}
				</div>
			) : (
				<div className={Styles.card_body}>
					<img src={items.img} alt='' className={items.className} />
					<h1 className={Styles.card_heading}>{items.heading}</h1>
					<p className={Styles.card_desc}>{items.desc}</p>
				</div>
			)}
		</>
	);
};

export const ImageCard: React.FC<ImageCardProps> = ({ items }) => {
	const isArray = Array.isArray(items);

	return (
		<>
			{isArray ? (
				<div className={Styles.imagecard_grid}>
					{items.map((item, i) => {
						return (
							<div key={i} className={Styles.imageCard}>
								<img src={item.img} alt='' className={Styles.imageCard_img} />
								<div className={Styles.imageCard_box}>
									<h2>{item.heading}</h2>
									<Button
										name={item.btn_name}
										className={Styles.imageCard_btn}
									/>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className={Styles.imageCard}>
					<img src={items.img} alt='' className={Styles.imageCard_img} />
					<div className={Styles.imageCard_box}>
						<h2>{items.heading}</h2>
						<Button name={items.btn_name} className={Styles.imageCard_btn} />
					</div>
				</div>
			)}
		</>
	);
};

export const TestiminalCard: React.FC<TestomonialCardProps> = ({ items }) => {
	return (
		<div className={Styles.testiminal}>
			<img src={items.img} alt='' className={Styles.testiminals_img} />
			<div className={Styles.comment_box}>
				<p>" {items.desc} "</p>
				<div className={Styles.testiminal_bottom}>
					<h2>{items.name}</h2>
					<ReactStars
						count={5}
						size={20}
						edit={false}
						value={items.rating}
						color2={'#ffd700'}
					/>
				</div>
			</div>
		</div>
	);
};

export default memo(Card);
