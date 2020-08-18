import React, { Component } from 'react';
import Card from './card.jsx';

class Cards extends Component {
	render() {
		const { weather } = this.props;
		return (
			<div className="row">
				<div className="col-md-1"></div>
				{weather.map((forecast) => (
					<div className="col-md-2" key={forecast.id}>
						<Card weather={forecast} />
					</div>
				))}
				<div className="col-md-1"></div>
			</div>
		);
	}
}

export default Cards;
