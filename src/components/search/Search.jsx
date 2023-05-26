import React from 'react';
import './style/search-style.css';

export const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder='Поиск или новый чат' className='search-input' />
        </div>
    )
}