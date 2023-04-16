import React from 'react';
import Styles from '.././../assets/css/auth.module.css';
import InputBox from '../../utils/InputBox';
import Button from '../../utils/Buttons';

const Register = () => {
	return (
		<>
			<form className={Styles.form_container}>
				<InputBox
					name='Email'
					placeholder='Enter Email'
					type='email'
					isrequired
				/>
				<InputBox
					name='UserName'
					placeholder='Enter UserName'
					type='text'
					isrequired
				/>
				<InputBox
					name='Password'
					placeholder='Enter Password'
					type='password'
					isrequired
				/>
				<InputBox
					name='Confirm Password'
					placeholder='Enter Confirm Password'
					type='password'
					isrequired
				/>
				<Button className={Styles.auth_btn} name='Register' />
			</form>
		</>
	);
};

export default Register;
