import React from 'react';

const Result = (props) => {
    const {date, city, sunrise, sunset, temp, pressure, wind, error} = props.weather;
    return (
        <>
            <div>Pogoda dla: {city}</div>
            <div>Temperatura: {temp}</div>
        </>
    );
}
 
export default Result;