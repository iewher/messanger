import React, { useState } from 'react';
import './style/left-bar-style.scss';

import { Header } from '../header/Header';

export const LeftBar = ({ onSelectChat }) => {
    const [chatList, setChatList] = useState([]);
    const [newChatId, setNewChatId] = useState('');

    const handleAddChat = (e) => {
        e.preventDefault();
        if (newChatId !== '') {
          setChatList([...chatList, newChatId]);
          setNewChatId('');
        }
      }

    const handleSelectChat = (chatId) => {
        onSelectChat(chatId);
    }

    return (
        <div className="left-bar">
            <Header />
            <form onSubmit={handleAddChat} className="left-bar-form">
                <input
                    type="text"
                    placeholder="Введите номер чата"
                    value={newChatId}
                    onChange={(e) => setNewChatId(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>
            <div className="left-bar-content">
                <ul>
                    {chatList.map((chatId, index) => (
                        <li key={index} onClick={() => handleSelectChat(chatId)}>
                            {chatId}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
