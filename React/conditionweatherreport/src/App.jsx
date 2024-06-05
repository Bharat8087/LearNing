import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const weatherData = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherData);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
