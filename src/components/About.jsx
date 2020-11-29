import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About({ onClose }) {
 return (
  <div className={styles.about}>
   <h4>About</h4>
   <p className={styles.lorem}>
    This project was done from I believe with what Henry learned using the API
    'OpenWeatherMap'
   </p>
   <a href="https://github.com/Pakvothe">Visit my Github!</a>
  </div>
 );
}
