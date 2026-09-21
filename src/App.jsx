import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { CloudSun } from 'lucide-react';
import './index.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city) return;
    
    if (!API_KEY || API_KEY === 'your_openweathermap_api_key_here') {
      setError("API Key is missing. Please add VITE_WEATHER_API_KEY to your .env file.");
      return;
    }

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        }
        throw new Error('Failed to fetch weather data. Please try again later.');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Weather Dashboard</h1>
        
        <SearchBar onSearch={fetchWeather} isLoading={loading} />
        
        {loading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {weatherData && !loading && !error && (
          <WeatherCard data={weatherData} />
        )}

        {!weatherData && !loading && !error && (
          <div className="empty-state">
            <CloudSun size={64} />
            <h2>Enter a city name to get started</h2>
            <p>Get current weather conditions, temperature, and more.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
