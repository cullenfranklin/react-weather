import React from 'react';

const Card = (props) => {
    let weather = props.weather;
    return (
        <div className="card">
            <img className="card-img-top" alt={ weather.weather[0].main }></img>
            <div className="card-body">
                <h5 className="card-title">{ props.forecastDay }</h5>
                <ul className="card-text">
                    <li>{ weather.weather[0].main }</li>
                    <li>{ props.temp }º F</li>
                </ul>
            </div>
        </div>
    )
}

const Cards = (props) => {
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className="row">
            <div className="col-md-1"></div>
            { props.weather.map((forecast, index) => {
                // Calculate day of the week
                let today = new Date();
                let forecastDay = today.getDay() + index;

                // Conver temp to F
                let temp = Math.round((forecast.main.temp - 273.15) * 1.8 + 32);

                return (
                    <div className="col-md-2" key={ index }>
                        <Card 
                            forecastDay={index === 0 ? 'Today ': weekDays[forecastDay]}
                            weather={ forecast }
                            temp={ temp }/>
                    </div>
                )
            })}
            <div className="col-md-1"></div>
        </div>
    )
}

export { Cards }

// https://getbootstrap.com/docs/4.4/components/card/