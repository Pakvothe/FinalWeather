import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Ciudad.module.css';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

export default function Ciudad({ city }) {

	if (!city) return <h5 className={styles.info}>Press Home Button..</h5>
	return (
		<div className='ciudad'>
			<div className='container'>
				<div className={styles.info}>
					<Zoom>
						<h2>{city.name}</h2>
					</Zoom>
					<Zoom bottom cascade>
						<div className={styles.info1}>
							<div>Temperatura: &nbsp; {city.temp} ºC</div>
							<div>Clima: &nbsp; {city.weather}</div>
							<div>Viento: &nbsp; {city.wind} km/h</div>
							<div>Cantidad de nubes: &nbsp; {city.clouds}</div>
							<div>Latitud: &nbsp; {city.latitud}º</div>
							<div>Longitud: &nbsp; {city.longitud}º</div>
						</div>
					</Zoom>
					<br />
					<br />
					<Jump>
						<Link to='/FinalWeather/' className={styles.back}>Go Back</Link>
					</Jump>
				</div>
			</div>
		</div>
	)
}
