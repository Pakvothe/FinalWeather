import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../pngguru.com.png'
import SearchBar from  './SearchBar.jsx';
import About from './About.jsx'
import styles from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={styles.container}>
      <Link className={styles.about} to='/About'>
        <span>About</span>
      </Link>  
      <Link to='/'>
        <img className={styles.logo} src={Logo} alt='img'/>
      </Link>
      <h1>Final Weather</h1> 
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
