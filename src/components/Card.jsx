import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import Zoom from 'react-reveal/Zoom';

export default function Card({ min, max, name, img, onClose, id }) {
	return (
		<Zoom duration={300}>
			<div className={styles.container}>
				<div id='closeIcon' className={styles.centered}>
					<button onClick={onClose} className={styles.closeButton}>X</button>
				</div>
				<div >
					<Link className={styles.cardLink} to={`/FinalWeather/ciudad/${id}`}>
						<h4 className={styles.letters}>{name}</h4>
						<div className='row'>
							<div className='col-sm-4 col-md-4 col-lg-4'>
								<p className={styles.letters}>Min</p>
								<p className={styles.letters}>{min}°</p>
							</div>
							<div className='col-sm-4 col-md-4 col-lg-4'>
								<p className={styles.letters}>Max</p>
								<p className={styles.letters}>{max}°</p>
							</div>
							<div className='col-sm-4 col-md-4 col-lg-4'>
								<img className='iconoClima'
									src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
									width='80' height='80' alt='' />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</Zoom>
	);
};
