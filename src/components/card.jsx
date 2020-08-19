import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ weather }) => {
	return (
		<div className="card">
			<h1 style={{ textAlign: 'center' }}>
				<FontAwesomeIcon icon="cloud" />
			</h1>
			<div className="card-body">
				<h5 className="card-title">{weather.day}</h5>
				<ul className="card-text">
					<li>{weather.weather[0].main}</li>
					<li>{weather.main.temp}º F</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
