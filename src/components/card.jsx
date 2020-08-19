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
			<h1 style={{ textAlign: 'center', fontSize: '70px' }}>
				<FontAwesomeIcon icon={faIconName} />
			</h1>
			<div className="card-body">
				<h5 className="card-title">{weather.day}</h5>
				<ul className="card-text">
					<li>{weatherName}</li>
					<li>{weather.main.temp}º F</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
