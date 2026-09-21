# Assignment 04: Weather Dashboard

## Objective
Develop a weather application using OpenWeatherMap API to display Temperature, Humidity, Wind Speed, Weather Icon, Sunrise, and Sunset times.

## Technologies Used
- React (Vite)
- Fetch API & Async/Await
- useEffect & useState Hooks
- OpenWeatherMap API
- Environment Variables

## Features
- Real-time weather data fetching
- Search by City functionality
- Loading Spinner
- Error Handling (Network errors, invalid city, missing API key)
- Modern glassmorphism UI design

## Folder Structure
```
assignment-04-weather-dashboard/
├── .env
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   ├── styles/
│   │   ├── SearchBar.css
│   │   └── WeatherCard.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## How to Install
1. Navigate to the project directory: `cd assignment-04-weather-dashboard`
2. Install dependencies: `npm install`
3. Add your OpenWeatherMap API Key in the `.env` file:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **API Integration**: Using `fetch` to retrieve data from an external REST API asynchronously.
- **Side Effects**: Leveraging `useEffect` (conceptually) and asynchronous functions to handle data loading without blocking the UI.
- **Environment Variables**: Keeping sensitive data like API keys out of source code using Vite's `.env` mechanism.
- **Error Handling & Conditional Rendering**: Showing spinners while data loads and error components if the fetch fails.
