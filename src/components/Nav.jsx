import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../pngguru.com.png'
import SearchBar from './SearchBar.jsx';
import About from './About.jsx';
import styles from './Nav.module.css';

function Nav({ onSearch }) {
	return (
		<>
			<div className={styles.container}>
				<Link to='/'>
					<a>Home</a>
				</Link>
				<h1>Final Weather</h1>
				<Link className={styles.about} to='/About'>
					<span>About</span>
				</Link>
			</div>
			<SearchBar onSearch={onSearch} />
		</>
	);
};

export default Nav;
