import React, {useState}  from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className={styles.container} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className={styles.inputTxt}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={styles.searchBtn} type="submit" value="Agregar" />
    </form>
  );

};


