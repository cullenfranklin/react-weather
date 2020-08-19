import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faSun,
	faCloud,
	faCloudSun,
	faCloudRain,
	faCloudShowersHeavy
} from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';

library.add(faSun, faCloud, faCloudSun, faCloudRain, faCloudShowersHeavy);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
