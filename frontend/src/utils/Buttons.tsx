import React from 'react';
import Styles from '../assets/css/Style.module.css';

type ButtonProps = {
	name: string;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({ name, className }) => {
	return (
		<button className={`${Styles.btn_submit} ${className}`}>{name}</button>
	);
};

export default Button;
