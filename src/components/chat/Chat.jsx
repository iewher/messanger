import React, { useState, useEffect } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import get_api from '../GET_API/GET_API';

export const Chat = ({ chatId }) => {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);

  const idInstance = localStorage.getItem('IdInstance');
  const apiTokenInstance = localStorage.getItem('ApiTokenInstance');

  useEffect(() => {
    getMessages();
  }, [chatId]);

  const getMessages = async () => {
    try {
      const response = await get_api.getMessage(idInstance, apiTokenInstance);
      console.log(response);
      if (response.success) {
        setMessagesList([...messagesList, ...response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      try {
        const response = await get_api.sendMessage(chatId, message);
        console.log(response);
        setMessagesList([...messagesList, response.message]);
        setMessage('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="main-chat">
      <div className="main-messages">
        {messagesList && messagesList.length > 0 ? (
          messagesList.map((message, index) => {
            return (
              <div key={index}>
                <p>{message && message.message.body}</p>
              </div>
            );
          })
        ) : (
          <div>No messages</div>
        )}
      </div>
      <div className="main-chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ожидаю вашего сообщения"
        />
        <button onClick={handleSendMessage}>
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
};