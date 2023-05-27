import React from 'react';
import './style/search-style.css';

export const Search = ({ onChange, onSearchButtonClick }) => {
    const handleInputChange = (event) => {
        if (onChange) {
            onChange(event);
        }
    }

    const handleSearchButtonClick = () => {
        if (onSearchButtonClick) {
            onSearchButtonClick();
        }
    }

    return (
        <div className="search">
            <input type="text" placeholder='Поиск или новый чат' className='search-input' onChange={handleInputChange} />
            <button onClick={handleSearchButtonClick} className='search-button'>Поиск</button>
        </div>
    )
}