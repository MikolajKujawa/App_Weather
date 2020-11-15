import React from 'react';
import '../style/Result.css';

const Result = (props) => {
    
    const {day, time, city, sunrise, sunset, temp, pressure, wind, error} = props.weather;

    let content = null;

    if(!error && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
                <h1>Wyniki wyszukiwania dla: <em>{city}</em></h1>
                <h2>Dzień: {day}</h2>
                <h2>Godzina: {time}</h2>
                <h2>Temperatura: {temp}&#176;C</h2>
                <h2>Wschód słońca o: {sunriseTime}</h2>
                <h2>Zachód słońca o: {sunsetTime}</h2>
                <h2>Siła wiatru: {wind}m/s</h2>
                <h2>Ciśnienie: {pressure}hPa</h2>
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