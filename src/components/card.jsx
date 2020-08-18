import React, { Component } from 'react';

class Card extends Component {
	state = {};
	render() {
		return (
			<div className="card">
				<img
					className="card-img-top"
					alt={this.props.weather.weather[0].main}
				></img>
				<div className="card-body">
					<h5 className="card-title">{this.props.weather.day}</h5>
					<ul className="card-text">
						<li>{this.props.weather.weather[0].main}</li>
						<li>{this.props.weather.main.temp}º F</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Card;
