import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

ReactDOM.render(
	<BrowserRouter>
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Final Weather</title>
				<meta name='description' content='Your simple Weather App' />
				<meta name='author' content='Franco Ortiz' />
				<meta name='viewport' content='width=device=width, initial-scale=1' />
				<link rel="canonical" href="https://ff-weather.herokuapp.com/" />
			</Helmet>
			<App />
		</>
	</BrowserRouter>,
	document.getElementById('root')
);
