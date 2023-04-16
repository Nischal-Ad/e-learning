import Button from '../../utils/Buttons';
import InputBox from '../../utils/InputBox';
import Styles from '.././../assets/css/auth.module.css';

const Login = () => {
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
					name='Password'
					placeholder='Enter Password'
					type='password'
					isrequired
				/>
				<p className={Styles.forgetPass}>Forget Password?</p>
				<Button className={Styles.auth_btn} name='login' />
			</form>
		</>
	);
};

export default Login;
