import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const temperatureStyle = {
    color: weather.temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
      <span style={temperatureStyle}>Temperature Color</span>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};



export default WeatherDisplay;
