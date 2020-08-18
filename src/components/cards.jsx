import React, { Component } from 'react';
import Card from './card.jsx';

class Cards extends Component {
	state = {};
	render() {
		let weekDays = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		return (
			<div className="row">
				<div className="col-md-1"></div>
				{this.props.weather.map((forecast, index) => {
					// Calculate day of the week
					let today = new Date();
					let forecastDay = today.getDay() + index;
					forecastDay =
						forecastDay > 6 ? forecastDay - 7 : forecastDay;

					// Conver temp to F
					let temp = Math.round(
						(forecast.main.temp - 273.15) * 1.8 + 32
					);

					return (
						<div className="col-md-2" key={index}>
							<Card
								forecastDay={
									index === 0
										? 'Today '
										: weekDays[forecastDay]
								}
								weather={forecast}
								temp={temp}
							/>
						</div>
					);
				})}
				<div className="col-md-1"></div>
			</div>
		);
	}
}

export default Cards;
