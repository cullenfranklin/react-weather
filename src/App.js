import React, { Component } from 'react';
import { Title } from './components/title.js';
import { Cards } from './components/cards.js';
import { config } from './config.js'
import './App.css';

class App extends Component{
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
    // get data from api
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},us&appid=${config.API_KEY}`)
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({ weatherData: data })
      console.log('Weather data: ', this.state.weatherData);

      // copy into weather array
      for (var i = 0; i < 5; i++) {
        this.state.weather.push(this.state.weatherData.list[i]);
      }
      console.log('Weather:', this.state.weather);

      this.setState({ city: data.city.name });
      console.log('state', this.state);
    })
    .catch(console.log);
  }

  render() {
    return (
      <div>
        <Title/>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Showing weather for...</h3>
            { this.state.city }
          </div>
        </div>
          <Cards weather={ this.state.weather }/>
          <div className="col-md-1"></div>
        </div>
    )
  }
}

export default App;
