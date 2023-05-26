import React, { useState } from 'react';
import './style/main-style.css';
import get_api from '../GET_API/GET_API';

import { LeftBar } from '../left-bar/Left-bar';

export const Main = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        const chatId = '79091163129@c.us'; 
        try {
            const response = await get_api.sendMessage(get_api.idInstance, get_api.apiTokenInstance, chatId, message);
            console.log(response); 
        } catch (error) {
            console.error(error); 
        }
    }

    return (
        <div className="main">
            <div className="main-container">
                <LeftBar />
                <div className="main-content">
                    <div className='main-image-preload'>
                        <img src='https://cdn-icons-png.flaticon.com/512/17/17470.png?w=360'/>
                    </div>
                    <div className="main-text-preload">
                        <p>Отправляйте или получайте сообщение</p>
                    </div>
                    <div className="main-text-preload">
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={handleSendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}