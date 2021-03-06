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
			city: '',
			error: false,
			weekDays: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			]
		};
	}

	componentDidMount() {
		this.loadWeatherData();
	}

	zipCallback = (zip) => {
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
				this.setState({ weatherData: data, error: false });
				let newWeather = [];

				// copy into weather array
				for (var i = 0; i < 5; i++) {
					let forecast = data.list[i];
					forecast.id = i;

					// Calculate day of the week
					let today = new Date();
					let forecastIndex = today.getDay() + i;
					forecastIndex =
						forecastIndex > 6 ? forecastIndex - 7 : forecastIndex;
					forecast.day =
						i === 0 ? 'Today ' : this.state.weekDays[forecastIndex];

					// Convert temp to F
					forecast.main.temp = Math.round(
						(forecast.main.temp - 273.15) * 1.8 + 32
					);

					newWeather.push(forecast);
				}

				this.setState({ city: data.city.name, weather: newWeather });
			})
			.catch((error) => {
				console.error(error);
				this.setState({ error: true });
			});
	}

	render() {
		return (
			<div>
				<Title
					zipCodeCallback={this.zipCallback}
					isError={this.state.error}
				/>
				<div className="col-md-12 text-center">
					<h3>Showing weather for...</h3>
					<h2>{this.state.city}</h2>
				</div>
				<Cards weather={this.state.weather} city={this.state.city} />
			</div>
		);
	}
}

export default App;
