import React from 'react';

const Title = (props) => {
    return(
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 jumbotron">
                <h1>Untitled Weather App</h1>
                <p>Enter a zip code below:</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Zip Code" aria-label="Zip Code"></input>
                    <div className="input-group-prepend">
                        <button className="btn" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export { Title }