import React, { useState } from 'react';
import './style/main-style.scss';
import { RiSendPlaneFill } from 'react-icons/ri';
import get_api from '../GET_API/GET_API';

import { LeftBar } from '../left-bar/Left-bar';
import { Chat } from '../chat/Chat';

export const Main = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="main">
      <div className="main-container">
        <LeftBar onSelectChat={handleSelectChat} />
        {selectedChatId && (
          <div className="main-content">
            <Chat chatId={selectedChatId} />
          </div>
        )}
      </div>
    </div>
  );
};
