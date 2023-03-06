import React, { useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Styles from '../assets/css/Style.module.css';

type InputProps = {
	name: string;
	placeholder: string;
	type: string;
	isrequired?: boolean | false;
	className?: string;
};

const InputBox: React.FC<InputProps> = ({
	type,
	placeholder,
	name,
	isrequired,
}) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<label className={Styles.input_label} htmlFor={name}>
				{name}
				{isrequired && <span> *</span>}
			</label>{' '}
			<br />
			<input
				className={Styles.inputbox}
				type={type}
				placeholder={placeholder}
				id={name}
				name={name}
				required={isrequired}
			/>
			{type === 'password' && (
				<span
					className={Styles.password_show}
					onClick={() => setIsShow(!isShow)}
				>
					{!isShow ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
				</span>
			)}
		</>
	);
};

export const PlainInput: React.FC<InputProps> = ({
	type,
	placeholder,
	name,
	className,
}) => {
	return (
		<input
			className={`${Styles.inputbox} ${className}`}
			type={type}
			placeholder={placeholder}
			id={name}
			name={name}
		/>
	);
};
export default InputBox;
