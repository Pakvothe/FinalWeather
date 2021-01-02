import React from 'react';
import styles from './About.module.css';
import Zoom from 'react-reveal/Zoom';

export default function About() {
	return (
		<Zoom>
			<div className={styles.about}>
				<h4>About</h4>
				<p className={styles.lorem}>This is a simple application created with React that uses the OpenWeather API to get the temperature of the city you want. </p>
				<p className={styles.lorem}>Created and Developed by Franco Ortiz ~ 2020 </p>
				<a className={styles.github} href='https://github.com/Pakvothe/FinalWeather' target='_blank' rel='noreferrer'>Visit the Repository!</a>
			</div>
		</Zoom>
	);
}
