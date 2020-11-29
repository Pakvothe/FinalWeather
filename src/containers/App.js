import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import { Route } from 'react-router-dom';

function App() {
 const [cities, setCities] = useState([]); // inicio un estado que se llama cities

 function onSearch(ciudad) {
  fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=a960d5c427c4640b785fa43562dba1df&units=metric`
  )
   .then((r) => r.json())
   .then((recurso) => {
    if (recurso.main !== undefined) {
     const ciudad = {
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon,
     };
     setCities((oldCities) => [
      ...oldCities.filter((c) => c.id !== ciudad.id),
      ciudad,
     ]);
    } else {
     alert('Ciudad no encontrada');
    }
   });
 }

 function onClose(id) {
  setCities((oldCities) => oldCities.filter((c) => c.id !== id));
 }

 function onFilter(ciudadId) {
  let ciudad = cities.filter((c) => c.id == parseInt(ciudadId));
  if (ciudad.length > 0) {
   return ciudad[0];
  } else {
   return null;
  }
 }

 return (
  <div className="App">
   <br />
   <Route path="/" render={() => <Nav onSearch={onSearch} />} />
   <Route exact path="/about" component={About} />
   <Route
    exact
    path="/"
    render={() => <Cards cities={cities} onClose={onClose} />}
   />
   <Route
    exact
    path="/ciudad/:ciudadId"
    render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
    i
   />
  </div>
 );
}
export default App;
