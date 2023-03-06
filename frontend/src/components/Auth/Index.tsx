import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Login from './Login';
import Register from './Register';
import Styles from '.././../assets/css/auth.module.css';
import Section from '../../utils/Section';
import { Link } from 'react-router-dom';
import student from '../../assets/img/student.png';

const Index = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<Section id='auth'>
			<div className={Styles.btn}>
				<Link to={'/'}>
					<AiOutlineArrowLeft />
				</Link>{' '}
			</div>
			<div className={Styles.body}>
				<div className={Styles.img}>
					<img src={student} alt='' />
				</div>
				<div className={Styles.body_form}>
					<h2>Welcome to E-Learning..!</h2>
					<div className={Styles.form_btn}>
						<h3 onClick={() => setIsLogin(true)}>Login</h3>
						<h3 onClick={() => setIsLogin(false)}>Register</h3>
						<span
							className={`${Styles.form_btn_active_show} ${
								!isLogin ? Styles.register : Styles.login
							}`}
						></span>
					</div>

					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cons</p>
					{isLogin ? <Login /> : <Register />}
				</div>
			</div>
		</Section>
	);
};

export default Index;
