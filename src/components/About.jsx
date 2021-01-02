import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About({ onClose }) {
	return (
		<div className={styles.about}>
			<h4>About</h4>
			<p className={styles.lorem}>This is a simple application created with React that uses the OpenWeather API to get the temperature of the city you want. </p>
			<p className={styles.lorem}>Created and Developed by Franco Ortiz ~ 2020 </p>
			<a className={styles.github} href="https://github.com/Pakvothe">Visit my Github!</a>
		</div>
	);
}
