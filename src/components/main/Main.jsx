import React, { useState, useEffect } from 'react';
import './style/main-style.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import get_api from '../GET_API/GET_API';

import { LeftBar } from '../left-bar/Left-bar';

export const Main = () => {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    const [chatId, setChatId] = useState('');

    const handleSendMessage = async () => {
        if (chatId) { 
            try {
              const response = await get_api.sendMessage(get_api.idInstance, get_api.apiTokenInstance, chatId, message);
              console.log(response); 
              setMessagesList([...messagesList, {message: {body: message}}]);
              setMessage('');
            } catch (error) {
              console.error(error); 
            }
        } else {
            alert('Пожалуйста, выберите чат.'); 
        }
      }

    useEffect(() => {
        const interval = setInterval(async () => {
          try {
            const response = await get_api.getMessage(get_api.idInstance, get_api.apiTokenInstance);
            if (response.notifications.length > 0) {
              const newMessages = messagesList.concat(response.notifications.map(notification => notification.message));
              setMessagesList(newMessages);
            }
          } catch (error) {
            console.error(error);
          }
        }, 1000);
      
        return () => clearInterval(interval);
      }, [messagesList]);
      
    return (
        <div className="main">
            <div className="main-container">
                <LeftBar setChatId={setChatId}/> 
                <div className="main-content">
                    {chatId ? (
                        <div className='main-chat'>
                            <div className='main-messages'>
                                {messagesList.map((message, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{message && message.message.body}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='main-chat-input'>
                                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Ожидаю вашего сообщения'/>
                                <button onClick={handleSendMessage}><RiSendPlaneFill /></button>
                            </div>
                        </div>
                    ) : (
                        <div className='no-chat-selected'> 
                            <div className='no-chat-image'>
                                <img src='https://cdn-icons-png.flaticon.com/512/17/17470.png?w=360' alt='Изображение'/>
                            </div>
                            <div className='no-chat-text'>
                                <p>Выберите чат</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}