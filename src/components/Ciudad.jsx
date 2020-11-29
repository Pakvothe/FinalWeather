import React from 'react'
import styles from './Ciudad.module.css';

export default function Ciudad({city}) {

  if(!city) return <h5 className={styles.info}>Press Home Button..</h5>
  return (
    <div className="ciudad">
      <div className="container">
        <div className={styles.info}>             
          <h2>{city.name}</h2>
            <div className={styles.info1}>
              <div>Temperatura: &nbsp; {city.temp} ºC</div>
              <div>Clima: &nbsp; {city.weather}</div>
              <div>Viento: &nbsp; {city.wind} km/h</div>
              <div>Cantidad de nubes: &nbsp; {city.clouds}</div>
              <div>Latitud: &nbsp; {city.latitud}º</div>
              <div>Longitud: &nbsp; {city.longitud}º</div>
            </div>
            <br/>
            <br/>
            <p>Press Home Button to go Home...</p>
          </div>
        </div>
    </div>
    )
}
