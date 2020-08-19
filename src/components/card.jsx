import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ weather }) => {
	const weatherName = weather.weather[0].description;
	const iconNameSwitch = (param) =>
		({
			'scattered clouds': 'cloud-sun',
			'few clouds': 'cloud-sun',
			'broken clouds': 'cloud-sun',
			'clear sky': 'sun',
			'light rain': 'cloud-rain',
			'moderate rain': 'cloud-rain',
			'heavy rain': 'cloud-showers-heavy',
			'overcast clouds': 'cloud'
		}[param]);

	const faIconName = iconNameSwitch(weatherName);

	return (
		<div className="card">
			<span className="border">
				<h1 style={{ textAlign: 'center', fontSize: '70px' }}>
					<FontAwesomeIcon icon={faIconName} />
				</h1>
				<div className="card-body">
					<h5 className="card-title">{weather.day}</h5>
					<p className="card-text">{weatherName}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{weather.main.temp}º F</li>
					<li className="list-group-item">
						Humidity: {weather.main.humidity}
					</li>
					<li className="list-group-item">
						Wind Speed: {weather.wind.speed} MPH
					</li>
				</ul>
			</span>
		</div>
	);
};

export default Card;
