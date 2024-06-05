import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplay = ({ weather }) => {
  const temperatureStyle = {
    color: weather.temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {weather.temperature}°C</p>
      <span style={temperatureStyle}>Temperature Color</span>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

WeatherDisplay.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    conditions: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherDisplay;
