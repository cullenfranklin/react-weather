import React from 'react';

const Card = ({ weather }) => {
	return (
		<div className="card">
			<img className="card-img-top" alt={weather.weather[0].main}></img>
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
