import React from 'react';

const Result = (props) => {
    
    const {day, time, city, sunrise, sunset, temp, pressure, wind, error} = props.weather;

    let content = null;

    if(!error && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla: <em>{city}</em></h3>
                <h4>Dzień: {day}</h4>
                <h4>Godzina: {time}</h4>
                <h4>Temperatura: {temp}&#176;C</h4>
                <h4>Wschód słońca o: {sunriseTime}</h4>
                <h4>Zachód słońca o: {sunsetTime}</h4>
                <h4>Siła wiatru: {wind}m/s</h4>
                <h4>Ciśnienie: {pressure}hPa</h4>
            </div>
        )
    }

    return (
        <div className="result">
            {error ? `Nie mamy w bazie ${city}` : content}
        </div>
    );
}
 
export default Result;