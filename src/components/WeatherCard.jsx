import React from 'react';
import { Droplets, Wind, Sunrise, Sunset, MapPin } from 'lucide-react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ data }) => {
  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, humidity, feels_like },
    wind: { speed },
    weather
  } = data;

  const weatherData = weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-main">
        <div className="location-info">
          <MapPin size={24} className="location-icon" />
          <h2 className="city-name">{name}, {country}</h2>
        </div>
        
        <div className="temp-container">
          <div className="temp-main">
            <img src={iconUrl} alt={weatherData.description} className="weather-icon" />
            <div className="temp-value">
              {Math.round(temp)}&deg;<span>C</span>
            </div>
          </div>
          <p className="weather-description">{weatherData.description}</p>
          <p className="feels-like">Feels like {Math.round(feels_like)}&deg;C</p>
        </div>
      </div>

      <div className="weather-details-grid">
        <div className="detail-card">
          <Droplets size={24} className="detail-icon humidity" />
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>
        
        <div className="detail-card">
          <Wind size={24} className="detail-icon wind" />
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{speed} m/s</span>
          </div>
        </div>

        <div className="detail-card">
          <Sunrise size={24} className="detail-icon sun" />
          <div className="detail-info">
            <span className="detail-label">Sunrise</span>
            <span className="detail-value">{formatTime(sunrise)}</span>
          </div>
        </div>

        <div className="detail-card">
          <Sunset size={24} className="detail-icon sun" />
          <div className="detail-info">
            <span className="detail-label">Sunset</span>
            <span className="detail-value">{formatTime(sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
