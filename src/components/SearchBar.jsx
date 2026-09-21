import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city (e.g., London, Tokyo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button 
        type="submit" 
        className="search-btn" 
        disabled={!city.trim() || isLoading}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
