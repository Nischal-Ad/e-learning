import React from 'react';
import Section from '../../utils/Section';
import Styles from '../../assets/css/Style.module.css';
import { PlainInput } from '../../utils/InputBox';
import Button from '../../utils/Buttons';
import logo from '../../assets/img/logo.svg';
import line from '../../assets/img/line.png';

const footer = () => {
	return (
		<footer className={`${Styles.footer}`}>
			<Section id='footer' className={Styles.footer_section}>
				<div className={Styles.footer_head}>
					<div>
						<img src={logo} alt='' />
					</div>{' '}
					<div className={Styles.bar}>
						<img src={line} alt='' />
					</div>
					<div>
						<h1 className={Styles.logo_text}>
							virtual class <br />
							for zoom
						</h1>
					</div>
				</div>
				<h2 className={Styles.footer_span_text}>
					Subscribe to get our Newsletter
				</h2>

				<div className={Styles.footer_body}>
					<PlainInput
						className={Styles.footer_input}
						type='email'
						name='email'
						placeholder='Enter Email'
					/>
					<Button className={Styles.footer_btn} name='Suscribe' />
				</div>

				<div className={Styles.footer_links}>
					<ul className={Styles.links}>
						<li>Carrers</li> |<li>Privacy Policy</li> |
						<li>Terms and Conditions</li>
					</ul>
					<p>@ 2021 class technologies inc.</p>
				</div>
			</Section>
		</footer>
	);
};

export default footer;
