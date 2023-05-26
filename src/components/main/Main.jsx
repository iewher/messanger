import React, { useState, useEffect } from 'react';
import './style/main-style.css';
import {RiSendPlaneFill} from 'react-icons/ri';
import get_api from '../GET_API/GET_API';

import { LeftBar } from '../left-bar/Left-bar';

export const Main = () => {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);

    const handleSendMessage = async () => {
        const chatId = '79091163129@c.us'; 
        try {
          const response = await get_api.sendMessage(get_api.idInstance, get_api.apiTokenInstance, chatId, message);
          console.log(response); 
          // Add the sent message to the messages list
          setMessagesList([...messagesList, {message: {body: message}}]);
          // Clear the input field
          setMessage('');
        } catch (error) {
          console.error(error); 
        }
      }

      useEffect(() => {
        const interval = setInterval(async () => {
          try {
            const response = await get_api.getMessage(get_api.idInstance, get_api.apiTokenInstance);
            if (response.notifications.length > 0) {
              // Create a new array with the incoming messages appended to the old ones
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
                <LeftBar />
                <div className="main-content">
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
                </div>
            </div>
        </div>
    )
}