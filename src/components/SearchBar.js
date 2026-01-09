import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-header">
        <img src="./logo.png" alt="Logo" className="search-logo" />
        <p className="hero-text">Discover and download high-quality photos from Unsplash</p>
      </div>
      <form onSubmit={handleFormSubmit} className="search-form">
        <div className="search-input-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            value={term} 
            onChange={handleChange} 
            placeholder="Search for anything..."
            className="search-input"
          />
        </div>
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;