import React, { Component } from 'react';

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipInput: ''
		};
	}

	sendData = () => {
		this.props.zipCodeCallback(this.state.zipInput);
	};

	handleInputChange = (event) => {
		this.setState({ zipInput: event.target.value });
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8 jumbotron">
					<h1>React Weather</h1>
					<p>Enter a zip code below:</p>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Zip Code"
							aria-label="Zip Code"
							onChange={this.handleInputChange}
						></input>
						<div className="input-group-prepend">
							<button
								className="btn"
								type="button"
								onClick={this.sendData}
							>
								Search
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-2"></div>
			</div>
		);
	}
}

export default Title;