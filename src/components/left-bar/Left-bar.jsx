import React, { useState } from 'react';
import './style/left-bar-style.css'

import { Header } from '../header/Header';
import { Search } from '../search/Search';

export const LeftBar = () => {
    const [chatid, setChatId] = useState('');
    const [chats, setChats] = useState([]);

    const handleInputChange = (event) => {
        setChatId(event.target.value);
    };

    const handleSearchButtonClick = () => {
        setChats([...chats, chatid]);
        setChatId('');
    };

    return (
        <div className="left-bar">
            <Header />
            <Search onChange={handleInputChange} onSearchButtonClick={handleSearchButtonClick} />
            <div className="left-bar-content">
                {chats.map((chat, index) => (
                    <div key={index}>
                        <button>{chat}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}