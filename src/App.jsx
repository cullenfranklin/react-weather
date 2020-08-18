import React, { Component } from 'react';
import Title from './components/title.jsx';
import Cards from './components/cards.jsx';
import { config } from './config.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: {},
			weather: [],
			zipCode: '20132',
			city: ''
		};
	}

	componentDidMount() {
		this.loadWeatherData();
	}

	zipCallback = (zip) => {
		console.log('new zip', zip);
		this.setState({ zipCode: zip }, () => {
			this.loadWeatherData();
		});
	};

	loadWeatherData() {
		// get data from api
		fetch(
			`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},us&appid=${config.API_KEY}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ weatherData: data });

				// copy into weather array
				for (var i = 0; i < 5; i++) {
					this.state.weather.push(this.state.weatherData.list[i]);
				}

				this.setState({ city: data.city.name });
			})
			.catch(console.log);
	}

	render() {
		return (
			<div>
				<Title zipCodeCallback={this.zipCallback} />
				<div className="row">
					<div className="col-md-12 text-center">
						<h3>Showing weather for...</h3>
						{this.state.city}
					</div>
				</div>
				<Cards weather={this.state.weather} />
				<div className="col-md-1"></div>
			</div>
		);
	}
}

export default App;
