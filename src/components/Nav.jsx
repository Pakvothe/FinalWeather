import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Nav({ onSearch }) {
	return (
		<>
			<div className={styles.container}>
				<Fade left big>
					<Link to='/'>
						<a>Home</a>
					</Link>
				</Fade>
				<Zoom>
					<h1>Final Weather</h1>
				</Zoom>
				<Fade right big>
					<Link className={styles.about} to='/About'>
						<span>About</span>
					</Link>
				</Fade>
			</div>
			<Zoom>
				<SearchBar onSearch={onSearch} />
			</Zoom>
		</>
	);
};

export default Nav;
